var capitaljs = require('capitaljs');

function getIar(req, res) {

  var investmentReturn = req.query.investmentReturn;
  var inflationRate = req.query.inflationRate;

  var result = capitaljs.inflationAdjustedReturn({
    investmentReturn: investmentReturn,
    inflationRate: inflationRate
  });

  res.json(result);
}

module.exports = getIar;
