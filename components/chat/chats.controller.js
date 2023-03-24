const store = require('./chats.store');

function getChats() {
  return new Promise(async (resolve, reject) => {
    resolve(await store.list());
  });
}

function addChat(users) {
  return new Promise(async (resolve, reject) => {
    if (!users) {
      console.error('[chatController] There is no users');
      reject('The data is incorrect');
      return false;
    }

    const chat = { users: users };

    await store.add(chat);
    resolve(chat);
  });
}

function updateChat(id, users) {
  return new Promise(async (resolve, reject) => {
    if (!id || !users) {
      console.error('[chatController] There is no id or users');
      reject('Invalid data');
      return false;
    }

    const result = await store.update(id, name);
    resolve(result);
  });
}

function deleteChat(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.error('[chatController] There is no id');
      reject('Invalid data');
      return false;
    }

    await store
      .delete(id)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { getChats, addChat, updateChat, deleteChat };
