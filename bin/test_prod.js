"use strict";

const Q = require('q')
    , getProfileByID = require('./test').getProfileByID
    , getNetworkData = require('./test').getNetworkData;

// test get_profile_by_id for dev
require('./test')(function() {
  return [
    getProfileByID(process.env.ENDPOINT, 4000000004023),
    getNetworkData(process.env.ENDPOINT, 315),
    getNetworkData(process.env.ENDPOINT, 220)
  ].map(p => function () {
    return p
  }).reduce(Q.when, Q());
});
