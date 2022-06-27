
const { Client } = require('pg')

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'database',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    })
    
    client
      .connect()
      .then(() => console.log('connected'))
      .catch(err => console.error('connection error', err.stack))

      
    client.query("CREATE TABLE COUNTER (count integer);", (err, res) => {
        if (err) {
                console.error(err);
                return;
            }
    });

    client.query("INSERT INTO COUNTER VALUES(0);", (err, res) => {
      if (err) {
              console.error(err);
              return;
          }
          client.end();
  });