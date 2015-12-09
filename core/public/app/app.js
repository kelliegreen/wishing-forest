angular.module('wishingforest', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './app/home/homeTmpl.html',
			controller: 'slideCtrl'
		})
		.state('products', {
			url:'/products',
			templateUrl: './app/products/productTmpl.html',
			controller: 'productCtrl'
		})
		.state('cart', {
			url: '/cart',
			templateUrl: './app/cart/cartTmpl.html',
			controller: 'cartCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: './app/contact/contactTmpl.html'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: './app/admin/adminTmpl.html',
			controller: 'loginCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: './app/admin/signup/signupTmpl.html',
			controller: 'signupCtrl'
		})
		.state('manage', {
			url: '/manage',
			resolve: {
				user: function(authSrvc) {
					return authSrvc.getAuth();
				}
			},
			templateUrl: './app/admin/manage/manageTmpl.html',
			controller: ('manageCtrl')
		})
		.state('request' , {
			url: '/request',
			templateUrl: ('./app/request/requestTmpl.html'),
			controller: 'requestCtrl'
		});
		
		
	$urlRouterProvider.otherwise('/');
	
	
});