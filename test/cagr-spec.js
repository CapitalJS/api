var test = require('tape');
var request = require('supertest');
var app = require('../app');

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
