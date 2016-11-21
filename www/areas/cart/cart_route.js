/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:54
*/

angular.module('cart.route', ['cart.controllers', 'cart.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('cart', {
		url: '/cart',        // /tab/dash $stateParams.typeNumber
	    templateUrl: 'areas/cart/cart.html',
	    controller: 'CartCtrl'
	})

	// .state('category.products', {
	// 	url: '/category/:CategoryId',
	// 	views: {
	// 		'category.products': {
	// 			templateUrl: 'areas'
	// 		}
	// 	}
	// })

});
