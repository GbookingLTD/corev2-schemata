"use strict";

var request = require('request')
  , Q = require('q');

var defaultEndpoint = 'http://apiv2.gbooking.ru/rpc';

exports.rpcRequest = function (method, data, cred, endpoint) {
  var defer = Q.defer();
  if (arguments.length === 1) {
    data = method;
    method = undefined;
  }

  var json = {
    jsonrpc: '2.0',
    id: 2,
    cred: cred,
    method: method,
    params: JSON.parse(JSON.stringify(data))
  };

  if (!json.method) {
    throw new Error('rpc request unknown method');
  }

  var req_body = {url: endpoint || defaultEndpoint, method: 'POST', json: json};
  request(req_body, function (error, result, body) {
    if (error || (body && body.error))
      defer.reject(error || (body && body.error));
    else
      defer.resolve(body);
  });
  return defer.promise;
};