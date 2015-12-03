angular.module('wishingforest').controller('cartCtrl', function ($scope, productSrvc) {
	$scope.cart = productSrvc.getCart();
	
	$scope.items = $scope.cart.cart;
	console.log($scope.items[2].item.price);
	
	$scope.total = 
	
	$scope.totalPrice = function() {
		$scope.items.forEach(function(cartitem) {
			
		});
	};
});
