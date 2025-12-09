const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  mobile: { type: String, default: '' },
  city: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
