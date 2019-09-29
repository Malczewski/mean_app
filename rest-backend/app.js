const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/messages', (req, res) => res.send([
  {author: 'Someone', date: new Date(), text: 'Hello everyone!'},
  {author: 'Another one', date: new Date(2019, 5, 23), text: 'Hi there!'},
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))