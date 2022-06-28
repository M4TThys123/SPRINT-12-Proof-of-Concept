const github_data = { 
    "token": "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",
    "username": "M4TThys123"
}

const fetch = require("node-fetch")

const body = {
    "query": `
    query {
        user(login: ${github_data["username"]}){
            issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC})
                nodes{
                    title,
                    body,
                    closedAt
                }
        }
    }
    `
}

const baseUrl = "https://api.github.com/graphpl"
const headers = {
    "Content-Type": "application/json",
    Authentication: "bearer"+github_data["token"]
}

fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
}).
then(response => {console.log(JSON.stringify(response))})
.catch(err => console.log(JSON.stringify(err)))

// const sendIssue = {
//     "query": `
//     query {
//         user(login: "M4TThys123"){
//             issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC})
//                 nodes{
//                     title,
//                     body,
//                     closedAt
//                 }
//         }
//     }
//     `
// }