var express = require('express');
var capitaljs = require('capitaljs');

var app = express();

app.get('/amortization/:amount/:rate/:totalTerm/:amortizeTerm', function(req, res) {

  var result = capitaljs.amortization({
    amount: parseInt(req.params.amount),
    rate: parseInt(req.params.rate),
    totalTerm: parseInt(req.params.totalTerm),
    amortizeTerm: parseInt(req.params.amortizeTerm)
  });

  res.json(result);
});

app.listen(3000, function() {
  console.log('App started on port 3000');
});
