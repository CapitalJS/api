var app = ('./app');
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('app started on port ' + port);
});
