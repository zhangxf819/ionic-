/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:59
*/

angular.module('guidePage.route', ['guidePage.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('guidePage', {
		url: '/guidePage',
		templateUrl: 'areas/guidePage/guidePage.html',
		controller: 'GuidePageCtrl'
	})

});
