"use strict";

const Q = require('q');
let Ajv = require('ajv')
  , ajv = new Ajv
  , rpcRequest = require('./rpcRequest').rpcRequest;
let corev2Schemata = require('../index');

let loaded = false;
let onLoad = function() {};

corev2Schemata.loadSchemas(ajv).then(function() {
  console.info('json-schema loaded successful!');
  loaded = true;
  onLoad();
}).fail(function (err) {
  console.error('json-schema error while loaded');
  console.error(err);
});

let _validate = function(pref, json) {
  if (!loaded) {
    console.info('json-schema jet not loaded');
    return ;
  }

  let validate = corev2Schemata.getValidateSchema('business', 'get_profile_by_id', 'response');
  let isValid = validate(json);
  if (!isValid) {
    console.error(pref + ' - validation_error ', validate.errors);
  } else {
    console.info(pref  + ' - ok');
  }
};

let getProfileByID = function (endpoint, baseBusinessId, cred) {
  var params = {
    "business": {"id": ''+baseBusinessId},
    "with_networks": true
  };
  
  let pref = baseBusinessId + (cred ? '_admin' : '_guest');
  return rpcRequest('business.get_profile_by_id', params, cred, endpoint).then(function(json) {
    _validate(pref, json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validate(pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

module.exports = function(fn) {
  if (loaded) fn();
  else onLoad = fn;
};
module.exports.getProfileByID = getProfileByID;