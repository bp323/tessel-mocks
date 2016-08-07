var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon')();

let Log = require('../lib/log');
let log;

describe('LOG Class', function() {
  beforeEach(function () {
    log = new Log();
  });

  it('should have a "verbose" property', function () {
    expect(log).to.have.property('verbose');
  });

  it('should be verbose by default', function () {
    expect(log.verbose).to.be.true;
  });

  it('should set verbose to false when passed false', function () {
    log = new Log(false);
    expect(log.verbose).to.be.false;
  });

  describe('#print', function () {
    describe('when verbose is true', function () {
      it('should print the passed message', function () {
        this.sinon.stub(console, 'info');
        log.verbose = true;
        log.print("test");
        expect(console.info.called).to.be.true;
      });
    });

    describe('when verbose is false', function () {
      it('should not print a message', function () {
        this.sinon.stub(console, 'info');
        log.verbose = false;
        log.print("test");
        expect(console.info.called).to.be.false;
      });
    });
  });

});