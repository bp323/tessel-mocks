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
    this.pin = {
      '0': new Pin('0'),
      '1': new Pin('1'),
      '2': new Pin('2'),
      '3': new Pin('3'),
      '4': new Pin('4'),
      '5': new Pin('5'),
      '6': new Pin('6'),
      '7': new Pin('7')
    };
    this.I2C = I2C;
    this.UART = UART;
    this.SPI = SPI;
  }

  //digital(){}
  //pwm(){}


}