"use strict";

const Q = require('q');
let Ajv = require('ajv')
  , ajv = new Ajv
  , rpcRequest = require('./rpcRequest').rpcRequest;
let corev2Schemata = require('../index');

let loaded = false;

corev2Schemata.loadSchemas(ajv).then(function() {
  console.info('json-schema loaded successful!');
  loaded = true;
}).fail(function (err) {
  console.error('json-schema error while loaded');
  console.error(err);
});

let _validate = function(json) {
  if (!loaded) {
    console.info('json-schema jet not loaded');
    return ;
  }

  let validate = corev2Schemata.getValidateSchema('business', 'get_profile_by_id', 'response');
  let isValid = validate(json);
  if (!isValid) {
    console.error('Error', validate.errors);
  } else {
    console.info('ok');
  }
};

let getProfileByID = function (cracEndpoint, baseBusinessId, cred) {
  var params = {
    "business": {"id": ''+baseBusinessId},
    "with_networks": true
  };
  return rpcRequest('business.get_profile_by_id', params, cred, cracEndpoint).then(function(json) {
    _validate(json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validate(err.xtra);
    }
  });
};


// test get_profile_by_id for dev
[
  getProfileByID(process.env.ENDPOINT, 4000000005144),
  getProfileByID(process.env.ENDPOINT, 4000000005143),
  getProfileByID(process.env.ENDPOINT, 4000000005143, {token: "a5de5c7f612dcf7776c4ce9abb95a68e041620cd", user: "5b16534175fcff1845255858"}),
  getProfileByID(process.env.ENDPOINT, 4000000004939),
  getProfileByID(process.env.ENDPOINT, 4000000003543),
  getProfileByID(process.env.ENDPOINT, 4000000003543, {token: "7f3b4b8b94e61bc26818239e446775268b9ca53d", user: "55d58cc4b09dd3112cbf3163"})
].map(p => function() { return p }).reduce(Q.when, Q());