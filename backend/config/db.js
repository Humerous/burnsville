import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MongoDB connection string is not configured');
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const hasDatabaseName =
    /^mongodb(?:\+srv)?:\/\/[^/]+\/[^/?]+/.test(mongoUri);

  const conn = await mongoose.connect(
    mongoUri,
    hasDatabaseName
      ? {}
      : {
          dbName: process.env.MONGO_DB_NAME || 'burnsville_current',
        },
  );

  console.log(
    `MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`,
  );
  return conn.connection;
};

export default connectDB;
