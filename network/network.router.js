const messageNetwork = require('../components/message/messages.network');
const userNetwork = require('../components/user/users.network');
const chatNetwork = require('../components/chat/chats.network');

const routes = function (server) {
  server.use('/messages', messageNetwork);
  server.use('/users', userNetwork);
  server.use('/chats', chatNetwork);
};

module.exports = routes;
