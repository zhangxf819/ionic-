/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:53
*/

angular.module('account.route', ['account.controllers', 'account.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('account', {
		url: '/account',        // /tab/dash $stateParams.typeNumber
	    templateUrl: 'areas/account/account.html',
	    controller: 'AccountCtrl'
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
