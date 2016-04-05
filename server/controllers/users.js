var mongoose = require('mongoose');
var friend = mongoose.model('friend'); 
module.exports = {
	create: function(req, res){
		var newFriend = new friend(req.body); 
		newFriend.save(function(err, data){
			res.json(data);
		}); 
	}
}