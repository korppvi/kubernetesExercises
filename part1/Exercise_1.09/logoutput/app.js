const express = require('express')
const app = express()
const cors = require('cors')

const routerTest = require('./controllers/time')

app.use(cors())
app.use(express.json())
app.use('/random', routerTest)

module.exports = app