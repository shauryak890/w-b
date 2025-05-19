const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact submission schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API route for contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Save to database
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    await newContact.save();
    
    // Email notification can be set up here with nodemailer
    // (Configure with actual email credentials when ready)
    
    res.status(200).json({ success: true, message: 'Thank you for your interest! We will contact you soon.' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
});

// Connect to MongoDB (commented out until database is set up)
/*
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
