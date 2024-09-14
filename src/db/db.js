import mongoose from "mongoose";
const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connecting to MongoDB successful!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export { connectMongoDB };
