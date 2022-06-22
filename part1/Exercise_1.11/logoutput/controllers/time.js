

const routerTest = require('express').Router()
var hashGenerator = require('hash-generator');
var generatedhash = hashGenerator(8);

const fs = require('fs')
const path="/pingdata/log/"

routerTest.get('/',async(request, response) => {

      fs.readFile(path+'pongs.txt', 'utf8', (readError, pongs) => {
     
            console.log(new Date(Date.now())+': '+generatedhash)
            console.log((readError ? readError : 'Ping / Pongs: '+pongs))
      
      });
	  
})

 module.exports = routerTest