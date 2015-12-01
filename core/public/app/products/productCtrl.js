angular.module('wishingforest').controller('productCtrl', function( $scope, $http ) {
	// console.log('ello mate');
	$scope.getItems = function() {
		$http.get('/api/item').then(function( response ) {
			$scope.items = response.data;
		});
	};
	$scope.getItems();
});