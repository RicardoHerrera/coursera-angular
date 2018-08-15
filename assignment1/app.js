(function () {
'use strict'

angular.module('FirstAssig', [])

.controller('AssignmentController', ASGController);

ASGController.$inject = ['$scope'];

function ASGController($scope) {
    $scope.userText = "";
    $scope.message = "";
    $scope.CheckIfTooMuch = function () {
      if ($scope.userText == "") {
        showMessage("Please enter data first");
      } else {
        var splittedMessage = $scope.userText.split(',');
        if (splittedMessage.length <= 3) {
          showMessage("Enjoy!");
        } else {
          showMessage("Too much!");
        }
      }
    }

    function showMessage(newMessage) {
      $scope.message = newMessage;
    }
}

})();
