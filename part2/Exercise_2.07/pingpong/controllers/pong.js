

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

client.connect()

routerPong.get('/',async(request, response) => {


      const result = await client.query('SELECT * from counter')
    
      await client.query('INSERT INTO COUNTER VALUES('+( result.rows[0].count + 1 )+ ')')

      response.json({"response":"pong "+(result.rows[0].count+1)})

	  
})

routerPong.get('/count',async(request, response) => {

     
      response.write(counter+'', 'utf8', () => {});
      response.end('')
	  
})

 module.exports = routerPong