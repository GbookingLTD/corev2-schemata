"use strict";

const Q = require('q');
let Ajv = require('ajv')
  , ajv = new Ajv
  , rpcRequest = require('./rpcRequest').rpcRequest
  , rpcRequestObject = require('./rpcRequest').rpcRequestObject
  , cracRpcRequest = require('./rpcRequest').cracRpcRequest
  , cracRpcRequestObject = require('./rpcRequest').cracRpcRequestObject
  , originCracRpcRequest = require('./rpcRequest').originCracRpcRequest
  , originCracRpcRequestObject = require('./rpcRequest').originCracRpcRequestObject
;
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

let getValidateResponse = getValidate;

let getValidateRequest = function(controller, method) {
  return function(pref, json) {
    if (!loaded) {
      console.info('json-schema jet not loaded');
      return ;
    }

    let validate = corev2Schemata.getValidateSchema(controller, method, 'request');
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

let getProfileByID = function (endpoint, baseBusinessId, cred, extraParams) {
  var params = {
    "business": {"id": ''+baseBusinessId},
    "with_networks": true
  };

  if (extraParams)
    for (let i in extraParams)
      if (extraParams.hasOwnProperty(i)) {
        params[i] = extraParams[i];
      }

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

let reserveAppointment = function (endpoint, businessId, taxonomy, resource, start) {
  var params = {
    "appointment":{
      "start":start
    },
    "source":"TEST_SCHEMA_SOURCE",
    "taxonomy":{
      "id":taxonomy
    },
    "resource":{
      "id":[
        resource
      ]
    },
    "business":{
      "id":businessId
    }
  };

  let pref = 'appointment.reserve_appointment: ' + businessId;

  let _validateReq = getValidateRequest('appointment', 'reserve_appointment');
  let _validateRes = getValidateResponse('appointment', 'reserve_appointment');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.reserve_appointment', params, {}));
    return rpcRequest('appointment.reserve_appointment', params, {}, endpoint);
  }).then(function(json) {
    console.info('<--- ' + pref, json);
    _validateRes('<--- ' + pref, json)
  }).fail(function(err) {
    if (err.code === -32700) {
      console.info('<--! ' + pref, err.data, err.xtra);
      _validateRes('<--! ' + pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let getNetworkData = function (endpoint, networkId) {
  var params = {
    "networkID": networkId
  };

  let _validate = getValidate('business', 'get_network_data');
  let pref = 'business.get_network_data: ' + networkId;
  return rpcRequest('business.get_network_data', params, {}, endpoint).then(function(json) {
    _validate(pref, json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validate(pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let getNetworkDataWithBusinessInfo = function (endpoint, networkId) {
  var params = {
    "networkID": networkId,
    "with_business_info": true
  };

  let _validate = getValidate('business', 'get_network_data');
  let pref = 'business.get_network_data: ' + networkId;
  return rpcRequest('business.get_network_data', params, {}, endpoint).then(function(json) {
    _validate(pref, json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validate(pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let GetCRACResourcesAndRooms = function (endpoint, businessID, filters) {
  var params = {
    "business":{
      "id":businessID,
      "widget_configuration": {
        "cracServer": "CRAC_PROD3",
        "mostFreeEnable": true
      },
      "general_info": {
        "timezone": "Europe/Moscow"
      }
    },
    "filters":filters
  };

  let pref = 'CracSlots.GetCRACResourcesAndRooms: ' + businessID;

  let _validateReq = getValidateRequest('cracSlots', 'GetCRACResourcesAndRooms');
  let _validateRes = getValidateResponse('cracSlots', 'GetCRACResourcesAndRooms');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, cracRpcRequestObject('cracSlots.GetCRACResourcesAndRooms', params, {}));
    return cracRpcRequest('CracSlots.GetCRACResourcesAndRooms', params, {}, endpoint);
  }).then(function(json) {
    _validateRes('<--- ' + pref, json)
  }).fail(function(err) {
    if (err.code === -32700) {
      _validateRes('<--- ' + pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let GetCRACDistributedResourcesAndRooms = function (endpoint, businessID, filters) {
  var params = {
    "business":{
      "id":businessID,
      "widget_configuration": {
        "cracServer": "CRAC_PROD3",
        "mostFreeEnable": true
      },
      "general_info": {
        "timezone": "Europe/Moscow"
      }
    },
    "filters":filters
  };

  let _validateReq = getValidateRequest('cracSlots', 'GetCRACDistributedResourcesAndRooms');
  let _validateRes = getValidateResponse('cracSlots', 'GetCRACDistributedResourcesAndRooms');
  let pref = 'CracSlots.GetCRACDistributedResourcesAndRooms: ' + businessID;
  return Q.fcall(function() {
    _validateReq('---> ' + pref, cracRpcRequestObject('cracSlots.GetCRACDistributedResourcesAndRooms', params, {}));
    return cracRpcRequest('CracSlots.GetCRACDistributedResourcesAndRooms', params, {}, endpoint)
  })
      .then(function(json) {
        _validateRes('<--- ' + pref, json)
      }).fail(function(err) {
        if (err.code === -32700) {
          _validateRes('<--- ' + pref, err.xtra);
        } else {
          console.error(pref + ' - fail %j', err);
        }
      });
};

let GetCRACInsuranceResourcesAndRooms = function (endpoint, businessID, filters) {
  var params = {
    "business":{
      "id":businessID,
      "widget_configuration": {
        "cracServer": "CRAC_PROD3",
        "mostFreeEnable": true
      },
      "general_info": {
        "timezone": "Europe/Moscow"
      }
    },
    "filters":filters
  };

  let _validateReq = getValidateRequest('cracSlots', 'GetCRACInsuranceResourcesAndRooms');
  let _validateRes = getValidateResponse('cracSlots', 'GetCRACInsuranceResourcesAndRooms');
  let pref = 'CracSlots.GetCRACInsuranceResourcesAndRooms: ' + businessID;
  return Q.fcall(function() {
    _validateReq('---> ' + pref, cracRpcRequestObject('cracSlots.GetCRACInsuranceResourcesAndRooms', params, {}));
    return cracRpcRequest('CracSlots.GetCRACInsuranceResourcesAndRooms', params, {}, endpoint)
  })
      .then(function(json) {
        _validateRes('<--- ' + pref, json)
      }).fail(function(err) {
        if (err.code === -32700) {
          _validateRes('<--- ' + pref, err.xtra);
        } else {
          console.error(pref + ' - fail %j', err);
        }
      });
};

let CRACDistributedResourcesFreeByDate = function (endpoint, businessID, taxonomy, resources) {
  var params = [{
    "business":{
      "id":businessID
    },
    taxonomy:{
      "id":taxonomy
    },
    resources
  }];

  let _validateReq = getValidateRequest('cracSlots', 'CRACDistributedResourcesFreeByDate');
  let _validateRes = getValidateResponse('cracSlots', 'CRACDistributedResourcesFreeByDate');
  let pref = 'CracSlots.CRACDistributedResourcesFreeByDate: ' + businessID;
  return Q.fcall(function() {
    _validateReq('---> ' + pref, originCracRpcRequestObject('Crac.CRACDistributedResourcesFreeByDate', params, {}));
    return originCracRpcRequest('Crac.CRACDistributedResourcesFreeByDate', params, {}, endpoint)
  })
      .then(function(json) {
        _validateRes('<--- ' + pref, json)
      }).fail(function(err) {
        if (err.code === -32700) {
          _validateRes('<--- ' + pref, err.xtra);
        } else {
          console.error(pref + ' - fail %j', err);
        }
      });
};

let CRACResourcesFreeByDate = function (endpoint, taxonomy, resources, duration) {
  var params = [{
    duration,
    taxonomy:{
      "id":taxonomy
    },
    resources
  }];

  let _validateReq = getValidateRequest('cracSlots', 'CRACResourcesFreeByDate');
  let _validateRes = getValidateResponse('cracSlots', 'CRACResourcesFreeByDate');
  let pref = 'CracSlots.CRACResourcesFreeByDate: ' + resources.join(',');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, originCracRpcRequestObject('Crac.CRACResourcesFreeByDate', params, {}));
    return originCracRpcRequest('Crac.CRACResourcesFreeByDate', params, {}, endpoint)
  })
      .then(function(json) {
        _validateRes('<--- ' + pref, json)
      }).fail(function(err) {
        if (err.code === -32700) {
          _validateRes('<--- ' + pref, err.xtra);
        } else {
          console.error(pref + ' - fail %j', err);
        }
      });
};

let CRACResourcesFreeByDateV2 = function (endpoint, business, taxonomy, resources, durations) {
  var params = [{
    business:{
      id:business
    },
    durations,
    duration:durations[0],
    taxonomy:{
      "id":taxonomy
    },
    resources
  }];

  let _validateReq = getValidateRequest('cracSlots', 'CRACResourcesFreeByDateV2');
  let _validateRes = getValidateResponse('cracSlots', 'CRACResourcesFreeByDateV2');
  let pref = 'CracSlots.CRACResourcesFreeByDateV2: ' + resources.join(',');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, originCracRpcRequestObject('Crac.CRACResourcesFreeByDateV2', params, {}));
    return originCracRpcRequest('Crac.CRACResourcesFreeByDateV2', params, {}, endpoint)
  })
      .then(function(json) {
        _validateRes('<--- ' + pref, json)
      }).fail(function(err) {
        if (err.code === -32700) {
          _validateRes('<--- ' + pref, err.xtra);
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
module.exports.reserveAppointment = reserveAppointment;
module.exports.getNetworkData = getNetworkData;
module.exports.getNetworkDataWithBusinessInfo = getNetworkDataWithBusinessInfo;
module.exports.CRAC = {
  GetCRACResourcesAndRooms,
  GetCRACDistributedResourcesAndRooms,
  GetCRACInsuranceResourcesAndRooms,
  CRACDistributedResourcesFreeByDate,
  CRACResourcesFreeByDate,
  CRACResourcesFreeByDateV2
};