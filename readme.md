# convert-angle

> Convert effortlessly between degrees and radians

[![Build Status](https://travis-ci.org/icyflame/convert-angle.svg?branch=master)](https://travis-ci.org/icyflame/convert-angle)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save convert-angle
```


## Usage

```js
var convertAngle = require('convert-angle');

convertAngle(Math.PI, 'radians');
//=> 180

convertAngle(90, 'degrees');
//=> 1.5707963267948966

convertAngle(Math.PI / 2, 'r');
//=> 90

convertAngle(45, 'd');
//=> 0.7853981633974483
```


## API

### convertAngle(angle, unit)

#### angle

*Required*  
Type: `number`

The value of the angle

#### unit

*Required*  
Type: `string`

The unit that this angle is in.  
Must be one of `degrees, d, radians, r`


## Depends on:

[degrees-radians](https://npmjs.com/package/degrees-radians)  
[radians-degrees](https://npmjs.com/package/radians-degrees)


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
