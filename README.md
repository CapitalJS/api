# capitaljs-api

To hack on this first link the unpublished capitaljs:

```bash
# from your local capitaljs directory
$ npm link

# then cd into your capitaljs api directory and run
$ npm link capitaljs
```

To run the app, install dependencies and start the server:

```bash
npm install
npm start
```

Hitting <http://localhost:3000/amortization?amount=180000&rate=4.25&totalTerm=360&amortizeTerm=60>
in your browser should return return json with amortization calculations.
