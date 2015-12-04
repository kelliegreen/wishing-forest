angular.module('wishingforest').controller('productCtrl', function( $scope, productSrvc) {
	productSrvc.getItems().then(function( response ) {
		$scope.items = response;
	});
	
	$scope.addCart = function (item) {
	$scope.cart = productSrvc.addCart(item); 
	};
});