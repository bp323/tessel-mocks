var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

var Port = require('../lib/port');
var port;

describe('Port Class', function() {
  beforeEach(function () {
    port = new Port('A');
    this.sinon.stub(console, 'info');
  });

  it('should have an "name" property', function() {
    expect(port).to.have.property('name');
  });

  it('should have an "I2C" class', function() {
    expect(port).to.have.property('I2C');
  });

  it('should have a "SPI" class', function() {
    expect(port).to.have.property('SPI');
  });

  it('should have a "UART" class', function() {
    expect(port).to.have.property('UART');
  });
});