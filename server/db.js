const mysql= require('mysql2');

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: 'defrost'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connenction is secure");
});