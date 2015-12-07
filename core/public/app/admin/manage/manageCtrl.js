angular.module('wishingforest').controller('manageCtrl', function ($scope, manageSrvc, productSrvc) {
	productSrvc.getItems().then(function( response ) {
		$scope.items = response;
	});
	
	$scope.out = function () {
		manageSrvc.logout();
	};
	
	$scope.showbutton = false;
	$scope.show = function () {
		return $scope.showbutton = true;
	};
});