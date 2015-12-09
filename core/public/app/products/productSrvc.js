angular.module('wishingforest').service('productSrvc', function ($http) {
	this.getItems = function () {
		return $http.get('/api/item').then(function (response) {
			return response.data;
		});
	};


	this.getCart = function () {
		if (localStorage.getItem('cart')) {
			return JSON.parse(localStorage.getItem('cart'));
		}
		return { cart: [] };
	};

	// console.log(this.getCart());


	this.addCart = function (item) {
		if (item) { 
			var cartObj = this.getCart();
			var itemFound = false;
			cartObj.cart.forEach(function (cartitem) {
				if (item._id === cartitem.item._id) {
					itemFound = true;
				}
			});
			if (!itemFound) {
				cartObj.cart.push({ item: item });
				localStorage.setItem('cart', JSON.stringify(cartObj));
			}
		}
		return cartObj;
	};
	
	this.removeCart = function(items) {
		localStorage.setItem('cart', JSON.stringify(items));
	};
	
	

});