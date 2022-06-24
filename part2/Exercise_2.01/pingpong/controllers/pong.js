

const routerPong = require('express').Router()
const fs = require('fs')
const path="/usr/src/pingpong/howmanypings/"
var counter=0

routerPong.get('/',async(request, response) => {


      counter++

      /*

      Depcrated for now
      
      fs.writeFile(path+'pongs.txt',(counter+''), writeError => {

            if(writeError) {
                  console.log(writeError)
            }

      })

      */
      

      response.json({"response":"pong "+counter})

	  
})

routerPong.get('/count',async(request, response) => {

     
      response.write(counter+'', 'utf8', () => {});
      response.end('')
	  
})

 module.exports = routerPong