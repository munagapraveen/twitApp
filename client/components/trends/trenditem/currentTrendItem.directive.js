'use strict'

angular.module('twitApp')
        .directive('currentTrendItem', function(){
            return{
                restrict: 'AE',
                require: '^trendItem',
                templateUrl:'components/trends/trenditem/currentTrendItem.html',
                scope: {},
                bindToController:{
                    item : '='
                },
                controller: function(){
                   
                },
                controllerAs: 'currentTrendItem',
                link : function($scope, $element, $attrs, $ctrl){
                   
                }
            }
        });