'use strict'

angular.module('twitApp')
    .service('trendsService', ['$http','$q', function($http, $q){

        var availableTrends = sessionStorage.availableTrends ? JSON.parse(sessionStorage.availableTrends) : undefined;
        var trendsforwoeid = [];

        //Method to make $http request to get all available trends
        this.getAllAvailableTrends = function(){
            var deferred = $q.defer();

            if(!availableTrends)
            {
                $http.get('/trends/getAllTrendLocations')
                .success(function(data){
                        availableTrends = data;
                        sessionStorage.availableTrends = JSON.stringify(data);
                        deferred.resolve(availableTrends);
                })
                .error(function(error){
                    console.log('Error @ getAllAvailableTrends(trends.service.js): '+ error);
                    deferred.reject(error);
                });
            }
            else
            {
              deferred.resolve(availableTrends);
            }

            return deferred.promise;
        }

        //Method to make $http request to get all trends for a a woeid
        this.getTrendsForWOEID = function(woeid){
            var deferred = $q.defer();

            $http.get('/trends/getTrendsForWOEID', {params: {'id':woeid}})
            .success(function(body){
                    //console.log(body);
                    deferred.resolve(body);
            })
            .error(function(error){
                console.log('Error @ getTrendsForWOEID(trends.service.js): '+ error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }]);
