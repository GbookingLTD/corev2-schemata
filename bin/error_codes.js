"use strict";

/*
 Print list of error codes.
*/

const _ = require('lodash-node')
  , ERRORS = require('../../lib/errors').errors;
_.forOwn(ERRORS, function(val) {
  console.info(val);
});
