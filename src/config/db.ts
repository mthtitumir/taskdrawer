import { mongoUrl } from "@/libs/secret";
import mongoose from "mongoose";

const connectDB = async (options = {}) => {
    try {
        await mongoose.connect(mongoUrl, options);
        console.log('DB connection successful!');
        mongoose.connection.on('error', (error) => {
            console.error('DB connection error!');
        })
    } catch (error:any) {
        console.error('could not connect to DB!', error.toString());
    }
};

export default connectDB;