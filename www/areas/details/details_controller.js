/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:56
*/

;(function() {
	'use strict';
	angular.module('details.controllers', [])

	.controller('DetailsCtrl', ['$scope', '$stateParams', '$http', 'IndexdbFt', '$ionicHistory', function($scope, $stateParams, $http, IndexdbFt, $ionicHistory) {	
		// $scope.$on("$ionicView.beforeEnter", function () {
		// 	// 请求本地数据
		// 	IndexdbFt.getAll("order", function(data) {
		// 		for(var i = 0; i < data.length; i++) {
		// 			$scope.cartNumber += parseInt(data[i].number);
		// 		}
		// 	});
		// });
		$scope.$on('$ionicView.beforeEnter', function() {
			IndexdbFt.getAll("order", function(data) {
				for(var i = 0; i < data.length; i++) {
					$scope.cartNumber += parseInt(data[i].number);
				}
			});
		})

		// 视图加载完成时，执行的回调函数
		$scope.$on("$ionicView.enter", function () {
			var mySwiper = new Swiper('.swiper-container', {
		        slidesPerView: 1,
		        paginationClickable: true,
		        centeredSlides: true,
		        autoplay: 5000,
		        autoplayDisableOnInteraction: false,
		        loop: true,
		        // 如果需要分页器
		        // 改变自动更新
		        observer:true,
		        observeParents:true,
		        // 1.不是angular中的异步函数或者回调函数里面，
		        // 2.对$scope上面的数据进行了修改，就需要手动的将数据实时更新到view中。
		        // 在这情况下就需要使用$scope.$apply() 或者$scope.$digest()
		        onSlideChangeEnd: function(swiper) {
		        	var index = swiper.activeIndex%$scope.productDetails.imgSrcs.length;
		        	if(index) {
		        		$scope.currentIndex = index;
		        	}else {
		        		$scope.currentIndex = swiper.activeIndex;
		        	}
		        	// $scope.$apply();
		        	$scope.$digest();
		        }
			});
		});

		// 1.初始化所有数据
		function getServiceData() {
			$http.get("data/details.json").success(function(data) {
				// console.log(data);
				$scope.productDetails = data;
				$scope.currentIndex = 0;

				
				$scope.title = data.brand + " " + data.type + data.labels.join(" ");
				$scope.postData.color = data.colors[0].name;
				$scope.postData.size = data.measure[1];
				$scope.postData.price = data.price;
			});
		}

		function initDB() {
			IndexdbFt.open(function(e) {
				// 创建一个表
				
			}, function(error){

			});
		}

		function getInitData() {
			// 商品的描述
			$scope.title = null;
			// 来让样式发生变化
			$scope.checked = false;

			// 保存选择数据
			$scope.postData = {
				color:'',
				size: '',
				number: 1,
				price: 0
			};

			// 购物车的数量
			$scope.cartNumber = 0;
			// 购物列表
			$scope.postDataList = [];

			// 请求后台
			getServiceData();

			initDB();
		}

		getInitData();


		var subduction = function() {
			if($scope.postData.number > 1) {
				$scope.postData.number--;
			}
		}

		var addition = function() {
			$scope.postData.number++;
		}

		var func_addToCart_bak = function(data) {
			// 先做判断
			// $scope.postData [$scope.postData, $scope.postData]
			var newOject = angular.copy(data);
			newOject.productId = $stateParams.productId + "-" + newOject.color + "-" +newOject.size;

			// 在插入之前需要判断productId是否一致,如果一致只会更新，如果不一致，直接插入
			var flag = false;
			var flagIndex = 0;
			for(var i = 0; i < $scope.postDataList.length; i++) {
				if($scope.postDataList[i].productId == newOject.productId) {
					flag = true;
					flagIndex = i;
					break;
				}
			}

			if(flag == true) {
				$scope.postDataList[flagIndex].number = parseInt($scope.postDataList[flagIndex].number) + parseInt(newOject.number);
			}else {
				$scope.postDataList.push(newOject);
				console.log(newOject);
			}

			//循环列表，得到每个订单的number，最终得到所有的购物的数量
			var allNumber = 0;
			for(var i = 0; i < $scope.postDataList.length; i++) {
				allNumber += parseInt($scope.postDataList[i].number);
			}

			console.log($scope.postDataList);
			$scope.cartNumber = allNumber;
		}
		
		var func_addToCart = function(data) {
			// 先做判断
			// $scope.postData [$scope.postData, $scope.postData]
			var newOject = angular.copy(data);
			newOject.productId = $stateParams.productId + "-" + newOject.color + "-" +newOject.size;

			// newObject 这个对象需要保存到本地数据库
			IndexdbFt.get(newOject.productId, "order", function(data) {
				if(data && data !== null) {
					// 从数据库中得到了数据，不需要重新插入了
					newOject.number += parseInt(data.number);
					IndexdbFt.update("order", newOject, function() {
						// 更新成功
						$scope.cartNumber += parseInt(newOject.number) - parseInt(data.number);
						$scope.$digest();
					})
				}else {
					IndexdbFt.add("order", newOject, function(data) {
						$scope.cartNumber += newOject.number;
						$scope.$digest();
					});
				}
			});
			
		}

		// var func_addToCart = function(data) {
		// 	// 先做判断
		// 	// $scope.postData [$scope.postData, $scope.postData]
		// 	var newOject = angular.copy(data);
		// 	newOject.productId = $stateParams.productId + "-" + newOject.color + "-" +newOject.size;

		// 	// 1.先判断该productid是否在数据库中
		// 	IndexdbFt.get(newOject.productId, "order", function(data) {
		// 		if(data == null || data == undefined) {
		// 			IndexdbFt.add('order', newOject, function() {
		// 				$scope.cartNumber = parseInt($scope.cartNumber) + parseInt(newOject.number);
		// 				$scope.$digest();
		// 			}, null);
		// 		}else {
		// 			newOject.number = parseInt(newOject.number) + parseInt(data.number);
		// 			IndexdbFt.update("order", newOject, function() {
		// 				$scope.cartNumber += parseInt(newOject.number) - parseInt(data.number);
		// 				$scope.$digest();
		// 			})
		// 		}
		// 	})
		// }

		var obj = {
			func_addToCart: func_addToCart,
			subduction:subduction,
			addition:addition
		}

		$scope.viewObj = obj;

		$scope.func_goBack = function() {
			$ionicHistory.goBack();
		}

	}]);
})();

