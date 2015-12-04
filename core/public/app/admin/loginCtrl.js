angular.module('wishingforest').controller('loginCtrl', function($scope, $state, $http) {
	$scope.login = function () {
		$http.post('http://localhost:9000/api/login',
		$scope.user).then(function(user) {
			if (user) {
				$state.go('manage');
			}
		});
	};
});