

const routerPong = require('express').Router()
const { Client } = require('pg')
const path="/usr/src/pingpong/howmanypings/"

const client = new Client({
      user: process.env.POSTGRES_USER,
      host: 'database',
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
    })

client.connect()

routerPong.get('/',async(request, response) => {


      const result = await client.query('SELECT * from counter')
    
      await client.query('UPDATE COUNTER SET COUNT=('+( result.rows[0].count + 1 )+ ')')

      const updatedresult = await client.query('SELECT * from counter')

      response.json({"response":"pong "+(updatedresult.rows[0].count)})

	  
})

routerPong.get('/count',async(request, response) => {

      const result = await client.query('SELECT * from counter')
     
      response.write(result.rows[0].count+'', 'utf8', () => {});
      response.end('')
	  
})

 module.exports = routerPong