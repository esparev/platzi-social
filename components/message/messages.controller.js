const store = require('./messages.store');

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] There is no user or message');
      return reject('The data are incorrect');
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

module.exports = { getMessages, addMessage, updateMessage };
