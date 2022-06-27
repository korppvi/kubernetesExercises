
const { Client } = require('pg')

const client = new Client({
    user: 'testuser',
    host: 'database',
    database: 'test',
    password: 'password',
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