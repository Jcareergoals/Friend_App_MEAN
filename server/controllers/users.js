var mongoose = require('mongoose');
var friend = mongoose.model('friend'); 

module.exports = {
	// method adds new user/friend to MongoDB
	create: function(req, res){
		if(req.body.age <= 0){
			req.body.age = 1;
		}
		var newFriend = new friend(req.body); 
		newFriend.save(function(err, data){
			res.json(data);
		}); 
	}
}

// file location: /server/controllers/users.js