angular.module('wishingforest').service('manageSrvc', function ($http, $state) {
	this.logout = function () {
		$http.get('http://localhost:9000/api/logout',
			this.user).then(function (res, err) {
				if (err) {
					// console.log(err);
					return;
				} $state.go('admin');
			});
	};

	this.signup = function () {
		$state.go('signup');
	};

	this.addNew = function (itemToAdd) {
		return $http.post('/api/item', itemToAdd);
	};

	this.remove = function (item) {
		// console.log(item);
		return $http.delete('/api/item/' +  item);
	};
	
	this.update = function(itemToEdit) {
		// console.log(id);
		return $http.put('/api/item/' + itemToEdit._id, itemToEdit);
	};
	

});