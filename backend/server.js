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
