import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
  }));
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));