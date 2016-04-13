angular.module('twitApp')
  .directive('trendItem', ['trendsService', function(trendsService) {
    return{
      templateUrl: 'components/trends/trenditem/trend-item.html',
      restrict: 'AE',
      scope: {
        trend: '=',
        loadTrendsForWoeid : '&'
      },
      controller: function($scope){
        $scope.currentTrends;
      },
      replace: true,
      link: function($scope, elem, attr){

          elem.bind('click', function(){
            var woeid = $scope.$eval(attr.trend).woeid;
            trendsService.getTrendsForWOEID(woeid)
              .then(function(data){
                   $scope.currentTrends = data;
                   console.log('trends count: ' +$scope.currentTrends[0].trends.length);
               });
          });
      }
    }
  }]);
