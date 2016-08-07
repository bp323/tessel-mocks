'use strict';

let colors = require('colors');
let LED = require('./lib/led');

module.exports = class tesselMock{
  constructor(){
    this.name = 'tesselMock';

    this.led = [
      new LED(0),
      new LED(1),
      new LED(2),
      new LED(3)
    ];

    this.port = [
      this.portFn('A'),
      this.portFn('B')
    ];
  }

  portFn(name){
    let port = {
      I2C: function(address){

      }
    }

    return port;
  }

}