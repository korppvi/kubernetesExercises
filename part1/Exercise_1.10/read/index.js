
require('dotenv').config()
const app = require('./app')
const http = require('http')
const cron = require('node-cron');
const server = http.createServer(app)
const fs = require('fs')
const path="/usr/src/generator/timestamp/"

const portEnv = process.env.PORT || 3012

cron.schedule('*/5 * * * * *', async () => {

   fs.readFile(path+'time.txt', 'utf8', (readError, timestamp) => {
     
      console.log((readError ? readError : timestamp+': '+generatedstring) )

    });

   
});

server.listen(portEnv, () => {
  
   console.log(`Server started in port ${portEnv}`)
   


})
