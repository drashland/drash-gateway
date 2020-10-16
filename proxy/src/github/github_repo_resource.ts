import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class GithubRepoResource extends Drash.Http.Resource {
  private readonly github_api_url = "http://api.github.com"

  static paths = ["/api/github/repos/:username"]

  public async GET() {
    const username = this.request.getPathParam("username")
    if (username) {
      const repos = await this.getRepoByUsernameAndName(username)
      this.response.body = [repos[0]]
    }
    // if (accountName) then get account by name

    return this.response
  }

  private async getRepoByUsernameAndName(username: string): Promise<Array<unknown>> {
    const res = await fetch(`${this.github_api_url}/users/${username}/repos`)
    const json = await res.json()
    return json
  }
}