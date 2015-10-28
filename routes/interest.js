var express = require('express');
var router = express.Router();
var capitaljs = require('capitaljs');

router.get('/', function(req, res) {

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
});

module.exports = router;
