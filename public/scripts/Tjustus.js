console.log('Tjustus.js is gelinkt')

// require('dotenv').config()
// import dotenv from 'dotenv'

// Local .env
let secret123 = `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`
let repoID = `MDEwOlJlcG9zaXRvcnkxODc2NzY1MzM`

// // //process.env.TOKEN
// let secret123 = process.env.TOKEN
// let repoID = process.env.REPO

console.log('token ' + secret123)
console.log(repoID)

console.log('Tjustus.js werkt nog')

const { graphql } = require('@octokit/graphql')
const fs = require('fs')



const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: 'token ' + secret123
  }
})








// .post('/', (req, res) => {
//     res.render('home', {
//       veld1: req.body.veld1,
//       veld2: req.body.veld2,
//     })
//   })




// Mutation
// mutation CreateIssue {
//     createIssue(
//       input: {repositoryId: "MDEwOlJlcG9zaXRvcnkxODc2NzY1MzM", title: "TestIssue", body: "An issue from the site"}
//     ) {
//       issue {
//         number
//         body
//       }
//     }
//   }
    

// const graphqlWithAuth = graphql.defaults({
//     headers: {
//       authorization: `token secret123`,
//     },
//   });

console.log('Tjustus.js werkt helemaal')
