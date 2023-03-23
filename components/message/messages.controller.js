const store = require('./messages.store');

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] There is no user or message');
      reject('The data are incorrect');
      return false;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }

    const result = await store.update(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid data');
      return false;
    }

    store
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
