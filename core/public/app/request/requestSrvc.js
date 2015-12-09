angular.module('wishingforest').service('requestSrvc', function ($http) {
	this.getRequests = function () {
		return $http.get('/api/request').then(function(response) {
			return response.data;
		});
	};
	
	this.addRequest = function (item) {
		return $http.post('/api/request', item);
	};
	
	// this.removeRequest = function () {
	// 	return $http.delete('/api/request');
	// };
});
