var express = require('express');
var router = express.Router();
var capitaljs = require('capitaljs');

router.get('/', function(req, res) {

  var earnings = req.query.earnings;
  var initialInvestment = req.query.initialInvestment;

  var result = capitaljs.returnOnInvestment({
    earnings: earnings,
    initialInvestment: initialInvestment
  });

  res.json(result);
});

module.exports = router;
