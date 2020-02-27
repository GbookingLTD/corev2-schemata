"use strict";

const Ajv = require('ajv')
    , ajv = new Ajv
    , corev2Schemata = require('./index');

let loaded = false;

corev2Schemata.loadSchemas(ajv).then(function() {
    console.info('json-schema loaded successful!');
    loaded = true;
}).fail(function (err) {
    console.error('json-schema error while loaded');
    console.error(err);
    process.exit(1);
});