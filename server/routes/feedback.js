const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error });
  }
});


router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find();

    if (!feedback || feedback.length === 0) {
      return res.status(404).json({ message: 'No feedback found' });
    }

    return res.status(200).json(feedback);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
