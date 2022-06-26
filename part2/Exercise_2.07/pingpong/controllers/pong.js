

const routerPong = require('express').Router()
const fs = require('fs')
const { Client } = require('pg')
const path="/usr/src/pingpong/howmanypings/"
var counter=0

const client = new Client({
      user: 'testuser',
      host: 'database',
      database: 'test',
      password: 'password',
      port: 5432,
    })

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

routerPong.get('/testdb',async(request, response) => {

      client.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });
	  
})

 module.exports = routerPong