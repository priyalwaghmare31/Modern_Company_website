const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  designation: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
