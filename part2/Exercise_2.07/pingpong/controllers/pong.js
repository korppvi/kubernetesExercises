

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

      client
      .connect()
      .then(() => console.log('connected'))
      .catch(err => console.error('connection error', err.stack))

      
      client.query("CREATE TABLE Todos (todo varchar(255));", (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            client.end();
        });
        

          response.write('test', 'utf8', () => {});
          response.end('')
	  
})

 module.exports = routerPong