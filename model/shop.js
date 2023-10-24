const {Client} = require('pg');
var conn_string = require('./pg_config');

async function displayShop(){
    const client = new Client(conn_string);
    await client.connect();
    

    const sql = 'SELECT * FROM shop';
    client.query(sql)
    .then(result => {
        const data = result.rows;
        return data;
    })
    .finally(() => client.end());
}
module.exports = displayShop;