var capitaljs = require('capitaljs');

function getIar(req, res) {
  var investmentReturn = req.query.investmentReturn;
  var inflationRate = req.query.inflationRate;

  if (isNaN(investmentReturn) || isNaN(inflationRate)) {
    res.status(400);
    res.json({error: 'Bad request'});
    return;
  }

  var result = capitaljs.inflationAdjustedReturn({
    investmentReturn: investmentReturn,
    inflationRate: inflationRate
  });

  res.json({'return': result});
}

module.exports = getIar;
