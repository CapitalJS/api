var express = require('express');
var router = express.Router();
var capitaljs = require('capitaljs');

router.get('/', function(req, res) {

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

module.exports = router;
