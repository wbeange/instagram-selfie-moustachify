(function () {
  'use strict';

  angular
    .module('app.services', [])
    .service('api', [
      '$http',
      apiService
    ])

  function apiService($http) {
    var service = {
      getSelfie: getSelfie,
    };

    return service;

    function getSelfie() {
      var baseApi = 'http://127.0.0.1:5000/';
      return $http.get(baseApi + 'selfie');
    }
  }
}());
