var express = require('express');
var router = express.Router();
var capitaljs = require('capitaljs');

router.get('/', function(req, res) {

  var startValue = req.query.startValue;
  var endValue = req.query.endValue;
  var years = req.query.years;

  var result = capitaljs.compoundAnnualGrowthRate({
    startValue: startValue,
    endValue: endValue,
    years: years
  });

  res.json(result);
});

module.exports = router;
