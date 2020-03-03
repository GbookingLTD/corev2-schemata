"use strict";

const Q = require('q')
  , fs = require('fs')
  , jsYaml = require('js-yaml')
  , assert = require('assert');

/*
let schemaCommonDir = __dirname + '/schemas-json/common';
let schemaModelsDir = __dirname + '/schemas-json/models';
let schemaControllersDir = __dirname + '/schemas-json/controllers';
*/

let schemaCommonDir = __dirname + '/schemas/common';
let schemaModelsDir = __dirname + '/schemas/models';
let schemaControllersDir = __dirname + '/schemas/controllers';

exports.verbose = false;

function appendSchemasDir(ajv, dirName) {
  let defer = Q.defer();
  fs.readdir(dirName, function(err, files) {
    var jobs = [];
    if (err) defer.reject(err);
    files.forEach((fname) => {
      if (fname === '.' || fname === '..') return ;
      jobs.push(function() {
        return Q.nfcall(fs.lstat, dirName + '/' + fname).then((stat) => {
          if (stat. isDirectory())
            return appendSchemasDir(ajv, dirName + '/' + fname);
          else
            return Q.nfcall(fs.readFile.bind(fs), dirName + '/' + fname, 'utf8').then((json) => {
              exports.verbose && console.info('json-schema load file %s', dirName + '/' + fname);
              let jsonSchema;
              if (/.*\.schema\.json$/.test(fname)) {
                jsonSchema = JSON.parse(json);
              } else if (/.*\.yaml/.test(fname)) {
                jsonSchema = jsYaml.load(json, null, jsYaml.JSON_SCHEMA, true);
              }
              ajv.addSchema(jsonSchema);
            });
        });
      });
    });
    
    jobs.reduce(Q.when, Q()).then(() => {
      defer.resolve();
    }).fail((err) => {
      defer.reject(err);
    });
  });
  
  return defer.promise;
}

exports.loadSchemas = function(ajv) {
  return Q.fcall(function() {
    return Q.all([
      appendSchemasDir(ajv, schemaCommonDir),
      appendSchemasDir(ajv, schemaModelsDir)
    ]);
  }).then(function() {
    return Q.nfcall(fs.readdir, schemaControllersDir).then((files) => {
      let jobs = [];
      files.forEach(function(fcontroller) {
        if (!fs.lstatSync(schemaControllersDir + '/' + fcontroller).isDirectory())
          return;
        if (fcontroller === '.' || fcontroller === '..') return ;
        jobs.push(function() {
          return Q.nfcall(fs.readdir, schemaControllersDir + '/' + fcontroller).then((files) => {
            let innerJobs = [];
            files.forEach(function(fmethod) {
              if (fmethod === '.' || fmethod === '..') return ;
              innerJobs.push(function() {
                return exports.loadMethodSchema(ajv, fcontroller, fmethod);
              });
            });
            
            return innerJobs.reduce(Q.when, Q()); 
          });
        });
      });
      
      return jobs.reduce(Q.when, Q());
    });
  });
};

let controllerSchemas = {};

exports.getValidateSchema = function(controller, method, type) {
  assert(type === 'request' || type === 'response');
  let fn = method + '.' + type;
  // console.info('getValidateFn %s %s', controller, fn, controllerSchemas);
  if (controllerSchemas[controller] && controllerSchemas[controller][fn]) {
    return controllerSchemas[controller][fn];
  }
}; 

exports.loadValidateSchema = function(ajv, controller, method, type) {
  assert(type === 'request' || type === 'response');
  let fn = method + '.' + type + '.yaml';
  return Q.fcall(function() {
    return Q.all([
      appendSchemasDir(ajv, schemaCommonDir),
      appendSchemasDir(ajv, schemaModelsDir)
    ]);
  }).then(function() {
    return exports.loadMethodSchema(ajv, controller, fn);
  });
};

exports.loadMethodSchema = function(ajv, controller, method) {
  let fpath = schemaControllersDir + '/' + controller + '/' + method;
  // console.info('json-schema load method ' + controller + '/' + method);
  return Q.nfcall(fs.readFile.bind(fs), fpath, 'utf8').then((json) => {
    let jsonSchema;
    if (/.*\.schema\.json$/.test(method)) {
      method = method.replace(/\.schema\.json$/, '');
      jsonSchema = JSON.parse(json);
    } else if (/.*\.yaml/.test(method)) {
      method = method.replace(/\.yaml$/, '');
      jsonSchema = jsYaml.load(json, null, jsYaml.JSON_SCHEMA, true);
    }
    controllerSchemas[controller] = controllerSchemas[controller] || {};
    let validate = ajv.compile(jsonSchema);
    if (!validate) throw new Error('json-schema for ' + controller + '/' + method + ' can\'t be compiled');
    return controllerSchemas[controller][method] = validate;
  });
};


/*
const Ajv = require('ajv');
exports.loadSchemas(new Ajv).then(function() {
  console.info('json-schemas loaded');
  var validate = exports.getValidateFn('business', 'get_profile_by_id', 'response');
  console.info('validate.schema %j', validate.schema);
  if (!validate({some_wrong_prop: ''})) {
    console.error(validate.errors);
  }
}).fail(function (err) {
  console.log(err);
});

*/