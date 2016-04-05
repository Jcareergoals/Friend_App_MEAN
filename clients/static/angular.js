var friends_app = angular.module('friends_app', []); 
// factory 
friends_app.factory('friends_factory', function($http){
	var factory = {}; 
	factory.index = function(callback){
		$http.get('/friends').success(function(output){
			callback(output);
		});
	}
	factory.addFriend = function(friend, callback){
		$http.post('/addfriends', friend).success(function(output){
			callback(output);
		});
	}
	return factory; 
}); 

// controllers
friends_app.controller('friends_controller', function($scope, friends_factory){
	$scope.friends = []; 
	friends_factory.index(function(data){
		$scope.friends = data; 
	}); 
	$scope.addFriend = function(){
		friends_factory.addFriend($scope.newFriend, function(data){
			$scope.friends.push(data);
			$scope.newFriend = {}; 
		}); 
	}
}); 


// file location: /clients/static/angular.js