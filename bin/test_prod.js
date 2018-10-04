"use strict";

const Q = require('q')
  , getProfileByID = require('./test').getProfileByID;

// test get_profile_by_id for dev
require('./test')(function() {
  return [
    getProfileByID(process.env.ENDPOINT, 4000000004023)
  ].map(p => function () {
    return p
  }).reduce(Q.when, Q());
});
