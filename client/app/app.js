'use strict';

angular.module('twitApp', [
  'twitApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.grid'
])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');

     $stateProvider
       .state('main',{
           url : '/',
           views: {
               "main@":{
                 templateUrl : 'app/main/main.html'
                 }
               },
           controller: 'MainController',
           controllerAs: 'main'
       })
       .state('allAvailableTrends',{
           //abstract: true,
           url : '/allAvailableTrends',
           views: {
               "main@":{
                   templateUrl: 'app/trends/availableTrends/availableTrends.html',
                   controller: 'availableTrendsController',
                   controllerAs: 'aTrendsCtrl'
                 }
               }
       });

    $locationProvider.html5Mode(true);
  });
