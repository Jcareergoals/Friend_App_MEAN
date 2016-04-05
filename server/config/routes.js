var mongoose = require('mongoose'); 
var friend = mongoose.model('friend');
var friendsController = require('./../controllers/users.js');

module.exports  = function(app){
	app
	.get('/friends', function(req, res){
		friend.find({}, function(err, data){
			res.json(data)
		})
	})
	.post('/addfriends', function(req, res){
		friendsController.create(req, res)
	})
	.post('/remove', function(req, res){
		friendsController.remove(req, res)
	})
}

// file location: /server/config/routes.js