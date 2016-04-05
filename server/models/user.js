var mongoose = require('mongoose');

// create or connect to the 'friends' database
mongoose.connect('mongodb://localhost/friends');

// creates a schema for the 'friend' model
var friendSchema = new mongoose.Schema({
	name:String, 
	age:Number
}); 

// creates the 'friend' model
mongoose.model("friend", friendSchema); 


// file location: /server/models/user.js
