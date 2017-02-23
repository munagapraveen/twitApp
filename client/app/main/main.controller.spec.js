'use strict';

xdescribe('Controller: mainController', function() {

  // load the controller's module
  beforeEach(module('twitApp'));
  
  var mainController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller){     
      mainController = $controller('mainController', {
             
      });
  }));

  it('should exist', function(){
        expect(mainController).toBeDefined();
    });

});
