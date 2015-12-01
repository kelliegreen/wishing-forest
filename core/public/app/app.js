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
		.state('contact', {
			url: '/contact',
			templateUrl: './app/contact/contactTmpl.html'
		});
		
	$urlRouterProvider.otherwise('/');
	
});