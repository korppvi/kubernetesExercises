const client = new Client({
    user: 'testuser',
    host: 'database',
    database: 'test',
    password: 'password',
    port: 5432,
  })


  client.connect()

  const result = await client.query('SELECT * from counter')

  console.log(result)

  //client.end()