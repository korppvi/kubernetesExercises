

const routerPong = require('express').Router()

var counter=0

routerPong.get('/',async(request, response) => {

      counter++
      response.json({"response":"pong "+counter})
	  
})

 module.exports = routerPong