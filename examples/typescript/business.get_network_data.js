"use strict";
exports.__esModule = true;
var fetch = require('node-fetch');
var jsonRpcCounter = 1;
var params = {
    networkID: 343,
    with_business_info: true
};
var req = {
    jsonrpc: "2.0",
    id: jsonRpcCounter++,
    method: "business.get_network_data",
    params: params
};
fetch(process.env.ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
})
    .then(function (res) { return res.text(); })
    .then(function (json) {
    // console.info("json %s", json);
    return JSON.parse(json);
})
    .then(function (res) {
    if (res.error) {
        console.error("error #%s %s", res.error.code, res.error.message);
        return;
    }
    var businesses = res.result.businesses.filter(function (b) { return !b.isMapBusiness; });
    for (var i = 0; i < businesses.length; ++i) {
        console.log(businesses[i].businessID + " " + businesses[i].info.general_info.name);
    }
});
