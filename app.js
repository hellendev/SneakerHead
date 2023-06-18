const express = require('express');
const mongoose = require('mongoose');
const shoeRoutes = require('./routes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/shoes', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use('/shoes', shoeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
