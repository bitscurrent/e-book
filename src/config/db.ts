import { config } from "./config";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => { // Change "Connected" to "connected"
            console.log("Connected to database successfully");
        });
        mongoose.connection.on("error", (err) => {
            console.log("Error in connecting to database", err);
        });
        await mongoose.connect(config.mongodb_uri as string);

       
    } catch (err) {
        console.error("Failed to connect to the database", err);
        process.exit(1);
    }
};

export default connectDB;
