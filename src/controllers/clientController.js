const Client = require('../models/Client');

exports.createClient = async (req, res, next) => {
  try {
    const { name, designation, description, image } = req.body;
    if (!name) return res.status(400).json({ error: 'name is required' });
    const client = await Client.create({ name, designation, description, image });
    res.status(201).json(client);
  } catch (err) {
    next(err);
  }
};

exports.getClients = async (req, res, next) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    next(err);
  }
};
