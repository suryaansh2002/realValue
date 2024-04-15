const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const testimonialsRoutes = require('./routes/testimonialsRoutes');
const offersRoutes = require('./routes/offersRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Success');
});
app.use('/api/user', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/offers', offersRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
