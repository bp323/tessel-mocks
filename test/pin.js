var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

var Pin = require('../lib/pin');
var pin;

describe('Pin Class', function() {
  beforeEach(function () {
    pin = new Pin(1);
    this.sinon.stub(console, 'info');
  });

  it('should have an "name" property', function() {
    expect(pin).to.have.property('name');
  });
});