const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const bodyParser = require('body-parser')
const { name } = require('ejs')
const { graphql } = require("@octokit/graphql");
// const graphql = require('graphql.js')

let users= {}
// const formatMessage = require('./utils/messages')
const PORT = process.env.PORT || 3000
http.listen(PORT, () =>{ console.log(`Server running on port ${PORT}`)})

// statics 
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ejs template engine
app.set('view engine', 'ejs')
app.set('views', './views')


// render index
app.get('/', (request, response) =>{
    response.render('pages/index')
})

