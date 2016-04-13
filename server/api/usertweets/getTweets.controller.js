/**
 * Created by pmunaga on 18-12-2015.
 */
'use strict'

var env = require('../../config/environment');
var twitter = require('twitter');

exports.getTweets = function(){
    console.log(env.keys);
    var twitterClient = new twitter(env.keys);
    var params = {screen_name: 'praveenmunaga'};

    twitterClient.get('statuses/user_timeline', params, function(error, tweets, response){

        if (!error) {
            console.log(tweets);
        }
        else
        {
            console.log("Error while fetching tweets:  "+JSON.stringify(response));
        }
    });
};
