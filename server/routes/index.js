"use strict"
var express = require('express');
var router = express.Router();
var log = require('bristol');
log.addTarget('console');

/** GET home page. **/
router.get('/', function(req, res, next) {
	log.info("We're up and running!", {port: 3001});
	res.send({ title: 'Express' });
});


module.exports = router;