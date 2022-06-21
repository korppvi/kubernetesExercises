
require('dotenv').config()
const app = require('./app')
const http = require('http')
const cron = require('node-cron');
const server = http.createServer(app)


const portEnv = process.env.PORT || 3015

cron.schedule('*/5 * * * * *', async () => {

	console.log(generatedstring+' '+new Date(Date.now()))

});

server.listen(portEnv, () => {
  
   console.log(`Server started in port ${portEnv}`)
   


})
