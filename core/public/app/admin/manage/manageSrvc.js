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

	this.addNew = function (itemToAdd) {
		return $http.post('/api/item', itemToAdd);
	};

	this.remove = function (item) {
		return $http.delete('/api/item/' +  item._id);
	};
	
	this.update = function(itemToEdit) {
		// console.log(id);
		return $http.put('/api/item/' + itemToEdit._id, itemToEdit);
	};

});