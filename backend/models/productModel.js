import mongoose from 'mongoose';

// <---- NEW REVIEW SCHEMA- new reviews for mongoDB schema ---->
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// <---- NEW PRODUCT SCHEMA- new product for mongoDB schema ---->
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    identifier: {
      type: String,
      trim: true,
      immutable: true,
    },
    catalogueCollection: {
      type: String,
      enum: ['Core', 'Limited / Vintage'],
      immutable: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    heatLevel: {
      type: Number,
      min: 1,
      max: 10,
      default: null,
    },
    flavourProfile: {
      type: String,
      trim: true,
      default: '',
    },
    pairings: {
      type: [String],
      default: [],
    },
    ingredients: {
      type: String,
      trim: true,
      default: '',
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index(
  { identifier: 1 },
  { unique: true, sparse: true, name: 'unique_product_identifier' }
);

// <---- NEW PRODUCT MODEL- new product for mongoDB schema ---->
const Product = mongoose.model('Product', productSchema);

// <---- EXPORT ---->
export default Product;
