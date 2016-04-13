'use strict'

angular.module('twitApp')
        .controller('trendsForLocationController',['$scope', 'trendsService', function($scope, trendsService){

          $scope.getTrendsForWOEID = function(woeid){
              trendsService.getTrendsForWOEID(woeid);
          }

        }]);
