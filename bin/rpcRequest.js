"use strict";

var request = require('request')
  , Q = require('q');

var defaultEndpoint = 'http://apiv2.gbooking.ru/rpc';
var defaultCracEndpoint = 'http://cracslots.gbooking.ru/rpc';
var defaultOriginCracEndpoint = 'http://crac-prod3.gbooking.ru/rpc';

exports.rpcRequestObject = function (method, data, cred) {
  return {
    jsonrpc: '2.0',
    id: 2,
    cred: cred,
    method: method,
    params: JSON.parse(JSON.stringify(data))
  };
};

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
    if (error || body && body.error)
      defer.reject(error || body && body.error);
    else
      defer.resolve(body);
  });
  return defer.promise;
};

exports.cracRpcRequestObject = function (method, data, cred) {
  return {
    jsonrpc: '2.0',
    id: 2,
    cred: cred,
    method: method,
    params: JSON.parse(JSON.stringify(data))
  };
};

exports.cracRpcRequest = function (method, data, cred, endpoint) {
  var defer = Q.defer();
  if (arguments.length === 1) {
    data = method;
    method = undefined;
  }

  var json = exports.cracRpcRequestObject(method, data, cred);

  if (!json.method) {
    throw new Error('rpc request unknown method');
  }

  var req_body = {url: endpoint || defaultCracEndpoint, method: 'POST', json: json};
  request(req_body, function (error, result, body) {
    if (error || body && body.error)
      defer.reject(error || body && body.error);
    else
      defer.resolve(body);
  });
  return defer.promise;
};

exports.originCracRpcRequestObject = function (method, data, cred) {
  return {
    jsonrpc: '2.0',
    id: 2,
    cred: cred,
    method: method,
    params: JSON.parse(JSON.stringify(data))
  };
};

exports.originCracRpcRequest = function (method, data, cred, endpoint) {
  var defer = Q.defer();
  if (arguments.length === 1) {
    data = method;
    method = undefined;
  }

  var json = exports.originCracRpcRequestObject(method, data, cred);

  if (!json.method) {
    throw new Error('rpc request unknown method');
  }

  var req_body = {url: endpoint || defaultOriginCracEndpoint, method: 'POST', json: json};
  request(req_body, function (error, result, body) {
    if (error || body && body.error)
      defer.reject(error || body && body.error);
    else
      defer.resolve(body);
  });
  return defer.promise;
};