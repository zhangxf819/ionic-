/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:57
*/

angular.module('details.route', ['details.controllers', 'details.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('details', {
		url: '/details/:productId',        // /tab/dash $stateParams.typeNumber
	    templateUrl: 'areas/details/details.html',
	    controller: 'DetailsCtrl'
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
