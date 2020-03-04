"use strict";
exports.__esModule = true;
var GBookingCoreV2API = require("../../langs/typescript/GBookingCoreV2");
var fetch = require('node-fetch');
var jsonRpcCounter = 1;
var params = {
    business: {
        id: "4000000003543"
    }
};
// Объект запроса здесь описан через общий интерфейс запроса GBookingCoreV2API.RequestClass.
// Вы можете описать его и через GBookingCoreV2API.BusinessGetProfileByIdRequest.
// Выбор общего или специального интерфейса запроса может быть продиктован тем, где он используется.
// В случае общей логики запроса/обработчика ответа уместно использовать общий интерфейс.
// В случае логики, связанной с конкретным запросом уместно использовать интерфейс этого запроса/ответа.
var req = {
    jsonrpc: "2.0",
    id: jsonRpcCounter++,
    method: "business.get_profile_by_id",
    params: params
};
fetch(process.env.ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: GBookingCoreV2API.Convert.businessGetProfileByIdRequestToJson(req)
})
    .then(function (res) { return res.text(); })
    .then(function (json) {
    // console.info("json %s", json);
    return GBookingCoreV2API.Convert.toBusinessGetProfileByIdResponse(json);
})
    .then(function (res) {
    if (res.error) {
        console.error("error #%s %s", res.error.code, res.error.message);
        return;
    }
    var business = res.result.business;
    console.info("business %d %s", business.id, business.general_info.name);
});
