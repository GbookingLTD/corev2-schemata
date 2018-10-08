"use strict";

const Q = require('q')
  , getProfileByID = require('./test').getProfileByID
  , addClient = require('./test').addClient
;

// test get_profile_by_id for dev
require('./test')(function() {
  let requests = [];
  
  [
    addClient(process.env.ENDPOINT, {
      business: { id:4000000005153 },
      email: 'test@gbooking.ru',
      phone: ['7', '123', '1231231']
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
    })
  ].forEach((p) => requests.push(p));
    
  return requests.map((p) => function () {
    return p
  }).reduce(Q.when, Q());
});
