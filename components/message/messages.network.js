const express = require('express');
const router = express.Router();
const response = require('../../network/network.response');
const controller = require('./messages.controller.js');

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(req, res, 'Invalid information', 400);
    });
});

module.exports = router;
