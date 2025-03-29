import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js"; // Use `.js` extension

dotenv.config();
connectDB();

import authRoutes from "./routes/authRoutes.js"; // Use `.js` extension

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
