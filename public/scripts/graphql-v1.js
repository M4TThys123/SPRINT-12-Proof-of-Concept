//|  Validation  |||  

const { validate } = require("@octokit/graphql-schema");
const errors = validate(`
{
  viewer {
    login
  }
}
`);
// errors is array. Contains errors if any

// You can also load the current Schema directly as JSON or IDL.
const { schema } = require("@octokit/graphql-schema");
schema.json; // JSON version
schema.idl; // IDL version


//|  Schema as Types  |||  

import { graphql } from "@octokit/graphql";
import { Repository } from "@octokit/graphql-schema";

const { repository } = await graphql<{ repository: Repository }>(
  `
    {
      repository(owner: "octokit", name: "graphql.js") {
        issues(last: 3) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
  `,
  {
    headers: {
      authorization: `token secret123`,
    },
  }
);

