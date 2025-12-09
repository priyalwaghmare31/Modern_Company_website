const Subscriber = require('../models/Subscriber');

exports.addSubscriber = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'email required' });
    // create will error if duplicate due to unique index
    const s = await Subscriber.create({ email });
    res.status(201).json(s);
  } catch (err) {
    // duplicate key handling
    if (err.code === 11000) return res.status(400).json({ error: 'already subscribed' });
    next(err);
  }
};

exports.getSubscribers = async (req, res, next) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    next(err);
  }
};
