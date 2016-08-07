var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

var LED = require('../lib/led');
var led;

describe('LED Class', function() {
  beforeEach(function () {
    led = new LED(0);
    this.sinon.stub(console, 'info');
  });

  it('should have an "isOn" property', function() {
    expect(led).to.have.property('isOn');
  });

  it('should have an "on" method', function () {
      expect(led).to.have.property('on');
  });

  it('should have an "off" method', function () {
      expect(led).to.have.property('off');
  });

  it('should have a "toggle" method', function () {
      expect(led).to.have.property('toggle');
  });

  describe('#isOn', function () {
    it('should default to false', function () {
      expect(led.isOn).to.be.false;
    });

    it('should change when state is altered', function () {
      led.on();
      expect(led.isOn).to.be.true;
    });
  });

  describe('#on', function () {
    it('should change state from off to on', function () {
      expect(led.isOn).to.be.false;
      led.on();
      expect(led.isOn).to.be.true;
    });

    it('should change state from on to on', function () {
      led.isOn = true;
      expect(led.isOn).to.be.true;
      led.on();
      expect(led.isOn).to.be.true;
    });

    it('should print a log message', function () {
      led.on();
      expect(console.info.calledOnce).to.be.true;
    });
  });

  describe('#off', function () {
    it('should change state from on to off', function () {
      led.isOn = true;
      led.off();
      expect(led.isOn).to.be.false;
    });

    it('should change state from off to off', function () {
      led.isOn = false;
      led.off();
      expect(led.isOn).to.be.false;
    });

    it('should print a log message', function () {
      led.off();
      expect(console.info.calledOnce).to.be.true;
    });
  });

  describe('#toggle', function () {
    it('should flip the value of "isOn" from false to true', function () {
      led.isOn = false;
      led.toggle();
      expect(led.isOn).to.be.true;
    });

    it('should flip the value of "isOn" from true to false', function () {
      led.isOn = true;
      led.toggle();
      expect(led.isOn).to.be.false;
    });

    it('should print a log message', function () {
      led.toggle();
      expect(console.info.calledOnce).to.be.true;
    });
  });
});
