//imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

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