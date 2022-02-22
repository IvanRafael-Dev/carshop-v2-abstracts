/* eslint-disable no-restricted-syntax */
import mongoose from 'mongoose';

const clearDatabase = async (): Promise<void> => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    collection.deleteMany({});
  }
};

export default clearDatabase;
