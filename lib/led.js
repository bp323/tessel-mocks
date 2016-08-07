'use strict';

let colors = require('colors');
let Log = require('./log');
let log = new Log();

module.exports = class LED{
  constructor(index){
    return this.ledFn(index);
  }

  logLed(index, state){
    var leds = [
      { name: 'LED1', bg: 'bgGreen',  fg: 'white'},
      { name: 'LED2', bg: 'bgBlue',   fg: 'white'},
      { name: 'CONN', bg: 'bgYellow', fg: 'white'},
      { name: 'ERRO', bg: 'bgRed',    fg: 'white'}
    ];

    var selected = leds[index];
    var bgColor = (state ? selected.bg : 'bgBlack');
    var fgColor = (!state ? selected.fg : 'white');

    return colors[bgColor][fgColor](selected.name);
  }

  ledFn(index){
    let self = this;

    let led = {
      isOn: false,
      on: function(){
        this.isOn = true;
        log.print("Turned " + self.logLed(index, this.isOn) + ' on');
      },
      off: function(){
        this.isOn = false;
        log.print("Turned " + self.logLed(index, this.isOn) + ' off');
      },
      toggle: function() {
        this.isOn = !this.isOn;
        var humanState = this.isOn ? 'on' : 'off';
        log.print("Toggled " + self.logLed(index, this.isOn) + ' '+humanState);
      }
    };

    return led;
  }
}