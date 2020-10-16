import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class AmazonProductsResource extends Drash.Http.Resource {
  private readonly amazon_api_url = "http://api-prd.axesso.de/amz"

  static paths = ["/api/amazon/products"]

  public async GET () {
    const keyword = this.request.getUrlQueryParam("keyword")
    if (keyword) {
      const products = await this.getProductsByKeyword(keyword)
      this.response.body = products
    }
    // if (accountName) then get account by name

    return this.response
  }

  private async getProductsByKeyword (keyword: string): Promise<Array<unknown>> {
    // make the request for this api: await fetch(`${this.amazon_api_url}/amazon-search-by-keyword-asin?keyword=${keyword}&domainCode=com&page=1`)
    const response = [ // example data
      {
        id: "4jjj88uj4jhd",
        name: "Deno sweater",
        description: "A deno.land sweater to wear",
        price: "£30.99",
        // etc
      }
    ]
    return response
  }
}