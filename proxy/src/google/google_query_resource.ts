import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class GoogleQueryResource extends Drash.Http.Resource {
  static paths = ["/api/google/results"]

  /**
   * eg:
   * http://localhost:1448/api/google/results?query=What+is+deno
   */
  public GET() {
    const query = this.request.getUrlQueryParam("query")
    if (query) {
      // do a similar thing to the amazon resource
    }

    return this.response
  }
}