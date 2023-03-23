const list = [];

function getMessages() {
  return list;
}

function addMessage(message) {
  list.push(message);
}

module.exports = { list: getMessages, add: addMessage };
