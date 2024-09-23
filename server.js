const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

// Middleware

const errorHandler = require('./middlewares/errorMiddleware');

const rateLimiter = require('./middlewares/rateLimiter');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(rateLimiter);
app.use(express.json());
require('dotenv').config();
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Untuk mengakses gambar yang di-upload

connectDB();

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const categoryRoutes = require('./routes/category');
const detailBookRoutes = require('./routes/detailBook');

// Route
app.use('/api/auth',   authRoutes);
app.use('/api/books',   bookRoutes); // Gunakan middleware untuk autentikasi
app.use('/api/categories',   categoryRoutes); // Gunakan middleware untuk autentikasi
app.use('/api/detailbooks',  detailBookRoutes); // Gunakan middleware untuk autentikasi

// Middleware error handling
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
