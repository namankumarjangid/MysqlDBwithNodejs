const mysql = require("mysql")

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    // password : "password",
    database : "nodejs",
    multipleStatements : true
})

mysqlConnection.connect((err)=>{
    if (!err) {
        console.log("connection successful")
    } else {
        console.log("error connecting" + err)
    }
    return;
})


module.exports = mysqlConnection;