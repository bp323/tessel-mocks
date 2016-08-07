'use strict';

let Log = require('./log');
let log = new Log();

module.exports = class I2C{
  constructor(address){
    if(!address)
      throw new Error('Invalid port address');

    this.address = address;
  }

  transfer(buffer, readLength, callback){
    log.print('I2C Transfer: ' + buffer);
    if(callback) return callback(null);
  }

  send(buffer, callback){
    log.print('I2C Send: ' + buffer);
    if(callback) return callback(null);
  }
}