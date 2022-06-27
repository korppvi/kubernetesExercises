

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

      client
      .connect()
      .then(() => console.log('connected'))
      .catch(err => console.error('connection error', err.stack))


      client.query('SELECT * from COUNTER', (err, res) => {
            if (err) throw err
            console.log(res)
            client.end()
          })
      

      response.json({"response":"pong "+counter})

	  
})

routerPong.get('/count',async(request, response) => {

     
      response.write(counter+'', 'utf8', () => {});
      response.end('')
	  
})

 module.exports = routerPong