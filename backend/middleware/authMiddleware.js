import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  const token = authorization.split(' ')[1];

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      res.status(401);
      throw new Error('Not authorized, user no longer exists');
    }

    req.user = user;
    return next();
  } catch (error) {
    if (res.statusCode !== 401) {
      res.status(401);
    }

    if (error.message === 'Not authorized, user no longer exists') {
      throw error;
    }

    throw new Error('Not authorized, token failed');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }

  res.status(403);
  throw new Error('Not authorized as an admin');
};

export { protect, admin };
