angular.module('twitApp')
  .directive('trendItem', ['trendsService','$timeout', function(trendsService, $timeout) {
    return{
      templateUrl: 'components/trends/trenditem/trend-item.html',
      restrict: 'AE',
      scope: {},
      bindToController : {
        trend: '=',
        loadTrendsForWoeid : '&'
      },
      controller: function(){
        this.currentTrends;
      },
      controllerAs: 'trendItem',
      replace: true,
      link: function($scope, elem, attr, $ctrl){

          elem.bind('click', function(){
            var woeid = $ctrl.trend.woeid;
            trendsService.getTrendsForWOEID(woeid)
              .then(function(currentTrends){
                   $ctrl.currentTrends = currentTrends;
                  
                   console.log('trends count: ' +$ctrl.currentTrends.length);
                   console.log($ctrl.currentTrends[0].name);
               });
          });
      }
    }
  }]);
