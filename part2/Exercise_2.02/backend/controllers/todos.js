

const router = require('express').Router()
const path = require('path');
const fs = require('fs')
const axios = require('axios')
var bodyParser = require('body-parser')
const todos =[]

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


     var todo = request.body.todo

     todos.push(todo)

     response.status(200).json(todos)

})

router.get('/todos', async(request, response) => {


     response.status(200).json(todos)

})

 module.exports = router