const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'user', required: true },
  message: { type: String, required: true },
  date: Date,
});

const MessageModel = mongoose.model('message', messageSchema);

module.exports = MessageModel;
