const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  chat: { type: Schema.ObjectId, ref: 'chat', required: true },
  user: { type: Schema.ObjectId, ref: 'user', required: true },
  message: { type: String, required: true },
  date: Date,
  file: String,
});

const MessageModel = mongoose.model('message', messageSchema);

module.exports = MessageModel;
