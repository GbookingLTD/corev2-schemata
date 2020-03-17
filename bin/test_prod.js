"use strict";

const Q = require('q')
    , getProfileByID = require('./test').getProfileByID
    , getNetworkData = require('./test').getNetworkData
    , getNetworkDataWithBusinessInfo = require('./test').getNetworkDataWithBusinessInfo
    , getAppointmentByStartEnd = require('./test').getAppointmentByStartEnd
    , getAppointmentByCreated = require('./test').getAppointmentByCreated
    , CRAC = require('./test').CRAC
;

const TimeMs = {};

TimeMs.Minute = 60 * 1000;
TimeMs.Hour   = 60 * TimeMs.Minute;
TimeMs.Day    = 24 * TimeMs.Hour;
TimeMs.Week   = 7  * TimeMs.Day;

const now = new Date();
const oneWeekLater = new Date(now.getTime() + TimeMs.Week);
const oneWeekBefore = new Date(now.getTime() - TimeMs.Week);
const twoWeeksBefore = new Date(now.getTime() - 2 * TimeMs.Week);

// test get_profile_by_id for dev
require('./test')(function() {
  let requests = [];
  if (process.argv.length === 2 || process.argv[2] === 'appointment')
    [
      getAppointmentByStartEnd(process.env.ENDPOINT, {
        business: {
          id:4000000004102
        },
        filter: {
          start: twoWeeksBefore.toISOString(),
          end: oneWeekLater.toISOString()
        }
      }, {
        token: "34ea0c4f0ff1900f7d4d6aaf3fc7a81481c9b1ce",
        user: "58518501b197d3186a0eaf86"
      }),
      getAppointmentByCreated(process.env.ENDPOINT, {
        business: {
          id:4000000004102
        },
        filter: {
          created: {
            start: twoWeeksBefore.toISOString(),
            end: oneWeekLater.toISOString()
          }
        }
      }, {
        token: "34ea0c4f0ff1900f7d4d6aaf3fc7a81481c9b1ce",
        user: "58518501b197d3186a0eaf86"
      }),
    ].forEach((p) => {requests.push(p)});

  if (process.argv.length === 2 || process.argv[2] === 'business')
  [
    getProfileByID(process.env.ENDPOINT, 4000000004023),
    getNetworkData(process.env.ENDPOINT, 315),
    getNetworkDataWithBusinessInfo(process.env.ENDPOINT, 315),
    getNetworkData(process.env.ENDPOINT, 220),
    getNetworkDataWithBusinessInfo(process.env.ENDPOINT, 220),
    CRAC.GetCRACResourcesAndRooms(null, "4000000006289", {
      "resources":[
        {"id": "5afafbc373b6066443311f24", "duration": 30},
        {"id": "5afafbc373b6066443311f26", "duration": 30}
      ],
      "taxonomies":[
        "9175163"
      ],
      "rooms":[

      ],
      "date":{
        "from":"2020-03-10T00:00:00.000Z",
        "to":"2020-03-21T00:00:00.000Z"
      }
    }),
    CRAC.GetCRACDistributedResourcesAndRooms(null, "4000000006304", {
      "resources":[
        {
          "resource":"5afafb9fc28333643ea29636",
          "business":{
            "id":"4000000006291"
          }
        },
        {
          "resource":"5afafb9fc28333643ea2963a",
          "business":{
            "id":"4000000006291"
          }
        },
        {
          "resource":"5afafb9fc28333643ea2963c",
          "business":{
            "id":"4000000006291"
          }
        }
      ],
      "taxonomies":[
        "9175610"
      ],
      "rooms":[

      ],
      "date":{
        "from":"2020-03-10T00:00:00.000Z",
        "to":"2020-03-21T00:00:00.000Z"
      }
    }),
    CRAC.GetCRACInsuranceResourcesAndRooms(null, "4000000006582", {
      "insuranceID": "993276277",
      "resources":[
        {"id": "5cec0b2bb54995180ed8f789", "duration": 20}
      ],
      "rooms":[

      ],
      "date":{
        "from":"2020-03-10T00:00:00.000Z",
        "to":"2020-03-21T00:00:00.000Z"
      }
    }),
    CRAC.CRACDistributedResourcesFreeByDate(null, "4000000006304", "9175167", [
      "5afafbc373b6066443311f24",
      "5afafbdaff64a76438ecde86",
      "5afafb9fc28333643ea29636",
      "5afafb9fc28333643ea2963c",
      "5afafb9fc28333643ea29638",
      "5afafbc373b6066443311f26"
    ]),
    CRAC.CRACResourcesFreeByDate(null, "9175163", [
      "5afafbc373b6066443311f24",
      "5afafbc373b6066443311f26"
    ], 60),
    CRAC.CRACResourcesFreeByDateV2(null, "4000000006304", "9175163", [
      "5afafbc373b6066443311f24",
      "5afafbc373b6066443311f26"
    ], [60, 30]),
  ].forEach((p) => {requests.push(p)});
  return requests.map(p => function () {
    return p
  }).reduce(Q.when, Q());
});
