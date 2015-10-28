var capitaljs = require('capitaljs');

function getCagr(req, res) {

  var startValue = req.query.startValue;
  var endValue = req.query.endValue;
  var years = req.query.years;

  var result = capitaljs.compoundAnnualGrowthRate({
    startValue: startValue,
    endValue: endValue,
    years: years
  });

  res.json(result);
}

module.exports = getCagr;
