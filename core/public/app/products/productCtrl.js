angular.module('wishingforest').controller('productCtrl', function( $scope, productSrvc, requestSrvc) {
	productSrvc.getItems().then(function( response ) {
		$scope.items = response;
	});
	
	$scope.addCart = function (item) {
	$scope.cart = productSrvc.addCart(item); 
	};
	
	$scope.requestbutton = false;
	$scope.requestShow = function(item) {
		$scope.requestbutton = true;
		$scope.itemToRequest = {};
		$scope.itemToRequest.item = item._id;
		$scope.itemToRequest.image = item.imgpath;
	// console.log($scope.itemToRequest);
	};
	$scope.addRequest = function(item) {
		if ($scope.itemToRequest.message == null || $scope.itemToRequest.contactName == null || $scope.itemToRequest.contactEmail == null) {
			alert('You must enter all fields');
		} else { 
			requestSrvc.addRequest(item);
			alert('Your message has been sent');
		}
		// console.log(item);
	};
});

