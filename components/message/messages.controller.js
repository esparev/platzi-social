const store = require('./messages.store');

function getMessages(filterChat) {
  return new Promise(async (resolve, reject) => {
    resolve(await store.list(filterChat));
  });
}

function addMessage(chat, user, message) {
  return new Promise(async (resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] There is no chat, user or message');
      reject('The data is incorrect');
      return false;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };

    await store.add(fullMessage);
    resolve(fullMessage);
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.error('[messageController] There is no id or message');
      reject('Invalid data');
      return false;
    }

    const result = await store.update(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.error('[messageController] There is no id');
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

module.exports = { getMessages, addMessage, updateMessage, deleteMessage };
