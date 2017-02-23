'use strict'

angular.module('twitApp')
    .controller('availableTrendsController', ['trendsService', function(trendsService){

        var vm = this;
                
        trendsService.getAllAvailableTrends().then(function(body){           
            vm.availableTrends = body;            
        });

        vm.loadTrendsonWOEID = function(trend){          
          trendsService.getTrendsForWOEID(trend.woeid);
        }        
              
    }]);
