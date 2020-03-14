require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

const app = new express();

const { NoteModel } = require('./model/');
// Serve static files from the React app
app.use(express.static('../frontend/build'));

app.get('/api/note', async (req, res) => {
  const result = await NoteModel.find()
  return res.send({ result })
})

app.get('*', (req, res) => {  
  return res.sendFile('index.html');
})

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));