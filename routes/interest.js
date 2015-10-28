var capitaljs = require('capitaljs');

function getInterest(req, res) {

  var principal = req.query.principal;
  var rate = req.query.rate;
  var years = req.query.years;
  var compounding = req.query.compounding;

  var result = capitaljs.interest({
    principal: principal,
    rate: rate,
    years: years,
    compounding: compounding
  });

  res.json(result);
}

module.exports = getInterest;
