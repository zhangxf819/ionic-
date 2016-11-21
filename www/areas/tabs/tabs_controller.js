/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:39:01
*/

;(function() {
	'use strict';
	angular.module('tabs.controllers', [])

	.controller('TabsCtrl', ['$scope', 'IndexdbFt', function($scope, IndexdbFt) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		$scope.number = 0;
		$scope.$on('$ionicView.enter', function(e) {
			IndexdbFt.getAll("order", function(data) {
				$scope.number = 0;
				for(var i = 0; i < data.length; i++) {
					$scope.number += parseInt(data[i].number);
					$scope.$apply();
				}
			})
		});
		
	}]);
})();

