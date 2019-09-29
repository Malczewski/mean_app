const express = require('express')
var cors = require('cors')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const config = require('./config')

const app = express()
const port = 3000
var db

app.use(cors())
app.use(bodyParser.json())


app.get('/messages', (req, res) => {
  var allMessages = db.collection('messages').find({}).toArray((err, result) => res.send(result))
  
})

app.post('/messages', (req, res) => {
  var msg = req.body
  msg.date = new Date()
  msg.id = getNextMessageId();
  db.collection('messages').save(msg)
  res.send()
})

function getNextMessageId() {
  // this is a very bad approach
  var latest = db.collection('messages').find({}, {_id: true}).sort({_id:-1}).limit(1)
  return latest ? latest.id + 1 : 1
}

MongoClient.connect(config.databaseUrl, (err, database) => {
  db = database.db('test-db');
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})