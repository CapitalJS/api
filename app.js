var express = require('express');
var capitaljs = require('capitaljs');

var app = express();
var port = process.env.PORT || 3000;

app.get('/amortization/', function(req, res) {

  var amount = req.query.amount;
  var rate = req.query.rate;
  var totalTerm = req.query.totalTerm;
  var amortizeTerm = req.query.amortizeTerm;

  var result = capitaljs.amortization({
    amount: amount,
    rate: rate,
    totalTerm: totalTerm,
    amortizeTerm: amortizeTerm
  });

  res.json(result);
});

app.listen(port, function() {
  console.log('app started on port ' + port);
});
