#Tessel-Mocks

Allows local runtime for software designed for the Tessel 2.

Tessel 2 makes the `require('tessel')` package available once your code has been run on or pushed to the device. Unfortunately, the `tessel` package is not available locally, so when the script is run on your development machine the execution will halt with a missing package error.

This repo allows users to mock the functionality of the actual `tessel` device on a local machine.

Based loosely on https://github.com/samilamti/tessel-fakes


##Usage

In your main script, near the rest of the `require` statements, replace the `var tessel = require("tessel")` with the following:

```js
try {
    var tessel = require("tessel");
} catch(e) {
    console.error("Tessel not found - running mocks instead");
    var Tessel = require('tessel-mocks');
    tessel = new Tessel();
}
```

From this point on, when running locally the Tessel commands will print statements in the console instead of performing actions on the device.

##Todo Mocks

- [x] LEDs
- [ ] Digital Pins
- [ ] Analog Pins
- [ ] Interrupt Pins
- [ ] Ports
- [ ] UART
- [ ] SPI
- [ ] I2C
- [ ] PWM
- [ ] Button