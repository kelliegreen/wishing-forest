angular.module('wishingforest').controller('mainCtrl', function ($scope) {
	$scope.findLocal = function () {
		var storedCart = localStorage.getItem('cart');
		if(storedCart) {
			storedCart = JSON.parse(storedCart);
			$scope.numItemsInCart = storedCart.cart.length;
		} else {
			$scope.empty = {cart: []};
		}
	};
	$scope.findLocal();
	
		$scope.$on('cartItem', function (ev, cart) {
			$scope.numItemsInCart = cart;
		});

});