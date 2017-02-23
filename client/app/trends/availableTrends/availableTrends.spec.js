'use strict'

describe('Controller: availableTrendsController', function(){

   beforeEach(module('twitApp'));

   var ctrl,
    _trendsService;
  
  beforeEach(inject(function($controller, trendsService, $q ){
    
    spyOn(trendsService, 'getAllAvailableTrends').and.callFake(function(){
        return ;
    });

    ctrl = $controller('availableTrendsController', {
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
