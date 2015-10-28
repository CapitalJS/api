var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var getAmortization = require('../routes/amortization');

describe('Routes', function() {
  describe('GET amortization', function() {

      it('should respond', function() {
        var req;
        var res;
        var spy;

        req = {};

        req.query = {
          amount: '180000',
          rate: '4.25',
          totalTerm: '360',
          amortizeTerm: '60'
        };
        res = {};
        spy = res.json = sinon.spy();

        getAmortization(req, res);
        expect(spy.calledOnce).to.equal(true);
      });

  });
});
