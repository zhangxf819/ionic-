/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:56
*/

angular.module('category.route', ['category.controllers', 'category.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('category', {
		url: '/category',        // /tab/dash
	    templateUrl: 'areas/category/category.html',
	    controller: 'CategoryCtrl'
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
