

const routerPong = require('express').Router()
const fs = require('fs')
const path="/pingdata/log/"

var counter=0

routerPong.get('/',async(request, response) => {

      counter++
      response.json({"response":"pong "+counter})
      fs.writeFile(path+'pongs.txt',counter, writeError => {

            if(writeError) {
                  console.log(writeError)
            }

      })
	  
})

 module.exports = routerPong