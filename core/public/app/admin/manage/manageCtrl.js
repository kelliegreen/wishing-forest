angular.module('wishingforest').controller('manageCtrl', function ($scope, manageSrvc, productSrvc) {
	productSrvc.getItems().then(function (response) {
		$scope.items = response;
	});

	$scope.out = function () {
		manageSrvc.logout();
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
			if ($scope.itemToAdd.itemtype == null || $scope.itemToAdd.iteminfo == null || $scope.itemToAdd.available == null || $scope.itemToAdd.price == null || $scope.itemToAdd.imgpath == null) {
				alert('You must enter all fields');
			} else {
				$scope.items.push(response.data);
			}



		});
	};

	$scope.removeItem = function (item) {
		manageSrvc.remove(item);
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