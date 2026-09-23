import fs from 'fs';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes, {
  serveUploadedImage,
} from './routes/uploadRoutes.js';

dotenv.config();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

const requireDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
};

const isPreviewWithoutDatabase =
  process.env.VERCEL_ENV === 'preview' &&
  !process.env.MONGO_URI &&
  !process.env.MONGODB_URI;

if (isPreviewWithoutDatabase) {
  const catalogue = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'backend', 'data', 'catalogue.json'),
      'utf8',
    ),
  );

  const previewProducts = catalogue.products.map((product) => ({
    ...product,
    _id: `preview-${product.identifier}`,
    reviews: Array.isArray(product.reviews) ? product.reviews : [],
    rating: Number(product.rating) || 0,
    numReviews: Number(product.numReviews) || 0,
  }));

  const heatRanges = {
    mild: [1, 3],
    medium: [4, 6],
    hot: [7, 8],
    'very-hot': [9, 9],
    extreme: [10, 10],
  };

  app.get('/api/products', (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? String(req.query.keyword).trim().toLowerCase()
      : '';
    const requestedHeat = req.query.heat
      ? String(req.query.heat).trim().toLowerCase()
      : '';
    const heatRange = requestedHeat ? heatRanges[requestedHeat] : null;

    if (requestedHeat && !heatRange) {
      return res.status(400).json({ message: 'Invalid heat filter' });
    }

    const filteredProducts = previewProducts.filter((product) => {
      const matchesKeyword =
        !keyword || product.name.toLowerCase().includes(keyword);
      const heat = Number(product.heatLevel);
      const matchesHeat =
        !heatRange || (heat >= heatRange[0] && heat <= heatRange[1]);

      return matchesKeyword && matchesHeat;
    });

    const start = pageSize * (page - 1);

    return res.json({
      products: filteredProducts.slice(start, start + pageSize),
      page,
      pages: Math.ceil(filteredProducts.length / pageSize),
    });
  });

  app.get('/api/products/top', (req, res) => {
    const products = [...previewProducts]
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }

        return b.numReviews - a.numReviews;
      })
      .slice(0, 3);

    res.json(products);
  });

  app.get('/api/products/:id', (req, res, next) => {
    if (!req.params.id.startsWith('preview-')) {
      return next();
    }

    const product = previewProducts.find(
      (item) => item._id === req.params.id,
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json(product);
  });
}

app.use('/api/products', requireDB, productRoutes);
app.use('/api/users', requireDB, userRoutes);
app.use('/api/orders', requireDB, orderRoutes);
app.use('/api/upload', requireDB, uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.get('/uploads/:filename', requireDB, serveUploadedImage);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (process.env.NODE_ENV === 'production') {
  const frontendDistPath = path.join(__dirname, 'frontend', 'dist');

  app.use(express.static(frontendDistPath));

  app.get('*', (req, res) =>
    res.sendFile(path.join(frontendDistPath, 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is working');
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, listening on port http://localhost:${PORT}`
      .magenta.bold
  );
});
