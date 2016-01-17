angular.module('wishingforest').service('productSrvc', function ($http) {
var itemTotal = 0;
	this.getItems = function () {
		return $http.get('http://localhost:9000/api/item').then(function (response) {
			return response.data;
		});
	};


	this.getCart = function () {
		if (localStorage.getItem('cart')) {
			var cartObject = JSON.parse(localStorage.getItem('cart'));
			itemTotal = cartObject.cart.length;
			return cartObject;
		}
		return { cart: [] };
	};

	// console.log(this.getCart());


	this.addCart = function (item) {
		// console.log(item);
		if (item) { 
			var cartObj = this.getCart();
			var itemFound = false;
			cartObj.cart.forEach(function (cartitem) {
                // console.log(cartitem);
				if (item === cartitem.item) {
					itemFound = true;
				}
			});
			if (!itemFound) {
				cartObj.cart.push({ item: item });
				localStorage.setItem('cart', JSON.stringify(cartObj));
			}
			itemTotal = cartObj.cart.length;
			// console.log(cartObj);
		}
		return cartObj;
	};
	
	this.total = function () {
		return itemTotal;
	};
	
	this.removeCart = function(items) {
		localStorage.setItem('cart', JSON.stringify(items));
	};
	
    
    
	this.getItemsById = function (item) {
		return $http.get('http://localhost:9000/api/item/' + item).then(function (response) {
			return response.data;
		});
	};

});