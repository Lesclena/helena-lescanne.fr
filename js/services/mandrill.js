'use strict';

app.factory('Mandrill', ['$resource', 'MANDRILL_URL', 'MANDRILL_APIKEY',
  function ($resource, MANDRILL_URL, MANDRILL_APIKEY) {
    return $resource(MANDRILL_URL + ':category/:call.json',
      {},
      {
        sendMessage: {
          method: 'POST',
          isArray: true,
          params: {
            category: 'messages',
            call: 'send'
          },
          transformRequest: function (message) {
            return JSON.stringify({
              key: MANDRILL_APIKEY,
              message: message
            });
          }
        },
        ping: {
          method: 'POST',
          params: {
            category: 'users',
            call: 'ping',
            key: MANDRILL_APIKEY
          }
        }
      }
    );
  }
]);
