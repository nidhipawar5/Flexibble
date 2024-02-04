import mongoose, { ConnectOptions } from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true, // deprecated, but still included for older versions
      useUnifiedTopology: true,
      useCreateIndex: true,
      // Add any other options you need here
    } as ConnectOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

export { connectToDatabase };
