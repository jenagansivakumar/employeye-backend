import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'; // Adjust the import based on your actual file structure

dotenv.config();

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the MongoDB URI
console.log('PORT:', process.env.PORT); // Log the PORT

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI!)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('MongoDB connection error:', error);
    });
