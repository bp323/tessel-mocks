'use strict';

let Log = require('./log');
let log = new Log();

module.exports = class UART{
  constructor(settings){
    // merge settings
    this.settings = {
      clockSpeed: 1,
      cpol: 1,
      cpha: 1,
      dataBits: 8,
      baudrate: 115200,
      parity: 'none',
      stopbits: 1
    }
  }

  write(data){
    log.print('UART Write: ' + data);
  }

  on(eventName, callback){
    if(callback) return callback();
  }

  pipe(stream){}
}