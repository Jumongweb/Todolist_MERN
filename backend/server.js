const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const allowedOrigin = (process.env.FRONTEND_URL || 'http://localhost:3000').replace(/\/+$/, '');

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
  });

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
