
const axios = require('axios')

async function fetchTodo() {

    const newtodo = await axios({
         method: 'GET',
         url: "https://en.wikipedia.org/wiki/Special:Random"
    })

    console.log('Read '+newtodo.request.res.responseUrl)

}

fetchTodo()