/*
* @Author: 晓峰
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:39:02
*/

angular.module('route', ['guidePage.route', 'tabs.route', 'home.route', 'category.route', 'goodsList.route', 'details.route', 'cart.route', 'account.route'])
.config(function($stateProvider, $urlRouterProvider) {

  	// if none of the above states are matched, use this as the fallback
  	// 第一次的时候需要让引导页出现，如果不是第一次的时候，就不能让引导页有
  	if(localStorage["isNotFirst"])
	{
	  $urlRouterProvider.otherwise('/tab/home');
	}
	else {
	  $urlRouterProvider.otherwise('/guidePage');
	}

});
