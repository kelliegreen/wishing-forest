angular.module('wishingforest').controller('productCtrl', function ($scope, productSrvc, requestSrvc, contactSrvc) {
	$scope.numItems = 0;
	$scope.test = 0;
	$scope.addCartHide = true;
	
	$scope.itemTypes = [];
	$scope.activeType = "";
	
	productSrvc.getItems().then(function (response) {
        // console.log(response);
		$scope.items = response;
		// console.log($scope.items[2].price);
		$scope.getItemTypes();
	});

		// $scope.addbtn();
	// $scope.addbtn = function (item) {
	// 	// item.forEach(function (item) {
	// 		console.log(item);
	// 		$scope.itemCartBtn = item;
	// 		if ($scope.itemCartBtn.available === "No") {
	// 			$scope.addCartHide = true;
	// 		}
	// 	// });
	// };
	
	$scope.resetSort = function(val) {
		// console.log(val);
		if(val === null) {
			$scope.activeType = "";
			return true;
		}
		$scope.activeType = val;
	};
		

		$scope.addCart = function (item) {
			$scope.cart = productSrvc.addCart(item);
			$scope.$emit('cartItem', $scope.cart.cart.length);
		};


		$scope.requestShow = function (item) {
			$scope.itemToRequest = {};
			$scope.itemToRequest.item = item._id;
			$scope.itemToRequest.image = item.imgpath;


		};
		$scope.addRequest = function (item) {
			requestSrvc.addRequest(item);
			// console.log(item);
			contactSrvc.sendEmail(item).then(function () {
				// console.log(item);
				swal({
					title: "Request Sent",
					text: "Your custom request has been sent. Thank you.",
					type: "success",
					confirmButtonText: "OK"
				});

			});
		};

		$scope.getItemTypes = function () {
			$scope.items.forEach(function (item) {
				if ($scope.itemTypes.indexOf(item.itemtype) === -1) {
					$scope.itemTypes.push(item.itemtype);
					// console.log(item.itemtype);
				}
			});
			// console.log($scope.itemTypes);
		};
	});
	


