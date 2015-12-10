angular.module('wishingforest').controller('contactCtrl', function($scope, contactSrvc) {
	$scope.sendContact =  function(message) {
		contactSrvc.sendEmail(message).then(function () {
			$scope.message = {};
			alert('Your message has been sent.');
		});
	};
});


