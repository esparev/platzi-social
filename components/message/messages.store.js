const MessageModel = require('./messages.model');

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    MessageModel.find(filter)
      .populate('user')
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }

        resolve(populated);
      });
  });
}

async function addMessage(message) {
  const myMessage = new MessageModel(message);
  await myMessage.save();
}

async function updateMessage(id, message) {
  const myMessage = await MessageModel.findOne({ _id: id });

  myMessage.message = message;
  const editedMessage = await myMessage.save();
  return editedMessage;
}

async function deleteMessage(id) {
  return await MessageModel.deleteOne({ _id: id });
}

module.exports = {
  list: getMessages,
  add: addMessage,
  update: updateMessage,
  delete: deleteMessage,
};
