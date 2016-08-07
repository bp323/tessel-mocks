'use strict';

let colors = require('colors');

let LED   = require('./lib/led');
let Port  = require('./lib/port');

module.exports = class tesselMock{
  constructor(){
    this.name = 'tesselMock';

    this.led = [
      new LED(0),
      new LED(1),
      new LED(2),
      new LED(3)
    ];

    this.port = {
      'A': new Port('A'),
      'B': new Port('B'),
    };

    this.pwmFrequency = 0;
  }

}