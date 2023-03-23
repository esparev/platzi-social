const store = require('./users.store');

function getUsers() {
  return new Promise(async (resolve, reject) => {
    resolve(await store.list());
  });
}

function addUser(name) {
  return new Promise(async (resolve, reject) => {
    if (!name) {
      console.error('[userController] There is no name');
      reject('The data is incorrect');
      return false;
    }

    const user = { name: name };

    await store.add(user);
    resolve(user);
  });
}

function updateUser(id, name) {
  return new Promise(async (resolve, reject) => {
    if (!id || !name) {
      console.error('[userController] There is no id or name');
      reject('Invalid data');
      return false;
    }

    const result = await store.update(id, name);
    resolve(result);
  });
}

function deleteUser(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
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

module.exports = { getUsers, addUser, updateUser, deleteUser };
