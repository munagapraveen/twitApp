'use strict'

describe('Controller: availableTrends', function(){

  beforeEach(function(
    module('twitApp')
    ctrl = $controller('availableTrendsController', {
              scope: scope,
              trendsService: trendsService,

            });
  ));

  it('should exist', function(){

        expect(ctrl).toBeDefined();

    });

  it('should declare methods', function(){

      expect(scope.loadTrendsonWOEID).toBeDefined();

  });


});
