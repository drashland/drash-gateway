import { Drash } from "https://deno.land/x/drash/mod.ts"
import AmazonProductsResource from "./src/amazon/amazon_products_resource.ts";
import GoogleQueryResource from "./src/google/google_query_resource.ts";
import TeamTreeHouseUserResource from "./src/teamtreehouse/teamtreehouse_user_resource.ts";
import GithubRepoResource from "./src/github/github_repo_resource.ts";

const server = new Drash.Http.Server({
  resources: [
      AmazonProductsResource,
      GoogleQueryResource,
      TeamTreeHouseUserResource,
      GithubRepoResource
  ],
  response_output: "application/json"
})

await server.run({
  hostname: "localhost",
  port: 1448
})