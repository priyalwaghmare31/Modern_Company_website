const express = require('express');
const router = express.Router();
const { addSubscriber, getSubscribers } = require('../controllers/subscriberController');

router.post('/', addSubscriber);
router.get('/', getSubscribers);

module.exports = router;
