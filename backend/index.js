require('dotenv').config()
const express = require('express')
const app = new express()

app.get('/', (req, res) => {
  return res.json({ message: 'ok'})
})


app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`))