// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('tuPila', ['ionic','ngSanitize','ionic.contrib.drawer', 'ngCordova','tuPila.controllers','tuPila.services','tuPila.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

      moment.locale('pl');
  });
})
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
      $httpProvider.defaults.headers['Origin']="tu.pila.pl";
      delete $httpProvider.defaults.headers['X-Requested-With'];
  }])

.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/events');

        $stateProvider
      .state('events', {
      url: "/events",
      templateUrl: "templates/events.html",
      controller: 'EventListsController'


  })

  .state('event', {
    url: "/event/:eventId",
        templateUrl: "templates/event.html",
        controller: 'EventController'


  });
  // if none of the above states are matched, use this as the fallback

});
