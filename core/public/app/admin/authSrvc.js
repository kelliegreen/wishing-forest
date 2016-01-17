angular.module('wishingforest').service('authSrvc', function ($http, $state) {
	this.getAuth = function() {
		return $http.get('http://localhost:9000/api/auth').success(function(user) {
			return user;
		}).error(function(err) {
			console.error(err);
			$state.go('admin');
		});
	};

});