const express = require('express')
const app = express()
const cors = require('cors')

const router = require('./controllers/todos')
app.use(express.static('build'));
app.use(cors())
app.use('/', router)

module.exports = app