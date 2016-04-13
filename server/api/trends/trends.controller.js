/**
 * Created by pmunaga on 21-12-2015.
 */
'use strict'

var env = require('../../config/environment');
var twitter = require('twitter');
var mongoClient = require('mongodb').MongoClient;
var request = require('request');

/*
 Steps to fetch trend locations
 1) Ping MongoDB and see if trend locations exists
 2) If didn't exists, fetch trend locations from twitter, store in DB with timestamp and return data to UI
 3) If exists, get timestamp of latest record
     a) If timestamp is < 24 hrs return these records to UI
     b) If timestamp is > 24 hrs, fetch latest trend locations from twitter. Match this data with the
        last inserted data into DB. If there is a change insert fetched data to DB with timestamp,
        else update the timestamp of last inserted data in DB to current & return data to UI


*/
//Method to fetch all available twitter trends
exports.getAllTrendLocations = function(req, res){

    var twitterClient = new twitter(env.keys);

    // https://api.twitter.com/1.1/trends/available.json
    twitterClient.get('trends/available.json', {}, function(error, body, response){
        //console.log(response);
        if (error) {
            return console.error("Error @getAllTrendLocations:  "+JSON.stringify(error));
        }

        var status = response.statusCode;

        if(status !== 200) {
            console.error("getTrendLocations response status != 200: "+ body);

            return res.status(status).send('denied');
        }

        res.status(status).send(response.body);

        saveAllTrendLocationsToDB(JSON.parse(response.body));

    });
}

var getLastInsertedTrendLocationsDataFromDB = function(){
    mongoClient.connect(env.mongoDBUrl, function(err, db)   {
          if(db){
              var trendLocArr = [];
              var cursor = db.collection('trendLocations').count({}, function(err, cou){
                if(cou){
                   console.log('Count: '+cou);
                }
                else
                {

                }

              });
              cursor.each(function(err, doc) {
                  if (doc != null) {
                     trendLocArr.push(doc);
                  } else {
                     db.close();
                  }
               });

              db.collection('trendLocations').find(trends, function(err, result){
                if(result)
                {
                  console.log("Inserted trend loactions to DB: "+result.insertedCount);
                }
                else
                {
                  console.error("Failed to insert trend loactions to DB.");
                }
                db.close();
              });
          }
          else{
              console.error("Failed to  connect to MongoDB server: " + err);
          }
     });
}

//Method to save fetched trend locations to MongoDB
var saveAllTrendLocationsToDB = function(trends){
  console.log("in saveAllTrendsToDB: " + trends.length);

  mongoClient.connect(env.mongoDBUrl, function(err, db)   {
      if(db){
          db.collection('trendLocations').insertMany(trends, function(err, result){
            if(result)
            {
              console.log("Inserted trend loactions to DB: "+result.insertedCount);
            }
            else
            {
              console.error("Failed to insert trend loactions to DB.");
            }
            db.close();
          });
      }
      else{
          console.error("Failed to  connect to MongoDB server: " + err);
      }
  });
}

exports.getTrendsForWOEID = function(req, res){

  var twitterClient = new twitter(env.keys);

  //https://api.twitter.com/1.1/trends/place.json
  twitterClient.get('trends/place.json', req.query, function(error, body, response){
      console.log(response);
      if (error) {
          return console.error("Error @getTrendsForWOEID for woeid:  "+JSON.stringify(error));
      }

      var status = response.statusCode;

      if(status !== 200) {
          console.error("getTrendsForWOEID response status != 200: "+ body);

          return res.status(status).send('denied');
      }

      res.status(status).send(response.body);

  });
}


