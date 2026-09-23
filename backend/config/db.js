import mongoose from 'mongoose';

let databaseDiagnosticLogged = false;

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MongoDB connection string is not configured');
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const conn = await mongoose.connect(mongoUri);

  console.log(
    `MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`,
  );

  if (!databaseDiagnosticLogged) {
    databaseDiagnosticLogged = true;

    try {
      const { databases = [] } = await conn.connection.db
        .admin()
        .listDatabases();

      const summaries = [];

      for (const { name } of databases) {
        if (['admin', 'config', 'local'].includes(name)) {
          continue;
        }

        const db = conn.connection.getClient().db(name);
        const products = db.collection('products');
        const count = await products.countDocuments({});
        const sample = await products.findOne(
          {},
          { projection: { name: 1, brand: 1, identifier: 1 } },
        );

        summaries.push({
          name,
          productCount: count,
          sample: sample
            ? {
                name: sample.name,
                brand: sample.brand,
                identifier: sample.identifier,
              }
            : null,
        });
      }

      console.log(
        `MongoDB database diagnostic: ${JSON.stringify(summaries)}`,
      );
    } catch (error) {
      console.log(
        `MongoDB database diagnostic unavailable: ${error.message}`,
      );
    }
  }

  return conn.connection;
};

export default connectDB;
