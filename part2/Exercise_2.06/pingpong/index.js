
require('dotenv').config()
const app = require('./app')
const http = require('http')
const server = http.createServer(app)

const portEnv = process.env.PORT || 3011


server.listen(portEnv, () => {
  
   console.log(`Server started in port ${portEnv}`)

})

