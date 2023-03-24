const express = require('express');
const router = express.Router();
const response = require('../../network/network.response');
const controller = require('./messages.controller.js');

router.get('/', (req, res) => {
  const filterMessages = req.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid information', 400, err);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Message ${req.params.id} deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;
