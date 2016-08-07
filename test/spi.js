var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

var SPI = require('../lib/spi');
var spi;

describe('SPI Class', function() {
  beforeEach(function () {
    spi = new SPI();
    this.sinon.stub(console, 'info');
  });

  it('should have an "settings" property', function() {
    expect(spi).to.have.property('settings');
  });
});