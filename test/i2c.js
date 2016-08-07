var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('mocha-sinon')();

var I2C = require('../lib/i2c');
var i2c;

function newClass(addr){
  if(!addr) addr = 0x77;
  return new I2C(addr)
}

describe('I2C Class', function() {
  beforeEach(function () {
    i2c = newClass();
  });

  describe('when not given an address', function () {
    it('should throw an error', function () {
      expect( () => {new I2C} ).to.throw(Error);
    });
  });

  it('should have an "address" property', function() {
    expect(i2c).to.have.property('address');
  });

  it('should have an "options" property', function () {
    expect(i2c).to.have.property('options');
  });

  it('should have an "enabled" property', function () {
    expect(i2c).to.have.property('enabled');
  });

  it('should have a "frequency" property', function () {
    expect(i2c).to.have.property('frequency');
  });

  it('should have an "baudrate" property', function () {
    expect(i2c).to.have.property('baudrate');
  });

  describe('#computeBaud', function () {
    it('should calculate baud given frequency', function () {
      expect(i2c.computeBaud(1e5)).to.equal(234);
    });
  });

  describe('#send', function () {
    it('should print to console', function () {
      this.sinon.stub(console, 'info');
      i2c = newClass();
      i2c.send();
      expect(console.info.calledOnce).to.be.true;
    });

    describe('when given a callback', function () {
      describe('when given a mockError', function () {
        it('should return an error', function () {
          this.sinon.stub(console, 'info');
          i2c = newClass();
          i2c.send('data', (mockErr)=>{
            expect(mockErr.toString() ).to.equal('Error: test error');
          }, 'test error');
        });

      });

      describe('when given a mockReturn', function () {
        it('should return a value', function () {
          this.sinon.stub(console, 'info');
          i2c = newClass();
          i2c.send('data', (mockErr, mockReturn)=>{
            expect(mockReturn ).to.equal(42);
          }, null, 42);
        });
      });
    });
  });

  describe('#transfer', function () {
    it('should print to console', function () {
      this.sinon.stub(console, 'info');
      i2c = newClass();
      i2c.transfer();
      expect(console.info.calledOnce).to.be.true;
    });

    describe('when given a callback', function () {
      describe('when given a mockError', function () {
        it('should return an error', function () {
          this.sinon.stub(console, 'info');
          i2c = newClass();
          i2c.send('data', (mockErr)=>{
            expect(mockErr.toString() ).to.equal('Error: test error');
          }, 'test error');
        });

      });

      describe('when given a mockReturn', function () {
        it('should return a value', function () {
          this.sinon.stub(console, 'info');
          i2c = newClass();
          i2c.send('data', (mockErr, mockReturn)=>{
            expect(mockReturn ).to.equal(42);
          }, null, 42);
        });
      });
    });
  });
});