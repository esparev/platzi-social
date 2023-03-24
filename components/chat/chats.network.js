const express = require('express');
const router = express.Router();
const response = require('../../network/network.response');
const controller = require('./chats.controller.js');

router.get('/', (req, res) => {
  controller
    .getChats()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', (req, res) => {
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid information', 400, err);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateChat(req.params.id, req.body.users)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteChat(req.params.id)
    .then(() => {
      response.success(req, res, `Chat ${req.params.id} deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;
