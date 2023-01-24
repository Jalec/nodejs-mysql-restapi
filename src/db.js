const mysql = require('mysql2/promise');

const {
    DB_HOST, 
    DB_PORT, 
    DB_USER, 
    DB_PASSWORD, 
    DB_DATABASE
} = require('./config.js');

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

module.exports = { pool };