const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Testa se o banco está conectado

connection.connect(function(err){
    if(err) {
        console.error("Error connecting to the database:", err.stack);
        return;
    } else {
        console.log("Mysql Connected");
    }
});
module.exports = connection;