angular.module('wishingforest').controller('mainCtrl', function ($scope) {
	$scope.numItemsInCart = JSON.parse(localStorage.getItem('cart')).cart.length;

		$scope.$on('cartItem', function (ev, cart) {
			$scope.numItemsInCart = cart;
		});

});