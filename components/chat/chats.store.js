const ChatModel = require('./chats.model');

function getChats() {
  return new Promise((resolve, reject) => {
    ChatModel.find()
      .populate('users')
      .exec((err, populated) => {
        if (err) {
          console.log(err);
          reject(err);
          return false;
        }

        resolve(populated);
      });
  });
}

async function addChat(user) {
  const myChat = new ChatModel(user);
  return await myChat.save();
}

async function updateChat(id, users) {
  const myChat = await ChatModel.findOne({ _id: id });

  myChat.users = users;
  const editedChat = await myChat.save();
  return editedChat;
}

async function deleteChat(id) {
  return await ChatModel.deleteOne({ _id: id });
}

module.exports = {
  list: getChats,
  add: addChat,
  update: updateChat,
  delete: deleteChat,
};
