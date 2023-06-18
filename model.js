const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sizes: {
    type: [String],
    required: true
  },
  colors: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Shoe', shoeSchema);
