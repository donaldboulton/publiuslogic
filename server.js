require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Pusher = require('pusher')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'us2',
  encrypted: true,
})

let comments = [
  {
    author: 'donaldboulton',
    message: 'i totally didn\'t see that coming',
  },
]

app.post('/comment', function (req, res) {
  const { author, email, message } = req.body
  comments = [...[{ author, email, message }], ...comments]
  pusher.trigger('publiuslogic.com-production', 'new-comment', { author, email, message })
  res.sendStatus(200)
})

app.get('/comments', function (req, res) {
  res.json(comments)
})

app.listen(port, function () {
  console.log('Node app is running at localhost:' + port)
})