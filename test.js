/* global it */
'use strict';
var assert = require('assert');
var convertAngle = require('./');

it('should ', function () {
  assert.strictEqual(convertAngle(90, 'degrees'), Math.PI / 2);
  assert.strictEqual(convertAngle(Math.PI, 'radians'), 180);
  assert.strictEqual(convertAngle(180, 'd'), Math.PI);
  assert.strictEqual(convertAngle(Math.PI / 2, 'r'), 90);
  assert.strictEqual(convertAngle(Math.PI, 'radian'), undefined);
  assert.strictEqual(convertAngle(90, 'degree'), undefined);
});
