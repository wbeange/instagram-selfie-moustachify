(function() {
  'use strict';

  angular
    .module('main.controller', [])
    .controller('MainController', [
      '$scope',
      '$state',
      'api',
      MainController
    ]);

  function MainController($scope, $state, api) {
    var vm = this;

    api.getSelfie().then(function(data) {
      vm.selfie = data.data;
    });
  }
}());
