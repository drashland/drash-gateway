import { Drash } from "https://deno.land/x/drash/mod.ts"

class HomeResource extends Drash.Http.Resource {
  static paths = ["/", "/home"]

  public GET () {
    this.response.body = "My html file!"
  }
}

const server = new Drash.Http.Server({
  resources: [HomeResource],
  views_path: "./views"
})

await server.run({
  hostname: "localhost",
  port: 1447
})

const amazonResults =  await fetch("http://localhost:1448/api/amazon/products?keyword=Deno")
console.log('[AMAZON RESULTS]')
console.log(await amazonResults.json())
const githubResults = await fetch("http://localhost:1448/api/github/repos/ebebbington")
console.log("[GITHUB RESULTS] - 1st repo")
console.log(await githubResults.json())
const teamTreeHouseResults = await fetch("http://localhost:1448/api/teamtreehouse/user/ericcrooks")
console.log('[TEAMTREEHOUSE RESULTS] - 1st  result')
console.log(await teamTreeHouseResults.json())