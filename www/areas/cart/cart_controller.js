/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:54
*/

;(function() {
	'use strict';
	angular.module('cart.controllers', [])

	.controller('CartCtrl', ['$scope', '$q', 'CartFt', '$ionicHistory', function($scope, $q, CartFt, $ionicHistory) {
		var objData = {
			data: '',
			total: 0,
			subtraction: function(item) {
				console.log(item);
				// 判断当前的数量是否大于1
				if(item.number > 1) {
					item.number--;
					// 1.更新数据库中的数据
					console.log(item);
					CartFt.updateData(angular.copy(item)).then(function() {
						// 2.更新页面中的价格
						getAllData();
					});
					
				}
			},
			addition: function(item) {
				item.number++;
				CartFt.updateData(angular.copy(item)).then(function() {
					getAllData();
				});
			},
			goBack: function() {
				$ionicHistory.goBack();
			}
		};

		// 获取所有的购物车数据
		function getAllData() {
			var q = $q.defer();
			CartFt.getAllData().then(function(data) {
				console.log(data);
				// 统计购物车所有物品的总额
				var total = 0;
				for(var i = 0; i < data.length; i++) {
					total += parseFloat(data[i].price) * parseInt(data[i].number);
				}

				// 赋值操作
				objData.data = data;
				objData.total = total.toFixed(2);
				q.resolve("执行成功");
			}, function() {

			})

			return q.promise;
		}



		getAllData().then(function() {
			$scope.obj_cartDbData = objData;
		})

	}]);
})();

