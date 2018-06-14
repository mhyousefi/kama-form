const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.port || 8080

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(require('./src/controllers'))

app.listen(port)
console.log(`Listening on port ${port}`)