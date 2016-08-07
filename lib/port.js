'use strict';
let Pin = require('./pin');
let Log = require('./log');
let log = new Log();
let I2C = require('./i2c');
let UART = require('./uart');
let SPI = require('./spi');

module.exports = class Port{
  constructor(id){
    if((id !== 'A') && (id !== 'B'))
      throw new Error('Invalid port assignment');

    this.name = id;
    this.I2C = I2C;
    this.UART = UART;
    this.SPI = SPI;
  }

  //digital(){}
  //pwm(){}


}