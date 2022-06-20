const express = require('express')
const app = express()
const cors = require('cors')

const routerTest = require('./controllers/test')

app.use(cors())
app.use(express.json())
app.use('/api/test', routerTest)

module.exports = app