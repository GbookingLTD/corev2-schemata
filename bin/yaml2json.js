"use strict";

let stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [],
    jsYaml = require('js-yaml');

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    let outputJSON = JSON.stringify(jsYaml.load(inputChunks.join(), null, jsYaml.JSON_SCHEMA, true), null, 4);
    stdout.write(outputJSON);
    stdout.write('\n');
});
