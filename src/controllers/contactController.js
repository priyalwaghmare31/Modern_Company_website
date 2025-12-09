const Contact = require('../models/Contact');

exports.createContact = async (req, res, next) => {
  try {
    const { fullname, email, mobile, city } = req.body;
    if (!fullname || !email) return res.status(400).json({ error: 'fullname and email required' });
    const contact = await Contact.create({ fullname, email, mobile, city });
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};
