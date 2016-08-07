'use strict';

let colors = require('colors');

module.exports = class log{
  constructor(verbose){
    this.verbose = (typeof verbose == 'undefined') ? true : false;
  }

  print(msg){
    if(this.verbose){
      console.info(colors.cyan("TM | " + msg));
    }
  }
}