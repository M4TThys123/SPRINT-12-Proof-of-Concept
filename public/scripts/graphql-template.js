// var graphql = require('graphql.js')

// <script src="/path/to/graphql.js"></script>

//Begin van de pagina
import graphql from 'graphql.js'

// Connect...
var graph = graphql("/graphql")

// Prepare...
graph.fragment({
  user: `on User {
    id,
    name
  }`
})

const allUsers = graph(`query { allUsers { ...user } }`)

const createUser = graph(`mutation (@autodeclare) {
  createUser($firstName, $lastName) { ...user }
}`)

await createUser({
  firstName: "John",
  lastName: "Doe"
})

const users = await allUsers()

console.log(users)
// {
//   "allUsers": [{ "id": 1, "name": "John Doe" }]
// }

