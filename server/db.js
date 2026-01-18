const mysql= require('mysql2');

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: 'defrost'
})

connection.connect(function(err) {
    if (err) throw err;

    console.log("Connection is secure");
});

