var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/friends');
var friendSchema = new mongoose.Schema({
	name:String, 
	age:Number
}); 
mongoose.model("friend", friendSchema); 
