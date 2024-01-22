const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Rutas
router.post('/messages', messageController.createMessage);
router.get('/messages', messageController.getAllMessages);
router.get('/messages/:id', messageController.getMessageById);
router.delete('/messages/:id', messageController.deleteMessageById);

module.exports = router;
