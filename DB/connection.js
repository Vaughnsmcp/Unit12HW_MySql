const mysql = require ("mysql")
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("I am connected")
    connection.query = util.promisify(connection.query);
    //loadPrompts();
});

module.exports = connection;