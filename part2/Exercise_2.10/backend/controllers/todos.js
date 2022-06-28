

const router = require('express').Router()
const path = require('path');
const fs = require('fs')
const axios = require('axios')
var bodyParser = require('body-parser')
const { Client } = require('pg')


const pathToimage="/usr/src/webserver/image"

var parser = bodyParser.urlencoded({ extended: false })

function hasExpired(date) {

     const dateNow = new Date();
     dateNow.setHours(0, 0, 0, 0);

     return ((new Date(date)) < dateNow)

}

function writeTimeStamp() {

    fs.writeFileSync(pathToimage+'/timestamp.txt', (new Date(Date.now())+''))
}

async function fetchNewImage() {

     const newImage = await axios({
          method: 'GET',
          url: "https://picsum.photos/1200",
          responseType: 'stream',
     })


     const writer = newImage.data.pipe(fs.createWriteStream(pathToimage+'/randomImge.jpg'));
     writer.on('finish', () => {
       console.log('Got random image');
       
     });

}


/*
router.get('/',async(request, response) => {
     
     response.sendFile(path.join(__dirname+'/page.html'));
	  
})
*/

const client = new Client({
     user: process.env.POSTGRES_USER,
     host: 'database',
     database: process.env.POSTGRES_DB,
     password: process.env.POSTGRES_PASSWORD,
     port: 5432,
   })

client.connect()

router.get('/image',async(request, response) => {

     if (!fs.existsSync(pathToimage+'/randomImge.jpg')) {

          await fetchNewImage()
          writeTimeStamp()

          setTimeout(() => {response.sendFile(pathToimage+'/randomImge.jpg');}, 1000);
          response.set('Cache-Control', 'no-store')
          
     }
     else {

          const date = fs.readFileSync(pathToimage+'/timestamp.txt',{encoding:'utf8', flag:'r'});
            
            if (hasExpired(date))
            {

               await fetchNewImage()
               writeTimeStamp()
            }

          response.sendFile(pathToimage+'/randomImge.jpg')
          response.set('Cache-Control', 'no-store')
     }
})

router.post('/todos',parser ,async(request, response) => {

     const todos =[]

     var todo = request.body.todo

     console.log('todo recieved : '+todo)

     if(todo.length > 140) {

          console.log('Too many characters in :'+todo)
          response.status(200).json({"toomany":"max 140"})
     }

     await client.query("INSERT INTO TODOS VALUES('"+todo+"')")

     const result = await client.query('SELECT * from todos')

     for (let a = 0; a < result.rows.length; a++) {

          todos.push(result.rows[a].task)
        
     } 

     response.status(200).json(todos)

})

router.get('/todos', async(request, response) => {

     const todos =[]

     const result = await client.query('SELECT * from todos')

     for (let a = 0; a < result.rows.length; a++) {

          todos.push(result.rows[a].task)
        
     } 

     response.status(200).json(todos)

})

 module.exports = router