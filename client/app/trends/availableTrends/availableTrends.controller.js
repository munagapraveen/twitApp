'use strict'

angular.module('twitApp')
    .controller('availableTrendsController', ['$scope','trendsService', function($scope, trendsService){

       /* $scope.trendsGridOptions = {
          enableSorting: true,
          columnDefs:[
              {field: 'name', displayName: 'Place'},
              {field: 'country', displayName: 'Country'},
              {field: 'woeid', displayName:'WOEID', enableSorting: false},
          ],
        };*/

        trendsService.getAllAvailableTrends().then(function(body){
            //console.log(body);
            //$scope.trendsGridOptions.data =
            $scope.availableTrends = body;
        });

        $scope.loadTrendsonWOEID = function(trend){
          console.log(trend);
          trendsService.getTrendsForWOEID(trend.woeid);
        }

       /* $scope.getAllAvailableTrends = function(){
           $scope.trends = trendsService.getAllAvailableTrends();
        }*/
    }]);
