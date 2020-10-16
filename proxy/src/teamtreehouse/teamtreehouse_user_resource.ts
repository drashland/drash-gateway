import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class TeamTreeHouseUserResource extends Drash.Http.Resource {
  private readonly teamtreehouse_api_url = "http://teamtreehouse.com"

  static paths = ["/api/teamtreehouse/user/:name"]

  public async GET() {
    const username = this.request.getPathParam("name")
    if (username) {
      let user = await this.getUserByName(username)
      user["badges"] = user['badges'][0] // just to
      this.response.body = user
    }
    // if (accountName) then get account by name

    return this.response
  }

  private async getUserByName(username: string): Promise<any> {
    const res = await fetch(`${this.teamtreehouse_api_url}/${username}.json`)
    const json = await res.json()
    return json
  }
}