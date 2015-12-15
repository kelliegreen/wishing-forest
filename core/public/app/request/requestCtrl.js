angular.module('wishingforest').controller('requestCtrl', function( $scope, requestSrvc) {
	requestSrvc.getRequests().then(function(response) {
		$scope.requests = response[0].requests;
		// console.log($scope.requests[43]);
	});
	
	
});