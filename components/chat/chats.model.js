const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  users: [{ type: Schema.ObjectId, ref: 'user' }],
  // message: { type: Schema.ObjectId, ref: 'message', required: true },
});

const ChatModel = mongoose.model('chat', chatSchema);

module.exports = ChatModel;
