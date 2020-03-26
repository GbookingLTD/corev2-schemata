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

  let pref = 'client.add_client: ' + data.business.id;

  let _validateReq = getValidateRequest('client', 'add_client');
  let _validateRes = getValidateResponse('client', 'add_client');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('client.add_client', params, {}));
    return rpcRequest('client.add_client', params, {}, endpoint);
  }).then(function(json) {
    // console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json)
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data), JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let findOrCreateClient = function (endpoint, data, cred) {
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

  let pref = 'client.find_or_create_client: ' + data.business.id;

  let _validateReq = getValidateRequest('client', 'find_or_create_client');
  let _validateRes = getValidateResponse('client', 'find_or_create_client');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('client.find_or_create_client', params, {}));
    return rpcRequest('client.find_or_create_client', params, cred, endpoint);
  }).then(function(json) {
    // console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json)
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data), JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let getAppointmentByStartEnd = function (endpoint, data, cred) {
  var params = {
    "business": {
      "id": ''+data.business.id
    },
    "network": {
      "id": data.network ? ''+data.network.id : undefined
    },
    "extraFilters": {
      "sort": [{
        "dir":"desc",
        "field":"created"
      }]
    },
    "pageSize": 100500,
    "page": 1,
    "skipBusinessCancelled": false,
    "filter":{
      "start": data.filter.start,
      "end": data.filter.end,
      "skipUpdated": false,
      "services": [],
      "workers": []
    }
  };

  let pref = 'appointment.get_appointment_by_start_end: ' + data.business.id;

  let _validateReq = getValidateRequest('appointment', 'get_appointment_by_filter');
  let _validateRes = getValidateResponse('appointment', 'get_appointment_by_filter');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.get_appointment_by_filter', params, {}));
    return rpcRequest('appointment.get_appointment_by_filter', params, cred, endpoint);
  }).then(function(json) {
    //console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json)
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data)); //, JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let getAppointmentByCreated = function (endpoint, data, cred) {
  var params = {
    "business": {
      "id": ''+data.business.id
    },
    "network": {
      "id": data.network ? ''+data.network.id : undefined
    },
    "extraFilters": {
      "sort": [{
        "dir":"desc",
        "field":"created"
      }]
    },
    "pageSize": 100500,
    "page": 1,
    "skipBusinessCancelled": false,
    "filter":{
      "created": {
        "start": data.filter.created.start,
        "end": data.filter.created.end
      },
      "skipUpdated": false,
      "services": [],
      "workers": []
    }
  };

  let pref = 'appointment.get_appointment_by_created: ' + data.business.id;

  let _validateReq = getValidateRequest('appointment', 'get_appointment_by_filter');
  let _validateRes = getValidateResponse('appointment', 'get_appointment_by_filter');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.get_appointment_by_filter', params, {}));
    return rpcRequest('appointment.get_appointment_by_filter', params, cred, endpoint);
  }).then(function(json) {
    //console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json)
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data)); //, JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
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
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      _validate(pref, err.xtra);
    } else {
      console.error(pref + ' - fail %j', err);
    }
  });
};

let reserveAppointment = function (endpoint, businessId, taxonomy, resource, start) {
  var params = {
    "appointment":{
      "start":start,
      "price":{"currency":"RUB"}
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

  let pref = 'appointment.reserve_appointment: ' + businessId + ' - ' + start;

  let _validateReq = getValidateRequest('appointment', 'reserve_appointment');
  let _validateRes = getValidateResponse('appointment', 'reserve_appointment');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.reserve_appointment', params, {}));
    return rpcRequest('appointment.reserve_appointment', params, {}, endpoint);
  }).then(function(json) {
    //console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json)
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data), JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
    } else {
      console.error('<--- ' + pref + ' - fail %j', err);
    }
  });
};

let clientConfirmAppointment = function(endpoint, appointmentId, clientId, phone, extraFields) {
  var params = {
    "client":{
      "id":clientId,
      "phone":[{"country_code":phone[0],"area_code":phone[1],"number":phone[2]}],
      "name":"test_user",
      "extraFields":extraFields || []
    },
    "appointment":{"id":appointmentId,"source":"TEST"},
    "skipClientRecordsCheck":true,
    "utm":{},
    "language":"ru-ru"
  };

  let pref = 'appointment.client_confirm_appointment: ' + appointmentId;

  let _validateReq = getValidateRequest('appointment', 'client_confirm_appointment');
  let _validateRes = getValidateResponse('appointment', 'client_confirm_appointment');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.client_confirm_appointment', params, {}));
    return rpcRequest('appointment.client_confirm_appointment', params, {}, endpoint);
  }).then(function(json) {
    //console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json);
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data), JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
    } else {
      console.error('<--- ' + pref + ' - fail %j', err);
    }
  });
};

let cancelAppointmentByClient = function(endpoint, appointmentId, shortId) {
  var params = {
    "business":{},
    "appointment":{"id":appointmentId,"shortId":shortId},
  };

  let pref = 'appointment.cancel_appointment_by_client: ' + appointmentId;

  let _validateReq = getValidateRequest('appointment', 'cancel_appointment_by_client');
  let _validateRes = getValidateResponse('appointment', 'cancel_appointment_by_client');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.cancel_appointment_by_client', params, {}));
    return rpcRequest('appointment.cancel_appointment_by_client', params, {}, endpoint);
  }).then(function(json) {
    //console.info('<--- ' + pref + ' %j', json);
    _validateRes('<--- ' + pref, json);
    return json;
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      console.info('<--! ' + pref, JSON.stringify(err.data), JSON.stringify(err.xtra));
      _validateRes('<--! ' + pref, err.xtra);
      return err.xtra;
    } else {
      console.error('<--- ' + pref + ' - fail %j', err);
    }
  });
};

let clientRemoveEmptyAppointment = function (endpoint, businessId, appointmentId) {
  var params = {
    "appointment":{
      "id": appointmentId
    },
    "business":{
      "id":businessId
    }
  };

  let pref = 'appointment.client_remove_empty_appointment: ' + businessId;

  let _validateReq = getValidateRequest('appointment', 'client_remove_empty_appointment');
  let _validateRes = getValidateResponse('appointment', 'client_remove_empty_appointment');
  return Q.fcall(function() {
    _validateReq('---> ' + pref, rpcRequestObject('appointment.client_remove_empty_appointment', params, {}));
    return rpcRequest('appointment.client_remove_empty_appointment', params, {}, endpoint);
  }).then(function(json) {
    //console.info('<--- ' + pref, json);
    _validateRes('<--- ' + pref, json)
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
      //console.info('<--! ' + pref, JSON.stringify(err.data), JSON.stringify(err.xtra));
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
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
  let pref = 'business.get_network_data_with_business_info: ' + networkId;
  return rpcRequest('business.get_network_data', params, {}, endpoint).then(function(json) {
    _validate(pref, json)
  }).fail(function(err) {
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
    if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
        if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
        if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
        if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
        if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
        if (err.code === -32700 && (err.xtra && !err.xtra.method)) {
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
module.exports.findOrCreateClient = findOrCreateClient;
module.exports.clientConfirmAppointment = clientConfirmAppointment;
module.exports.cancelAppointmentByClient = cancelAppointmentByClient;
module.exports.getAppointmentByStartEnd = getAppointmentByStartEnd;
module.exports.getAppointmentByCreated = getAppointmentByCreated;
module.exports.reserveAppointment = reserveAppointment;
module.exports.clientRemoveEmptyAppointment = clientRemoveEmptyAppointment;
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