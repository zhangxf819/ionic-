/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:53
*/

;(function() {
	'use strict';
	angular.module('account.controllers', [])

	.controller('AccountCtrl', ['$scope', '$ionicActionSheet', '$ionicPopup', '$cordovaCamera', function($scope, $ionicActionSheet, $ionicPopup, $cordovaCamera) {
	  	if(localStorage["touxiang"]) {
	  		var image = document.getElementById('touxiang');		    	
			image.src = localStorage["touxiang"];
	  	}else {
	  		// 应该请求远程服务器，下载头像
	  	}

		 $scope.func_showAction = function() {
		 	var hideSheet = $ionicActionSheet.show({
				buttons: [
					{ text: '照相机' },
					{ text: '本地图库' }
				],
				titleText: '请选择头像',
				cancelText: '取消',
				cancel: function() {
				  // add cancel code..
				},
				buttonClicked: function(index) {
					if(index == 0) {
						var options = {
					      quality: 50, // 像素的质量
					      destinationType: Camera.DestinationType.FILE_URI, //你获取到的是一个file_url,  
					      sourceType: Camera.PictureSourceType.CAMERA,//是从相机还是从图库
					      allowEdit: true, // 允许编辑
					      encodingType: Camera.EncodingType.JPEG, //jpeg
					      targetWidth: 100, // 100
					      targetHeight: 100,
					      popoverOptions: CameraPopoverOptions, //
					      saveToPhotoAlbum: false, //保存到图库
						  correctOrientation:true //
					    };
						$cordovaCamera.getPicture(options).then(function(imageURL) {
					    	var image = document.getElementById('touxiang');
					    	// image.src = "data:image/jpeg;base64," + imageData;
					    	image.src = imageURL;
					    	localStorage["touxiang"] = imageURL;
					    	hideSheet();
					    }, function(err) {
					      // error
					    });
					}else {
						var options = {
					      	quality: 50,
					        destinationType: Camera.DestinationType.FILE_URI,
					        // In this app, dynamically set the picture source, Camera or photo gallery
					        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
					        encodingType: Camera.EncodingType.JPEG,
					        mediaType: Camera.MediaType.PICTURE,
					        allowEdit: true,
					        correctOrientation: true  //Corrects Android orientation quirks
					    };
						$cordovaCamera.getPicture(options).then(function(imageURL) {
					    	var image = document.getElementById('touxiang');
					    	// image.src = "data:image/jpeg;base64," + imageData;
					    	image.src = imageURL;
					    	localStorage["touxiang"] = imageURL;
					    	hideSheet();
					    }, function(err) {
					      // error
					    });
					}
				}
			});
		 }

		 // 将图片转换成二进制流数据，并且提交到服务器上。
		 // var upImage = function (imageUrl) {

   //          var url = "http://192.168.1.248/api/UserInfo/PostUserHead";
   //          var options = {};
   //          $cordovaFileTransfer.upload(url, imageUrl, options)
   //            .then(function (result) {
   //                alert(JSON.stringify(result.response));
   //                alert("success");
   //                alert(result.message);
   //            }, function (err) {
   //                alert(JSON.stringify(err));
   //                alert(err.message);
   //                alert("fail");
   //            }, function (progress) {
   //                // constant progress updates
   //            });
   //      }
   //      
   		$scope.func_callPhone = function(number) {
   			window.location.href = "tel:" + number;
   		}

   		
   		$scope.func_exitApp=function(){
			var confirmPopup = $ionicPopup.confirm({
				title: '提示',
				template:"确认退出？"
			});
			confirmPopup.then(function (res) {
				if(res){
			  		// 退出app
			  		ionic.Platform.exitApp();
				}
			});

	    }
	}]);
})();

