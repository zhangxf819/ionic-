/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:57
*/

;(function() {
	'use strict';
	angular.module('goodsList.controllers', [])

	.controller('GoodsListCtrl', ['$scope', '$state', '$stateParams', '$http', '$ionicLoading', '$ionicHistory', function($scope, $state, $stateParams, $http, $ionicLoading, $ionicHistory) {	
		// var url = http://jd.com/v2/products/buy/id
		// var url = http://data/detail.json?id=123123&pagesize=10
		// Promise
		// $http.get(url).success(function(data) {
		// 	console.log(data);
		// 	$scope.obj_goodsListData = data;
		// });
		//
		//
		var page = 1;
		$http({
			method: "GET",
			url: 'data/detail.json',
			params: {id:$stateParams.typeNumber, pageSize:10, page: page}
		}).success(function(data) {
			$scope.obj_goodsListData = data;
		});

		$scope.func_refreshGoodsList = function() {
			page = 1;
			$http({
				method: "GET",
				url: 'data/detail.json',
				params: {id:$stateParams.typeNumber, pageSize:10, page:page}
			}).success(function(data) {
				$scope.obj_goodsListData = data;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};

		$scope.func_loadMoreGoodsList = function() {
			$ionicLoading.show({
		      template: '正在加载ing'
		    })
			console.log("msg");
			$http({
				method: "GET",
				url: 'data/detail.json',
				params: {id:$stateParams.typeNumber, pageSize:10, page:page+1}
			}).success(function(data) {
				setTimeout(function(){
					$ionicLoading.hide();
					for(var i = 0; i < data.length; i++) {
						$scope.obj_goodsListData.push(data[i]);	
					}
					
					$scope.$broadcast('scroll.infiniteScrollComplete');
				}, 1000);
			});
		}

		$scope.func_goBack = function() {
			$ionicHistory.goBack();
		}
	}]);
})();

