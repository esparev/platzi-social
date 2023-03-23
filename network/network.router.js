const messageNetwork = require('../components/message/messages.network');
const userNetwork = require('../components/user/users.network');

const routes = function (server) {
  server.use('/messages', messageNetwork);
  server.use('/users', userNetwork);
};

module.exports = routes;
