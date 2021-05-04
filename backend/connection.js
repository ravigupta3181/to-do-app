const mysql = require('mysql');

var mysqlConnecrtion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todoapp",
    multipleStatements: true
});

mysqlConnecrtion.connect((err) => {
    if(!err) {
        console.log('connected');
    } else {
        console.log('connection failed');
    }
})

module.exports = mysqlConnecrtion;

