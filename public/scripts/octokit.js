console.log('octokit is gelinkt')

// const graphqlWithAuth = graphql.defaults({
//   headers: {
//     authorization: `token secret123`,
//   },
// });

// const { repository } = await graphqlWithAuth(`
//   {
//     repository(owner: "octokit", name: "graphql.js") {
//       issues(last: 3) {
//         edges {
//           node {
//             title
//           }
//         }
//       }
//     }
//   }
// `);


// const { repository } = await graphql(
//   `
//     mutation CreateIssue {
//       createIssue(
//         input: {repositoryId: "MDEwOlJlcG9zaXRvcnkxODc2NzY1MzM", title: "TestIssue", body: "An issue from the site"}
//       ) {
//         issue {
//           number
//           body
//         }
//       }
//     }
//   `,
//   {
//     headers: {
//       authorization: `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`,
//     },
//   }
// );


// mutation CreateIssue {
//   createIssue(
//     input: {repositoryId: "MDEwOlJlcG9zaXRvcnkxODc2NzY1MzM", title: "TestIssue", body: "An issue from the site"}
//   ) {
//     issue {
//       number
//       body
//     }
//   }
// }

// authorization: `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`
