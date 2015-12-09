angular.module('wishingforest').controller('mainCtrl', function ($scope) {
	$scope.numItemsInCart = 0;

		$scope.$on('cartItem', function (ev, cart) {
			$scope.numItemsInCart = cart;
		});

});