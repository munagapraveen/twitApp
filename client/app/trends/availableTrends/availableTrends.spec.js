'use strict'

describe('Controller: availableTrendsController', function(){

   beforeEach(module('twitApp'));

   var ctrl,
    scope,
    _trendsService;
  
  beforeEach(inject(function($controller, $rootScope, trendsService, $q ){
    scope = $rootScope.$new();
   // _trendsService = _trendsService_;
   /* _trendsService = {
      getAllAvailableTrends: function(){
        
      }
    };*/

    spyOn(trendsService, 'getAllAvailableTrends').and.callFake(function(){
        return ;
    });

    ctrl = $controller('availableTrendsController', {
              $scope: scope,
              trendsService: trendsService  
    });

    
   
  }));  

  it('should exist', function(){
        expect(ctrl).toBeDefined();
    });

  it('should declare methods', function(){
      expect(scope.loadTrendsonWOEID).toBeDefined();
  });


});
