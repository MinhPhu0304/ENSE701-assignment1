const mongoose = require('mongoose');
const { NoteSchema } = require('./Note');

const NoteModel = new mongoose.model('Note', NoteSchema)

module.exports = {
  NoteModel
}