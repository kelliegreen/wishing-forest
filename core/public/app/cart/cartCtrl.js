angular.module('wishingforest').controller('cartCtrl', function ($scope, productSrvc) {
	$scope.getCart = function () {
		$scope.cart = productSrvc.getCart();
	};
	$scope.getCart();
	$scope.items = $scope.cart.cart;

 
	$scope.total = 0;

	$scope.totalPrice = function () {
		$scope.total = 0;
		$scope.items.forEach(function (cartitem) {
			$scope.total += cartitem.item.price;
		});
		return $scope.total;
	};
	$scope.totalPrice();


	$scope.remove = function (item, index) {
		$scope.items.splice(index, 1);
		productSrvc.removeCart($scope.cart);
		$scope.totalPrice();
		$scope.$emit('cartItem', $scope.cart.cart.length);
	};
	
	
	// $scope.numItems = productSrvc.total();
	
});
