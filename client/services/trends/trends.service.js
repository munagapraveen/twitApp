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
            .success(function(data){
                    console.log(data);

                    //Current trends are returned in (first object of) array
                    if(data.length > 0){
                        deferred.resolve(data[0].trends);
                    }
                    else{
                        console.log('Unable to load Trends for @ getTrendsForWOEID(trends.service.js): '+ error);
                        deferred.reject('Unable to load Trends for '+woeid);
                    }
                    
            })
            .error(function(error){
                console.log('Error @ getTrendsForWOEID(trends.service.js): '+ error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }]);
