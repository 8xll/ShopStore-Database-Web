const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'shopstore',
    password: ''
});

module.exports = connection;
