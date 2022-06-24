const express = require('express')
const app = express()
const cors = require('cors')

const routerPong = require('./controllers/pong')

app.use(cors())
app.use(express.json())
app.use('/pingpong', routerPong)

module.exports = app