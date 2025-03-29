/**
 * Establishes a connection to the MongoDB database using the provided MONGO_URI.
 * 
 * @async
 * @function connectDB
 * @description Connects to the MongoDB database and logs the connection status.
 * @throws {Error} Logs connection error and exits the process if connection fails.
 * @returns {Promise<void>}
 */
import { connect } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
