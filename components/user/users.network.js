const express = require('express');
const router = express.Router();
const response = require('../../network/network.response');
const controller = require('./users.controller.js');

router.get('/', (req, res) => {
  controller
    .getUsers()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', (req, res) => {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid information', 400, err);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateUser(req.params.id, req.body.name)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteUser(req.params.id)
    .then(() => {
      response.success(req, res, `User ${req.params.id} deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;
