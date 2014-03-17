'use strict';

app.controller('ContactCtrl', ['$scope', 'Mandrill', 'CONTACT_TO', 'CONTACT_SUBJECT',
  function ($scope, Mandrill, CONTACT_TO, CONTACT_SUBJECT) {
    $scope.SEND_INIT = undefined;
    $scope.SEND_PENDING = 0;
    $scope.SEND_OK = 1;
    $scope.SEND_FAIL = -1;

    $scope.sendStatus = $scope.SEND_INIT;

    $scope.message = {
      from_name: '',
      from_email: '',
      subject: CONTACT_SUBJECT,
      text: '',
      to: [
        {email: CONTACT_TO}
      ]
    };

    $scope.send = function () {
      $scope.sendStatus = $scope.SEND_PENDING;

      Mandrill.sendMessage($scope.message).$promise
        .then(function () {
          $scope.sendStatus = $scope.SEND_OK;
        })
        .catch(function () {
          $scope.sendStatus = $scope.SEND_FAIL;
        });
    };

    // Check setup.
    Mandrill.ping().$promise
      .then(function () {
        $scope.mandrillStatus = true;
      })
      .catch(function () {
        $scope.mandrillStatus = false;
      });
  }
]);
