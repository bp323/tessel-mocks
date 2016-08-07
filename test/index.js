var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

var Tessel = require('../index');
var tessel;

beforeEach(function () {
  tessel = new Tessel();
});

describe('Main Class', function() {
  it('should have a name', function() {
    expect(tessel).to.have.property('name');
  });

  it('should have 4 LEDs', function () {
    expect(tessel.led.length).to.equal(4);
  });
});
