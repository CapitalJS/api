var capitaljs = require('capitaljs');

function getRoi(req, res) {

  var earnings = req.query.earnings;
  var initialInvestment = req.query.initialInvestment;

  var result = capitaljs.returnOnInvestment({
    earnings: earnings,
    initialInvestment: initialInvestment
  });

  res.json(result);
}

module.exports = getRoi;
