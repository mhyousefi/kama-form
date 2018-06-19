const fs = require('fs')
const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const createDatabaseTable = require('./src/utils/dbUtils').createDatabaseTable
const deleteSomeFormEntries = require('./src/utils/dbUtils').deleteSomeFormEntries
var json2xls = require('json2xls');

const app = express()
const port = process.env.port || 3001
const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};

app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(json2xls.middleware);

createDatabaseTable()
deleteSomeFormEntries()

app.use(require('./src/controllers'))

app.listen(port)
console.log(`Listening on port ${port}`)
https.createServer(options, app).listen(3002)
