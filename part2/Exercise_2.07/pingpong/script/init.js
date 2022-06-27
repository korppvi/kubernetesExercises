
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

    client.query("CREATE TABLE COUNTER (count integer);", (error, response) => {});

    client.query("INSERT INTO COUNTER VALUES(0);", (error, response) => {client.end();});