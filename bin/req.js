"use strict";

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

let getProfileByID = function (cracEndpoint, baseBusinessId) {
  var params = {
    "business": {"id": ''+baseBusinessId},
    "with_networks": true
  };
  return rpcRequest('business.get_profile_by_id', params, cracEndpoint).then(function(json) {
    _validate(json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validate(err.xtra);
    }
  });
};


getProfileByID(process.env.ENDPOINT, 4000000005144).done();
