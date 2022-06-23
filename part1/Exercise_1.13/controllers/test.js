

const routerTest = require('express').Router()
const path = require('path');
const fs = require('fs')
const axios = require('axios')

const pathToimage="/usr/src/webserver/image"

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


routerTest.get('/',async(request, response) => {
     
     response.sendFile(path.join(__dirname+'/page.html'));
	  
})

routerTest.get('/image',async(request, response) => {

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

 module.exports = routerTest