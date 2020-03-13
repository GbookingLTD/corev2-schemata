"use strict";

const Q = require('q')
  , getProfileByID = require('./test').getProfileByID
  , addClient = require('./test').addClient
  , getNetworkData = require('./test').getNetworkData
  , getNetworkDataWithBusinessInfo = require('./test').getNetworkDataWithBusinessInfo
  , reserveAppointment = require('./test').reserveAppointment
  , clientRemoveEmptyAppointment = require('./test').clientRemoveEmptyAppointment
;

// test get_profile_by_id for dev
require('./test')(function() {
  let requests = [];
  
  [
    addClient(process.env.ENDPOINT, {
      business: { id:4000000005153 },
      email: 'test@gbooking.ru',
      phone: ['7', '123', '1231231']
    }),
    addClient(process.env.ENDPOINT, {
      business: { id:4000000006957 },
      email: '',
      phone: ['7', '111', '1111115']
    })
  ].forEach((p) => {requests.push(p)});

  [
    getProfileByID(process.env.ENDPOINT, 4000000005153),
    getProfileByID(process.env.ENDPOINT, 4000000005153, {
      token: "f1f5bd7c84bd67a2b9797cf05866459ad3a52bc7",
      user: "5b1671531e0bbb19ac9f8b15"
    }),
    getProfileByID(process.env.ENDPOINT, 4000000005155),
    getProfileByID(process.env.ENDPOINT, 4000000005154),
    getProfileByID(process.env.ENDPOINT, 4000000005144),
    getProfileByID(process.env.ENDPOINT, 4000000005144, {
      token: "f1f5bd7c84bd67a2b9797cf05866459ad3a52bc7",
      user: "5b1671531e0bbb19ac9f8b15"
    }),
    getProfileByID(process.env.ENDPOINT, 4000000005143),
    getProfileByID(process.env.ENDPOINT, 4000000005143, {
      token: "a5de5c7f612dcf7776c4ce9abb95a68e041620cd",
      user: "5b16534175fcff1845255858"
    }),
    getProfileByID(process.env.ENDPOINT, 4000000004939),
    getProfileByID(process.env.ENDPOINT, 4000000003543),
    getProfileByID(process.env.ENDPOINT, 4000000003543, {
      token: "7f3b4b8b94e61bc26818239e446775268b9ca53d",
      user: "55d58cc4b09dd3112cbf3163"
    }),
    getProfileByID(process.env.ENDPOINT, 4000000006959),
    getProfileByID(process.env.ENDPOINT, 4000000006959, {
      token: "aecc4bc4fc6aa18f20b35ede173ed5d48907b3e2",
      user: "5d80e9f9238a0c13ab51a196"
    }),
    getProfileByID(process.env.ENDPOINT, 4000000006771),
    getProfileByID(process.env.ENDPOINT, 4000000005156, {
      token: "2a10ee035229b38b63c578999df4de284cdbecaf",
      user: "5d15f3475e1bfd71b15fa738"
    }, {with_bop:true}),
    getProfileByID(process.env.ENDPOINT, 4000000003715),
    getProfileByID(process.env.ENDPOINT, 4000000007101, {
      token: "9b8ae27a0c7cbb6172a4c5e61f1184056b3dc746",
      user: "530c68d439cab498434e9466"
    }, {with_bop:true}),
    getNetworkData(process.env.ENDPOINT, 305),
    getNetworkDataWithBusinessInfo(process.env.ENDPOINT, 305),
    getNetworkData(process.env.ENDPOINT, 257),
    getNetworkDataWithBusinessInfo(process.env.ENDPOINT, 257),
    getNetworkData(process.env.ENDPOINT, 342),
    getNetworkDataWithBusinessInfo(process.env.ENDPOINT, 342),
    reserveAppointment(process.env.ENDPOINT, "4000000003715", "9123154",
        "5d0a27dd73876619445a2910", "Tue, 24 Mar 2020 10:00:00 GMT")
        .then((res) => {
          let appointmentId = undefined;
          console.info("setup appointmentId", res.result? res.result.appointment.id : "unknown");
          if (res.result)
            appointmentId = res.result.appointment.id;

          if (!appointmentId) {
            console.warn("skip appointment.client_remove_empty_appointment");
            return Q();
          }

          return clientRemoveEmptyAppointment(process.env.ENDPOINT, "4000000003715", appointmentId)
        }),
    
    reserveAppointment(process.env.ENDPOINT, "4000000007105", "9160021",
        "5e6a150547325625a769eb97", "Mon, 16 Mar 2020 10:00:00 GMT")
        .then((res) => {
          let appointmentId = undefined;
          console.info("setup appointmentId", res.result? res.result.appointment.id : "unknown");
          if (res.result)
            appointmentId = res.result.appointment.id;

          if (!appointmentId) {
            console.warn("skip appointment.client_remove_empty_appointment");
            return Q();
          }

          return clientRemoveEmptyAppointment(process.env.ENDPOINT, "4000000007105", appointmentId)
        }),
  ].forEach((p) => requests.push(p));
    
  return requests.map((p) => function () {
    return p
  }).reduce(Q.when, Q());
});
