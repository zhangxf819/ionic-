/*
* @Author: 晓峰
* @Date:   2016-10-19 09:51:36
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:39:02
*/

// 用来适配iOS和Android的样式
angular.module('config', [])
.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	$ionicConfigProvider.platform.ios.tabs.style('standard'); 
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

    $ionicConfigProvider.platform.ios.views.transition('ios'); 
    $ionicConfigProvider.platform.android.views.transition('android');
}]);