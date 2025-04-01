import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";

dotenv.config();
connectDB();

import authRoutes from "./routes/authRoutes.js"; // Use `.js` extension

const app = express();

// Update CORS to allow specific origin
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5000',
  credentials: true
}));

app.use(express.json());
app.use("/api/auth", authRoutes);

// Add a health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
