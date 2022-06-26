
const routerTest = require('express').Router()
var hashGenerator = require('hash-generator');
var generatedhash = hashGenerator(8);
const axios =require('axios')

const fs = require('fs')
const path="/usr/src/generator/howmanypings/"
var pong=''

/*
Depcrated for now

routerTest.get('/',async(request, response) => {

      fs.readFile(path+'pongs.txt', 'utf8', (readError, pongs) => {

            if(readError) {
                  console.log(readError)
            }
     
            response.write(new Date(Date.now())+': '+generatedhash, 'utf8', () => {});
            response.end('\nPing / Pongs: '+pongs)
      });


	  
})
*/

routerTest.get('/',async(request, response) => {

      const responseFromPingpong = await axios.get('http://pingpongservice:567/pingpong/count')
      const pongs = responseFromPingpong.data
      response.write(process.env.MESSAGE+'\n')
      response.write(new Date(Date.now())+': '+generatedhash, 'utf8', () => {});
      response.end('\nPing / Pongs: '+pongs)
})

 module.exports = routerTest