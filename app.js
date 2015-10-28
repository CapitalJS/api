var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// define our routes
app.use('/amortization', require('./routes/amortization'));
app.use('/cash', require('./routes/cash'));
app.use('/cagr', require('./routes/cagr'));
app.use('/iar', require('./routes/iar'));
app.use('/interest', require('./routes/interest'));
app.use('/roi', require('./routes/roi'));

app.listen(port, function() {
  console.log('app started on port ' + port);
});
