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

From this point on when running locally, the Tessel commands will print statements in the console instead of performing actions on the device.

* To run code on the Tessel: `t2 run index.js`
* To run code locally: `node index.js`

###Example Comparison

When running on the Tessel, this code will flash LED3 (blue) every 2 seconds:

```js
setInterval(function(){
  tessel.led[3].toggle();
}, 2000);
```

... but when running locally with `node index.js`, the console prints this:

```sh
Tessel not found - running mocks instead
TM | Toggled LED2 on
TM | Toggled LED2 off
TM | Toggled LED2 on
```

###Mocking Responses

Serial communication devices can be mocked by passing additional parameters in any method that supports a callback. These extra parameters do not affect Tessel runtime and will be ignored on the device, but while running locally they will return the values specified.

To do this, pass 2 extra parameters (as if they were the callback values) to the target functions. Take the I2C Transfer method:

```js
i2c.transfer(txbuf, rxlen, callback);
```

... and this becomes:

```js
i2c.transfer(txbuf, rxlen, callback, mockError, mockReturn);
```

**Example: [BME280](https://github.com/emcniece/tessel-bme280) I2C**

This code prints no error and returns the ID of the BME280 device (which is `60`):

```js
var slaveAddress = 0x77;
var readLength = 1;
var i2c = new tessel.port.A.I2C(slaveAddress)

i2c.transfer(new Buffer([0xD0]), readLength, function (err, rx) {
  console.log('error returned by I2C Slave: ', err)
  console.log('buffer returned by I2C slave ('+slaveAddress.toString(16)+'):', rx);
});
```

Output:

```sh
INFO Running index.js...
error returned by I2C Slave:  null
buffer returned by I2C slave (77): <Buffer 60>
```

If this script is run locally with `node index.js`, the callback will not contain data:

```sh
INFO Running index.js...
Tessel not found - running mocks instead
TM | I2C Transfer: �
error returned by I2C Slave:  [Error]
buffer returned by I2C slave (77): undefined
```

Instead, if mock responses are passed in:

```js
var slaveAddress = 0x77;
var readLength = 1;
var i2c = new tessel.port.A.I2C(slaveAddress)

i2c.transfer(new Buffer([0xD0]), readLength, function (err, rx) {
  console.log('error returned by I2C Slave: ', err)
  console.log('buffer returned by I2C slave ('+slaveAddress.toString(16)+'):', rx);
}, 'Test Error', '99');
```

... then the mock data will be populated in console:

```sh
Tessel not found - running mocks instead
TM | I2C Transfer: �
error returned by I2C Slave:  [Error: Test Error]
buffer returned by I2C slave (77): 99
```

##Todo Mocks

- [x] LEDs
- [ ] Digital Pins
- [ ] Analog Pins
- [ ] Interrupt Pins
- [ ] Ports
- [ ] UART
- [ ] SPI
- [x] I2C
- [ ] PWM
- [ ] Button