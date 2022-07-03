require("dotenv").config()
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const bodyParser = require('body-parser')
const { name } = require('ejs')
const { graphql } = require('@octokit/graphql')

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: 'token ' + process.env.TOKEN
    }
})

// console.log(secret123)
// console.log(repoID)

// const { graphql } = require("@octokit/graphql");
// const graphql = reqquire('graphql.js')

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

// // render send to JSON endpoint
// app.get('/form', (request, response) =>{
//     response.render('pages/form')
// })

app.post('/', (request, response) => {
    console.log('posted!')

    graphqlWithAuth(`mutation CreateIssue {
        createIssue(input: {
            repositoryId: "${process.env.REPO}",
            title: "${request.body.title}", 
            body: "${request.body.body}"}) {
                issue {
                    number
                    body
                }
            }
    }`).then(data => {
        console.log(data)
        response.render('pages/index')
    })
})