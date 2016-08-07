var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

var I2C = require('../lib/i2c');
var i2c;

describe('I2C Class', function() {
  beforeEach(function () {
    i2c = new I2C(0x77);
    this.sinon.stub(console, 'info');
  });

  it('should have an "address" property', function() {
    expect(i2c).to.have.property('address');
  });
});