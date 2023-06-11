//working with database for the first time

//first, you import the mysql2 package
const mysql = require('mysql2/promise');

//next, you create a connection, 
//the option could have been 'createConnection but because
//we will server several requests, we will choose 'createPool()'
const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: 'test123$'
});

module.exports = pool;
