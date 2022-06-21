

const routerTest = require('express').Router()


routerTest.get('/',async(request, response) => {

      response.json({"response":"test"})
	  
})

 module.exports = routerTest