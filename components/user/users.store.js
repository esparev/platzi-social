const UserModel = require('./users.model');

async function getUsers() {
  return await UserModel.find();
}

async function addUser(user) {
  const myUser = new UserModel(user);
  return await myUser.save();
}

async function updateUser(id, name) {
  const myUser = await UserModel.findOne({ _id: id });

  myUser.name = name;
  const editedUser = await myUser.save();
  return editedUser;
}

async function deleteUser(id) {
  return await UserModel.deleteOne({ _id: id });
}

module.exports = {
  list: getUsers,
  add: addUser,
  update: updateUser,
  delete: deleteUser,
};
