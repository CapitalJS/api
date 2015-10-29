var capitaljs = require('capitaljs');

function getCagr(req, res) {
  var startValue = req.query.startValue;
  var endValue = req.query.endValue;
  var years = req.query.years;

  if (isNaN(startValue) || isNaN(endValue) || isNaN(years)) {
    res.status(400);
    res.json({error: 'Bad request'});
    return;
  }

  var result = capitaljs.compoundAnnualGrowthRate({
    startValue: startValue,
    endValue: endValue,
    years: years
  });

  res.json(result);
}

module.exports = getCagr;
