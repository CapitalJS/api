var express = require('express');
var router = express.Router();
var capitaljs = require('capitaljs');

router.get('/', function(req, res) {

  var income = req.query.income;
  var expenses = req.query.expenses;

  var result = capitaljs.cashFlow({
    income: income,
    expenses: expenses
  });

  res.json(result);
});

module.exports = router;
