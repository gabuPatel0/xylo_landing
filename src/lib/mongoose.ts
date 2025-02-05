import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const connectMongo = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI as string;
    const { connection } = await mongoose.connect(mongoUri);
    
    if (connection.readyState === 1) {
      console.log('MongoDB connected');
      return;
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectMongo;
