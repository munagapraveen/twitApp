/**
 * Main application file
 */
'use strict';

import express from 'express';
import env from './config/environment';
import http from 'http';

// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  server.listen(env.port, env.ip, function() {
    console.log('Express server listening on %d, in %s mode', env.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;






//(getting a frequent problem saying 'bearer-token' got expired. So commented and working with consumer keys
//Fetch bearer token from twitter
/*request({
        method: 'POST',
        url: 'https://api.twitter.com/oauth2/token',
        headers: {
            'Authorization': 'Basic '+ new Buffer(encodeURIComponent(env.keys.consumer_key)+':'+encodeURIComponent(env.keys.consumer_secret)).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        qs: {'grant_type':'client_credentials'}
    },
    function(error, response, body){
        if (!error && response.statusCode == 200) {
            env.keys.bearer_token = JSON.parse(body).access_token;

            //getT.usertweets();
            getTrends.getTrendLocations();
        }
        else
        {
            console.log("Error while fetching bearer token: "+error);
        }
    }
);*/

