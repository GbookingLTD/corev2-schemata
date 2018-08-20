"use strict";

/*
 Generate Markdown table of errors.
*/

const _ = require('lodash-node')
  , ERRORS = require('../../lib/errors').errors
  , app_error = require('../../lib/errors').errorResponseBuilder;

console.info('|name|value|description|');
console.info('|---|---|---|');
_.forOwn(ERRORS, function(val, key) {
  const resp = app_error(val);
  console.info('|' + key + '|' + val + '|' + resp.error.message + '|');
});
