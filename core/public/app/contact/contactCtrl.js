angular.module('wishingforest').controller('contactCtrl', function ($scope, contactSrvc) {


	$scope.sendContact = function (message) {
		contactSrvc.sendEmail(message).then(function () {
			$scope.message = {};
			swal({
				title: "Message Sent",
				text: "Your message has been sent. Thank you.",
				type: "success",
				confirmButtonText: "OK"
			});
		});
	};
});


