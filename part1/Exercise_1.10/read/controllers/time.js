

const routerTest = require('express').Router()
var hashGenerator = require('hash-generator');

global.generatedstring = hashGenerator(8);

routerTest.get('/',async(request, response) => {

      response.json({"response":generatedstring})
	  
})

 module.exports = routerTest