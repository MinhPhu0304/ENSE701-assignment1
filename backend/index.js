require('dotenv').config({ path: '../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const { NoteModel } = require('./model');

const app = new express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/note', async (req, res) => {
  const result = await NoteModel.find();
  return res.send({ result });
});

app.post('/api/note', async (req, res) => {
  const { content } = req.body;
  const newNote = new NoteModel({
    content,
  });
  await newNote.save();
  return res.send({ newNote });
});

app.put('/api/note', async (req, res) => {
  const { content, _id } = req.body;
  const updatedNote = NoteModel.findOneAndUpdate({ _id }, { content });
  return res.send({ updatedNote });
});

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
