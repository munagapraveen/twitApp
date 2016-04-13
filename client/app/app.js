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
                 template: 'Welcome Home!!!'
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
                   controller: 'availableTrendsController'
                 }
               }
       });

    $locationProvider.html5Mode(true);
  });
