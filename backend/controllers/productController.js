import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const HEAT_FILTER_RANGES = {
  mild: [1, 3],
  medium: [4, 6],
  hot: [7, 8],
  'very-hot': [9, 9],
  extreme: [10, 10],
};

const withAuthoritativeReviewSummary = (product) => {
  const productObject = product.toObject ? product.toObject() : product;
  const reviews = Array.isArray(productObject.reviews)
    ? productObject.reviews
    : [];
  const numReviews = reviews.length;
  const rating = numReviews
    ? reviews.reduce(
        (total, review) => total + (Number(review.rating) || 0),
        0,
      ) / numReviews
    : 0;

  const { catalogueCollection, ...publicProduct } = productObject;

  return {
    ...publicProduct,
    collection: catalogueCollection,
    reviews,
    rating,
    numReviews,
  };
};

// <---- GET ROUTES - fetch all products ---->
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const requestedHeat = req.query.heat
    ? String(req.query.heat).trim().toLowerCase()
    : '';
  const heatRange = requestedHeat ? HEAT_FILTER_RANGES[requestedHeat] : null;

  if (requestedHeat && !heatRange) {
    res.status(400);
    throw new Error('Invalid heat filter');
  }

  const heatFilter = heatRange
    ? {
        heatLevel: {
          $gte: heatRange[0],
          $lte: heatRange[1],
        },
      }
    : {};
  const filters = { ...keyword, ...heatFilter };

  // <---- GET ROUTES - count all products ---->
  const count = await Product.countDocuments(filters);
  const productDocuments = await Product.find(filters)
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  const products = productDocuments.map(withAuthoritativeReviewSummary);

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// <---- GET ROUTES - fetch single product by :id ---->
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(withAuthoritativeReviewSummary(product));
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// <---- DELETE PRODUCTS BY Ids ROUTE - delete product ---->
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// <---- CREATE NEW PRODUCT ROUTE - product ---->
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });
  // <---- CREATE ROUTES - new product ---->
  const createdProduct = await product.save();
  res.status(201).json(withAuthoritativeReviewSummary(createdProduct));
});

// <---- UPDATE PRODUCT ROUTES - update product ---->
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    heatLevel,
    flavourProfile,
    pairings,
    ingredients,
    identifier,
    collection,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const identityLocked = Boolean(product.identifier);

    if (
      identityLocked &&
      ((name !== undefined && name !== product.name) ||
        (identifier !== undefined && identifier !== product.identifier) ||
        (collection !== undefined &&
          collection !== product.catalogueCollection))
    ) {
      res.status(400);
      throw new Error(
        'Approved Burnsville product name, identifier and collection are locked',
      );
    }

    if (!identityLocked) {
      product.name = name;
      if (identifier !== undefined)
        product.identifier = identifier || undefined;
      if (collection !== undefined) {
        product.catalogueCollection = collection || undefined;
      }
    }
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.heatLevel =
      heatLevel === '' || heatLevel === null || heatLevel === undefined
        ? null
        : Number(heatLevel);
    product.flavourProfile = flavourProfile || '';
    product.pairings = Array.isArray(pairings)
      ? pairings.map((item) => String(item).trim()).filter(Boolean)
      : [];
    product.ingredients = ingredients || '';

    const updatedProduct = await product.save();
    res.json(withAuthoritativeReviewSummary(updatedProduct));
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// <---- CREATE PRODUCT REVIEW ROUTE - review product ---->
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString(),
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// <---- GET ALL TOPS PRODUCT REVIEW ROUTE - top product review product ---->
const getTopProducts = asyncHandler(async (req, res) => {
  const productDocuments = await Product.find({});
  const products = productDocuments
    .map(withAuthoritativeReviewSummary)
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }

      return b.numReviews - a.numReviews;
    })
    .slice(0, 3);

  res.json(products);
});

// <---- EXPORT  ---->
export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
};
