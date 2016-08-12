'use strict';

let colors = require('colors');
let Log = require('./log');
let log = new Log();

module.exports = class LED{
  constructor(index){
    return this.ledFn(index);
  }

  ledDef(index){
    var leds = [
      { name: 'ERRO', bg: 'bgRed',    fg: 'white'},
      { name: 'CONN', bg: 'bgYellow', fg: 'white'},
      { name: 'LED1', bg: 'bgGreen',  fg: 'white'},
      { name: 'LED2', bg: 'bgBlue',   fg: 'white'}
    ];

    return leds[index];
  }

  ledConsoleColor(index, state){
    var selected = this.ledDef(index);
    var bgColor = (state ? selected.bg : 'bgBlack');
    var fgColor = (!state ? selected.fg : 'white');

    return colors[bgColor][fgColor](selected.name);
  }

  ledFn(index){
    let self = this;

    let led = {
      info: self.ledDef(index),
      isOn: false,
      on: function(){
        this.isOn = true;
        log.print("Turned " + self.ledConsoleColor(index, this.isOn) + ' on');
      },
      off: function(){
        this.isOn = false;
        log.print("Turned " + self.ledConsoleColor(index, this.isOn) + ' off');
      },
      toggle: function(callback) {
        this.isOn = !this.isOn;
        var humanState = this.isOn ? 'on' : 'off';
        if (callback) {
          callback();
        }
        log.print("Toggled " + self.ledConsoleColor(index, this.isOn) + ' '+humanState);
      }
    };

    return led;
  }
}