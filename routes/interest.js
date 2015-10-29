var capitaljs = require('capitaljs');

function getInterest(req, res) {
  var principal = req.query.principal;
  var rate = req.query.rate;
  var years = req.query.years;
  var compounding = req.query.compounding;

  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    res.status(400);
    res.json({error: 'Bad request'});
    return;
  }

  var result = capitaljs.interest({
    principal: principal,
    rate: rate,
    years: years,
    compounding: compounding
  });

  res.json(result);
}

module.exports = getInterest;
