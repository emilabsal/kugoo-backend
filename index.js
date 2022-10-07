//imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const pgp = require("pg-promise")
// var db = pgp("postgres://postgres:kirka-mop@host:port/test");

// db.one("SELECT $1 AS value", 123)
//   .then(function (data) {
//     console.log("DATA:", data.value);
//   })
//   .catch(function (error) {
//     console.log("ERROR:", error);
//   });

//create
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//use
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT)