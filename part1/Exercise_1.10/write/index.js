
require('dotenv').config()
const cron = require('node-cron');
const fs = require('fs')
const path="C:/Users/Käyttäjä/Desktop/"

cron.schedule('*/5 * * * * *', async () => {
   
   const time = new Date(Date.now())+''

   fs.writeFile(path+'time.txt',time, writeError => {})
   
});