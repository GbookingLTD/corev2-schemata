import * as GBookingCoreV2 from '../../langs/typescript/GBookingCoreV2';
import {HilariousBusiness} from "../../langs/typescript/GBookingCoreV2";

const fetch = require('node-fetch');

let jsonRpcCounter = 1;

let params: GBookingCoreV2.BusinessGetNetworkDataRequestParams = {
    networkID: 343,
    with_business_info: true
};

let req: GBookingCoreV2.RequestClass = {
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
    body: JSON.stringify(req as GBookingCoreV2.BusinessGetNetworkDataRequest)
})
    .then(res => res.text())
    .then(json => {
        // console.info("json %s", json);
        return JSON.parse(json) as GBookingCoreV2.BusinessGetNetworkDataResponse
    })
    .then((res: GBookingCoreV2.BusinessGetNetworkDataResponse) => {
        if (res.error) {
            console.error("error #%s %s", res.error.code, res.error.message);
            return;
        }

        const businesses = res.result.businesses.filter(b => !b.isMapBusiness);
        for (let i = 0; i < businesses.length; ++i) {
            console.log(businesses[i].businessID + " " + businesses[i].info.general_info.name);
        }
    });