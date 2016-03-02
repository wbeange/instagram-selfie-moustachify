(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.services',
      'main.controller',
    ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      function($stateProvider,
        $urlRouterProvider,
        $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('app',  {
            url: '/',
            controller: 'MainController',
            controllerAs: 'vm',
            templateUrl: 'static/js/views/main/main.html'
          }); 
    }]);
})();
