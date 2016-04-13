/**
 * Created by pmunaga on 21-12-2015.
 */
'use strict'

var express = require('express');
var controller = require('./trends.controller');

var router = express.Router();

router.get('/getAllTrendLocations', controller.getAllTrendLocations);
router.get('/getTrendsForWOEID', controller.getTrendsForWOEID);

module.exports = router;
