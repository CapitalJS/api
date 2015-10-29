var capitaljs = require('capitaljs');

function getCash(req, res) {
  var income = req.query.income;
  var expenses = req.query.expenses;

  if (isNaN(income) || isNaN(expenses)) {
    res.status(400);
    res.json({error: 'Bad request'});
    return;
  }

  var result = capitaljs.cashFlow({
    income: income,
    expenses: expenses
  });

  res.json(result);
}

module.exports = getCash;
