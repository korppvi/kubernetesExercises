

const routerTest = require('express').Router()
var hashGenerator = require('hash-generator');
var generatedhash = hashGenerator(8);

const fs = require('fs')
const path="/tmp/pingdata/"
var pong=''

routerTest.get('/',async(request, response) => {

      fs.readFile(path+'pongs.txt', 'utf8', (readError, pongs) => {

            if(readError) {
                  console.log(readError)
            }
     
            response.write(new Date(Date.now())+': '+generatedhash, 'utf8', () => {});
            response.end('\nPing / Pongs: '+pongs)
      });


	  
})

 module.exports = routerTest