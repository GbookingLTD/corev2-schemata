import * as GBookingCoreV2API from '../../langs/typescript/GBookingCoreV2';

const fetch = require('node-fetch');

let jsonRpcCounter = 1;

let params: GBookingCoreV2API.BusinessGetProfileByIdRequestParams = {
    business: {
        id: "4000000003543"
    }
};

// Объект запроса здесь описан через общий интерфейс запроса GBookingCoreV2API.RequestClass.
// Вы можете описать его и через GBookingCoreV2API.BusinessGetProfileByIdRequest.
// Выбор общего или специального интерфейса запроса может быть продиктован тем, где он используется.
// В случае общей логики запроса/обработчика ответа уместно использовать общий интерфейс.
// В случае логики, связанной с конкретным запросом уместно использовать интерфейс этого запроса/ответа.

let req: GBookingCoreV2API.RequestClass = {
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
    body: GBookingCoreV2API.Convert.businessGetProfileByIdRequestToJson(req as GBookingCoreV2API.BusinessGetProfileByIdRequest)
})
    .then(res => res.text())
    .then(json => {
        // console.info("json %s", json);
        return GBookingCoreV2API.Convert.toBusinessGetProfileByIdResponse(json)
    })
    .then((res: GBookingCoreV2API.BusinessGetProfileByIdResponse) => {
        if (res.error) {
            console.error("error #%s %s", res.error.code, res.error.message);
            return;
        }

        const business = res.result.business as GBookingCoreV2API.BusinessClass;
        console.info("business %d %s", business.id, business.general_info.name);
    });