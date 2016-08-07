'use strict';
let Log = require('./log');
let log = new Log();

module.exports = class Pin{
  constructor(id){
    this.name = id;

  }

  output(){}

  read(){}

  analogWrite(){}

  analogRead(){}

  on(eventName, callback){}  // Event callback

  once(eventName, callback){}

  pwmDutyCycle(dutyCycle){}
}