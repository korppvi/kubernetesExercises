

const routerTest = require('express').Router()
var generaterString = require("randomstring");

global.generatedstring = generaterString.generate();

routerTest.get('/',async(request, response) => {

      response.json({"response":generatedstring+' '+new Date(Date.now())})
	  
})

 module.exports = routerTest