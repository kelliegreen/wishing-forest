angular.module('wishingforest').service('contactSrvc', function ($http, $state) {
	this.sendEmail = function(message) {
		return $http.post('/api/contact', message);
	};
});