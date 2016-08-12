'use strict';
let Log = require('./log');
let log = new Log();
let I2C = require('./i2c');
let UART = require('./uart');
let SPI = require('./spi');

module.exports = class Pin{
  constructor(id){
    this.name = id;

    this.pin = id;
    this.I2C = I2C;
    this.UART = UART;
    this.SPI = SPI;
  }

  output(){}

  read(){}

  analogWrite(){}

  analogRead(){}

  on(eventName, callback){}  // Event callback

  once(eventName, callback){}

  pwmDutyCycle(dutyCycle){}
}