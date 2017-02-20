'use strict';

xdescribe('Controller: mainController', function() {

  // load the controller's module
  beforeEach(module('twitApp'));


  var scope;
  var mainController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      mainController = $controller('mainController', {
              $scope: scope
      });
  }));

  it('should exist', function(){
        expect(mainController).toBeDefined();
    });

});
