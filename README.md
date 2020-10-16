1. `server` directory acts as your main server. Maybe it  displays your views and handles the web app

2. `proxy` directory is your  proxy server. It's a drash server with many resources assigned to it, to handle anything related to your 'api endpoints'

3. This is a very basic example, but for demonstration purposes, clone this repo  and:

    * start the proxy server: `deno run -A  proxy/app.ts`
        * This  will create  a server on port 1448, to handle the following endpoints: `/api/amazon/products`, `/api/google/results`
    * start your main server: `deno run -A server/app.ts`
        * This will start your main server, and if you take a look at `server/app.ts`  at the bottom, we're using a `fetch` request to demonstrate requests to the gateway, and the API can handle these requests.
        * See your command line for the example output your proxy would return, and then maybe your main server would send this to the client
        