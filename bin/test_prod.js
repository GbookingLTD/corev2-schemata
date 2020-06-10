"use strict";

const Q = require('q')
    , time = require('./time')
    , getProfileByID = require('./test').getProfileByID
    , getNetworkData = require('./test').getNetworkData
    , getNetworkDataWithBusinessInfo = require('./test').getNetworkDataWithBusinessInfo
    , findOrCreateEmptyClient = require('./test').findOrCreateEmptyClient
    , getAppointmentByStartEnd = require('./test').getAppointmentByStartEnd
    , getAppointmentByCreated = require('./test').getAppointmentByCreated
    , reserveAppointment = require('./test').reserveAppointment
    , addClient = require('./test').addClient
    , clientConfirmAppointment = require('./test').clientConfirmAppointment
    , cancelAppointmentByClient = require('./test').cancelAppointmentByClient
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

const dateTimeRangeIterator = new time.DateTimeRangeIterator(time.oneWeekLater, new time.DayMinutesIterator(
    13 * time.TimeMinutes.Hour,
    21 * time.TimeMinutes.Hour,
    1 * time.TimeMinutes.Hour
));

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

  if (process.argv.length === 2 || process.argv[2] === 'client')
    [
      findOrCreateEmptyClient(process.env.ENDPOINT, {
        business: { id:4000000006411 }
      }, {
        token: "1cb6fa911cb46fd7dc748d2e8d5a056ebf8cb051",
        user: "58b82e122ce1ea62096cc76c"
      }),
    ].forEach((p) => {requests.push(p)});

  if (process.argv.length === 2 || process.argv[2] === 'booking')
    [
      reserveAppointment(process.env.ENDPOINT, "4000000006291", "9175163", "5afafb9fc28333643ea29630",
          dateTimeRangeIterator.currentLocalString(true))
          .then((res) => {
            let appointmentId = undefined;
            console.info("setup appointmentId", res.result ? res.result.appointment.id : "unknown");
            if (res.result)
              appointmentId = res.result.appointment.id;

            if (!appointmentId)
              throw {message: "error reservation", step: "reserve"};

            return addClient(process.env.ENDPOINT, {
              business: {id: 4000000006291},
              email: 'test@gbooking.ru',
              phone: ['7', '123', '1231231']
            })
                .then((res) => {
                  console.info("add_client client_id=%s", res.result? res.result.client.id: "unknown");
                  if (!res.result)
                    throw {message: "error client creation", step: "add_client"};

                  return clientConfirmAppointment(process.env.ENDPOINT, appointmentId, res.result.client.id,
                      ['7', '123', '1231231']
                  );
                })
                .then((res) => {
                  console.info("client_confirm_appointment short_id=%s", res.result? res.result
                      .client.shortId: "unknown");
                  if (!res.result)
                    throw {message: "error appointment confirmation", step: "client_confirm_appointment"};

                  return cancelAppointmentByClient(process.env.ENDPOINT, appointmentId, res.result.client.shortId);
                })
          })

          .catch((err) => {
            console.error("booking/cancellation cycle failed %swith message", err.step ? "on step " + err.step : "",
                err.message);
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
