angular.module('wishingforest').controller('signupCtrl', function ($scope, $state, $http) {
	$scope.signup = function () {
		$http.post('http://localhost:9000/api/signup', $scope.user).then(function( user ) {
			if ( user ) {
				$state.go('manage');
			}
		});
	};
});