var capitaljs = require('capitaljs');

function getCash(req, res) {

  var income = req.query.income;
  var expenses = req.query.expenses;

  var result = capitaljs.cashFlow({
    income: income,
    expenses: expenses
  });

  res.json(result);
}

module.exports = getCash;
