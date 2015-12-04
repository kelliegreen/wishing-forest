angular.module('wishingforest').service('manageSrvc', function ($http, $state) {
		this.logout = function () {
		$http.get('http://localhost:9000/api/logout',
		this.user).then(function(res, err) {
			if(err) {
				console.log(err);
				return;
			} $state.go('admin');
		});
	};
});