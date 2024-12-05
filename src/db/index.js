const config = {
    "user": "postgres",
    "password": "Postgresql@s864",
    "database": "todoApp",
    "host": "127.0.0.1",
    "port": "5025",
    "dialect": "postgres"
  }
console.log(config)

const { Client } = require('pg');

const client = new Client(config);

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

const closeClient = async () => {
    
    await client.end();
    
}
module.exports = {client, closeClient};