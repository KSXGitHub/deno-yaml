'use strict';
/*global it */


var assert = require('assert');
var yaml = require('../../');
var readFileSync = require('fs').readFileSync;


it('Wrong error message when yaml file contains tabs', function () {
  assert.doesNotThrow(
    function () { yaml.safeLoad(readFileSync(__dirname + '/data/issue-64.yml', 'utf8')); },
    yaml.YAMLException);
});
