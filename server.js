var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use(express.static('./build'))
app.use('/lib', express.static('./node_modules'));
app.use(bodyParser.urlencoded({extended: true, limit: '25mb'}))
app.use(bodyParser.json({limit: '25mb', extended: true}))

var port = process.env.PORT || 8080

app.listen(port, console.log('Magic happens on port', port))
