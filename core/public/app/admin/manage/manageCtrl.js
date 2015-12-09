angular.module('wishingforest').controller('manageCtrl', function ($scope, manageSrvc, productSrvc) {
	productSrvc.getItems().then(function (response) {
		$scope.items = response;
	});
	$scope.$watch('items');
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
			$scope.items.push(response.data);
			$scope.itemToAdd.itemtype = "";
			$scope.itemToAdd.iteminfo = "";
			$scope.itemToAdd.price = "";
			$scope.itemToAdd.imgpath = "";


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