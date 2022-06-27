const client = new Client({
    user: 'testuser',
    host: 'database',
    database: 'test',
    password: 'password',
    port: 5432,
  })


  async function test() {

    client.connect()

    const result = await client.query('SELECT * from counter')
  
    console.log(result)
  }

  test()

  //client.end()