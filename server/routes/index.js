"use strict"
var express = require('express'),
	router = express.Router(),
	log = require('bristol'),
	fs = require("fs"),
    path = require("path");
log.addTarget('console');

	// list of users in "DB"
	var userMap = new Map();

	userMap.set("erlich", "password");
	userMap.set("richard", "password");
	userMap.set("gilfoyle", "password");
	userMap.set("dinesh", "password");
	userMap.set("jingyang", "password");
	userMap.set("monica", "password");
	userMap.set("russ", "password");

var dir = "files";
	
/** GET home page. **/
router.get('/', function(req, res, next) {
	// log.info("We're up and running!", {port: 4000});

	res.send({ title: 'Express' });
});

router.get('/files', function(req, res, next){
	
	fs.readdir(dir, function (err, files) {
		var docs = [];
	    if (err) {
	        throw err;
	    }

	    files.map(function (file) {
	        return path.join(dir, file);
	    }).filter(function (file) {
	        return fs.statSync(file).isFile();
	    }).forEach(function (file) {
	        // console.log("%s", file);
	        let fileName = file;
	        let filePath = 'http://' + path.join(req.headers.host, file);

	        let fileObj = {
	        	name: fileName.match("[^\/]*$")[0],
	        	location: filePath
	        }
	        docs.push(fileObj);
	        console.log(fileObj);
	    });

		res.json({
			data:docs
		})
	});
})

router.post('/authenticate', function (req, res, next){
	let username = req.body.username;
	let password = req.body.password;

	var success = false;
	if (password = userMap.get(username)) {
		success = true;
	} else {
		username = null
	}
	res.json({
		data:{ 
			token:username,
			success: success
		}
	})
})

module.exports = router;