require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

const app = new express();

const { NoteModel } = require('./model/');

app.get('/', async (req, res) => {
  return res.json({ message: 'ok'})
})

app.get('/api/note', async (req, res) => {
  const result = await NoteModel.find()
  return res.send({ result })
})

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));