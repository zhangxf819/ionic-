/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:39:01
*/

angular.module('tabs.route', ['tabs.controllers', 'tabs.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'areas/tabs/tabs.html',
		controller: 'TabsCtrl'
	})

});
