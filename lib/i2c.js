'use strict';

let Log = require('./log');
let log = new Log();

module.exports = class I2C{
  constructor(address){
    if(!address)
      throw new Error('Tessel.I2C expected an address');

    this.address = address;
    this.options = {
      //addr: address,
      //freq: frequency,
      //port: port
    };
    this.enabled = false;
    this.frequency = 1e5;
    this.baudrate = this.computeBaud(this.frequency);
  }

  computeBaud(freq){
    var baud = Math.floor(((48e6 / freq) - 48e6 * (1.5e-8)) / 2 - 5);
    return Math.max(0, Math.min(baud, 255));
  }

  send(data, callback, mockErr, mockReturn){
    log.print('I2C Send: ' + data);
    mockErr = mockErr ? new Error(mockErr) : null;
    if(callback) return callback(mockErr, mockReturn);
  }

  read(length, callback, mockErr, mockReturn) {
    log.print('I2C Read length: ' + length);
    mockErr = mockErr ? new Error(mockErr) : null;
    if(callback) return callback(mockErr, mockReturn);
  }

  transfer(txbuf, rxlen, callback, mockErr, mockReturn){
    log.print(`I2C Transfer: ${txbuf} \trxLength: ${rxlen}`);
    mockErr = mockErr ? new Error(mockErr) : null;
    if(callback) return callback(mockErr, mockReturn);
  }

}