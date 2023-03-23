const db = require('mongoose');
const MessageModel = require('./messages.model');

db.Promise = global.Promise;
db.set('strictQuery', false);
db.connect('mongodb://root:admin@localhost:27017/?authMechanism=DEFAULT', {
  useNewUrlParser: true,
});

console.log('[db] Successfully connected');

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  return MessageModel.find(filter);
}

function addMessage(message) {
  const myMessage = new MessageModel(message);
  myMessage.save();
}

async function updateMessage(id, message) {
  const myMessage = await MessageModel.findOne({ _id: id });

  myMessage.message = message;
  const editedMessage = await myMessage.save();
  return editedMessage;
}

function deleteMessage(id) {
  return MessageModel.deleteOne({ _id: id });
}

module.exports = {
  list: getMessages,
  add: addMessage,
  update: updateMessage,
  delete: deleteMessage,
};
