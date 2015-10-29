var capitaljs = require('capitaljs');

function getRoi(req, res) {
  var earnings = req.query.earnings;
  var initialInvestment = req.query.initialInvestment;

  if (isNaN(earnings) || isNaN(initialInvestment)) {
    res.status(400);
    res.json({error: 'Bad request'});
    return;
  }

  var result = capitaljs.returnOnInvestment({
    earnings: earnings,
    initialInvestment: initialInvestment
  });

  res.json(result);
}

module.exports = getRoi;
