const messageNetwork = require('../components/message/messages.network');

const routes = function (server) {
  server.use('/messages', messageNetwork);
};

module.exports = routes;
