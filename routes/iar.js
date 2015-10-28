var express = require('express');
var router = express.Router();
var capitaljs = require('capitaljs');

router.get('/', function(req, res) {

  var investmentReturn = req.query.investmentReturn;
  var inflationRate = req.query.inflationRate;

  var result = capitaljs.inflationAdjustedReturn({
    investmentReturn: investmentReturn,
    inflationRate: inflationRate
  });

  res.json(result);
});

module.exports = router;
