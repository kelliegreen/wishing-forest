angular.module('wishingforest').controller('manageCtrl', function ($scope, manageSrvc, productSrvc) {
	productSrvc.getItems().then(function (response) {
		$scope.items = response;
	});

	$scope.out = function () {
		manageSrvc.logout();
	};
	
	$scope.signup = function () {
		manageSrvc.signup();
	};

	$scope.showbutton = false;
	$scope.show = function () {
		$scope.showbutton = true;
	};


	$scope.editbutton = false;
	$scope.editshow = function (item) {
		$scope.itemToEdit = item;
		$scope.editbutton = true;
		// console.log(item.iteminfo);


	};
	$scope.newItem = function () {
		manageSrvc.addNew($scope.itemToAdd).then(function (response) {
			$scope.items.push(response.data);
		$scope.itemToAdd = {};		
		});
	};


	$scope.removeId = function(item) {
		console.log(item._id);
		$scope.findId = item._id;
	};

	$scope.removeItem = function () {
		// console.log(item);
		manageSrvc.remove($scope.findId);
		productSrvc.getItems().then(function (response) {
			$scope.items = response;
		});
	};

	$scope.updateItem = function () {
		manageSrvc.update($scope.itemToEdit).then(function () {
			productSrvc.getItems().then(function (response) {
				$scope.items = response;
			});
		});

	};
	
	
});