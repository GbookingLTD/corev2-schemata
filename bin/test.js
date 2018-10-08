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

let getValidate = function(controller, method) {
  return function(pref, json) {
    if (!loaded) {
      console.info('json-schema jet not loaded');
      return ;
    }
  
    let validate = corev2Schemata.getValidateSchema(controller, method, 'response');
    let isValid = validate(json);
    if (!isValid) {
      console.error(pref + ' - validation_error ', validate.errors);
    } else {
      console.info(pref  + ' - ok');
    }
  };
};

let addClient = function (endpoint, data) {
  var params = {
    "business": {"id": ''+data.business.id},
    "client":{
         "name":"test_client",
         "surname":"test_client",
         "phone":[
            {
               "country_code": data.phone[0],
               "area_code": data.phone[1],
               "number": data.phone[2]
            }
         ],
         "email": [data.email]
      }
  };
  
  let _validate = getValidate('client', 'add_client');
  let pref = 'client.add_client: ' + data.business.id;
  return rpcRequest('client.add_client', params, {}, endpoint).then(function(json) {
    _validate(pref, json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validate(pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let getProfileByID = function (endpoint, baseBusinessId, cred) {
  var params = {
    "business": {"id": ''+baseBusinessId},
    "with_networks": true
  };
  
  let _validate = getValidate('business', 'get_profile_by_id');
  let pref = 'business.get_profile_by_id: ' + baseBusinessId + (cred ? '_admin' : '_guest');
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
module.exports.addClient = addClient;