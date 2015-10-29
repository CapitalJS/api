var test = require('tape');
var request = require('supertest');
var app = require('../app');

test('Correct amortization returned', function (t) {
  request(app)
    .get('/amortization?amount=180000&rate=4.25&totalTerm=360&amortizeTerm=60')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedOutcome = {
        interest: 36583.362108097754,
        interestRound: "36583.36",
        principal: 16546.146128485594,
        principalRound: "16546.15",
        balance: 163453.85387151438,
        balanceRound: "163453.85",
        payment: 885.4918039430557,
        paymentRound: "885.49"
      };

      t.error(err, 'No error');
      t.same(res.body, expectedOutcome, 'Return values as expected');
      t.end();
    });
});
