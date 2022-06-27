

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

      /*
      client.connect()
      client
        .query('SELECT * from counter')
        .then(result => console.log(result))
        .catch(e => console.error(e.stack))
        .then(() => client.end())

        */

        client.connect()

        const result = await client.query('SELECT * from counter')
    
        client.end()
      
        console.log(result.rows[0].count)

      response.json({"response":"pong "+(result.rows[0].count+1)})

	  
})

routerPong.get('/count',async(request, response) => {

     
      response.write(counter+'', 'utf8', () => {});
      response.end('')
	  
})

 module.exports = routerPong