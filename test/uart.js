var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

var UART = require('../lib/uart');
var uart;

describe('UART Class', function() {
  beforeEach(function () {
    uart = new UART();
    this.sinon.stub(console, 'info');
  });

  it('should have an "settings" property', function() {
    expect(uart).to.have.property('settings');
  });
});