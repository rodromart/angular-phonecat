'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);


phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    /*$http makes an HTTP GET request to our web server, asking
    for phones/phones.json
    (the url is relative to our index.html file)*/
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
      //$scope.phones = data.splice(0, 5);

    });

    $scope.orderProp = 'age';

  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  '$http', function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
      $scope.phone=data
      $scope.mainImageURL=data.images[0];
    });

    $scope.setImage = function(imageURL){
      $scope.mainImageURL =imageURL;
    }

  }]);
