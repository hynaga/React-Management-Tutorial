const fs = require('fs');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
console.log(conf);
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers', function (req, res) {
    connection.query(
        "SELECT * from CUSTOMER", (err, rows, fields) => { res.send(rows) }
    );  
});

app.listen(port, () => console.log(`Listening on port ${port}`));