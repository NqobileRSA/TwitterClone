import mongoose from "mongoose";

const connectedMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectedMongoDB;
