'use strict';
module.exports = function (angle, str) {
  var assert = require('assert');

  assert.equal(typeof angle, 'number');
  assert.equal(typeof str, 'string');

  var radians = require('degrees-radians');
  var degrees = require('radians-degrees');

  if (str === 'd' || str === 'degrees') {
    return radians(angle);
  } else if (str === 'r' || str === 'radians') {
    return degrees(angle);
  }
};
