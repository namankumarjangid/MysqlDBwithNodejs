const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")

const Peopleroutes = require("./router")

const mysqlConnection = require("./connection")

var app = express();

app.use(bodyParser.json());

app.use("/people",Peopleroutes );



app.listen(3000);