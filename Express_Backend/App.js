const express = require('express')
const bodyParser = require('body-parser')
const createDatabaseTable = require('./src/utils/dbUtils').createDatabaseTable

const app = express()
const port = process.env.port || 3001

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

createDatabaseTable()

app.use(require('./src/controllers'))

app.listen(port)
console.log(`Listening on port ${port}`)