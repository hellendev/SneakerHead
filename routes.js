const express = require('express');
const router = express.Router();
const Shoe = require('./model');
const cors = require('cors');

// Enable CORS for all routes
router.use(cors());

// Create
router.post('/', async (req, res) => {
  const shoe = new Shoe(req.body);
  try {
    const savedShoe = await shoe.save();
    res.status(201).json(savedShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (shoe == null) {
      return res.status(404).json({ message: 'Shoe not found' });
    }
    res.json(shoe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.patch('/:id', async (req, res) => {
  try {
    const updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedShoe == null) {
      return res.status(404).json({ message: 'Shoe not found' });
    }
    res.json(updatedShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete

router.delete('/:id', async (req, res) => {
    try {
      const result = await Shoe.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Shoe not found' });
      }
      res.json({ message: 'Shoe deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;