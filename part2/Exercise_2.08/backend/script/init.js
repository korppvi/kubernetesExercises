const { Client } = require('pg')

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'database',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    })
    
    client.connect().then(() =>{}).catch(
        connectionError => console.error(connectionError.stack)
      )

    client.query("CREATE TABLE TODOS (task varchar(255));", (error, response) => {});