

const routerPong = require('express').Router()
const fs = require('fs')
const path="/usr/src/pingpong/howmanypings/"
var counter=0

routerPong.get('/',async(request, response) => {

      counter++

      
      fs.writeFile(path+'pongs.txt',(counter+''), writeError => {

            if(writeError) {
                  console.log(writeError)
            }

      })
      

      response.json({"response":"pong "+counter})

	  
})

routerPong.get('/test',async(request, response) => {

     
      response.json({"response":"pong "+counter})

	  
})

 module.exports = routerPong