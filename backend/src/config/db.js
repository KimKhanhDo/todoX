import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

        console.log('Connect to MongoDB successfully');
    } catch (error) {
        console.error('Error to connect DB: ', error);
        process.exit(1); // exit with error
    }
};
