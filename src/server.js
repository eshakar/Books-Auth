import express from 'express';
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
dotenv.config();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

app.use((req, res) => res.status(404).json({ message: 'Not Found' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// mongodb+srv://eshakar001:J8JKYdK44q423Ll8@cluster0.kcxp63f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0