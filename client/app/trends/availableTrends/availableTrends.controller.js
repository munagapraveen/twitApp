'use strict'

angular.module('twitApp')
    .controller('availableTrendsController', ['$scope','trendsService', function($scope, trendsService){

        trendsService.getAllAvailableTrends().then(function(body){           
            $scope.availableTrends = body;
        });

        $scope.loadTrendsonWOEID = function(trend){
          console.log(trend);
          trendsService.getTrendsForWOEID(trend.woeid);
        }
              
    }]);
