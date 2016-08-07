'use strict';

let Log = require('./log');
let log = new Log();

module.exports = class SPI{
  constructor(settings){
    // merge settings
    this.settings = {
      clockSpeed: 1,
      cpol: 1,
      cpha: 1,
    }
  }

  transfer(buffer, readLength, callback){
    log.print('I2C Transfer: ' + buffer);
    if(callback) return callback(null);
  }
}