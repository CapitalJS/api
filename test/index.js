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

test('Correct compound annual growth rate returned', function (t) {
  request(app)
    .get('/cagr?startValue=10000&endValue=15000&years=5')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedOutcome = {
        raw: .08447177119769855,
        rounded: .084,
        percent: 8.4
      };

      t.error(err, 'No error');
      t.same(res.body, expectedOutcome, 'Return values as expected');
      t.end();
    });
});

test('Correct cash flow returned', function (t) {
  request(app)
    .get('/cash?income=5000&expenses=2500')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedOutcome = {
        cash: 2500,
        expenses: '2500',
        income: '5000'
      };

      t.error(err, 'No error');
      t.same(res.body, expectedOutcome, 'Return values as expected');
      t.end();
    });
});

test('Correct inflation adusted return returned', function (t) {
  request(app)
    .get('/iar?investmentReturn=0.08&inflationRate=0.03')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedOutcome = {
        'return': 0.5
      };

      t.error(err, 'No error');
      t.same(res.body, expectedOutcome, 'Return values as expected');
      t.end();
    });
});

test('Correct interest returned', function (t) {
  request(app)
    .get('/interest?principal=10000&rate=0.05&years=10&compounding=false')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedOutcome = {
        interest: 6487.212707001283,
        total: '100006487.212707001283'
      };

      t.error(err, 'No error');
      t.same(res.body, expectedOutcome, 'Return values as expected');
      t.end();
    });
});

test('Correct return on investment returned', function (t) {
  request(app)
    .get('/roi?earnings=3212&initialInvestment=2045')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedOutcome = {
        percent: 57.07,
        raw: 0.5706601466992665,
        rounded: 0.5707
      };

      t.error(err, 'No error');
      t.same(res.body, expectedOutcome, 'Return values as expected');
      t.end();
    });
});
