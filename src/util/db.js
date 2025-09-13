import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
    try {
      const connectingInstance = await mongoose.connect(process.env.MONGO_URL);
      console.log("DB connected!!");
      console.log(connectingInstance.connection.host);
      
    } catch (error) {
        console.log(`Err connecting DB - ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;