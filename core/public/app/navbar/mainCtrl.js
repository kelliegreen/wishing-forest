angular.module('wishingforest').controller('mainCtrl', function ($scope) {
	$scope.findLocal = function () {
		if('cart') {
			$scope.numItemsInCart = JSON.parse(localStorage.getItem('cart')).cart.length;
		} else {
			$scope.empty = {};
		}
	};
	$scope.findLocal();
	
		$scope.$on('cartItem', function (ev, cart) {
			$scope.numItemsInCart = cart;
		});

});