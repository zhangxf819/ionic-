/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:39:00
*/

;(function() {
	'use strict';
	angular.module('home.controllers', [])

	.controller('HomeCtrl', ['$scope', function($scope) {

		$scope.$on("$ionicView.enter", function() {
			var mySwiper = new Swiper('#headerSlider', {
				slidesPerView: 1,
		        paginationClickable: true,
		        centeredSlides: true,
		        autoplay: 2000,
		        autoplayDisableOnInteraction: false,
		        loop: true,
		        // 如果需要分页器
		        pagination: '.swiper-pagination',
		        // 改变自动更新
		        observer:true,
		        observeParents:true
			});

			var barSwiper = new Swiper("#toutiaoSlider", {
				 autoplay: 2000,
				 loop: true,
				 direction:'vertical'
			});

			setHeaderBarOpacity();
			countdown();
		});
		
		// 设置头部搜索的透明度
		// 1. 判断滚动的高度，
		// 2. 如果大于50px, 透明度开始变化，0-0.8
		// 3. 如果大于300px, 透明度不再变化
		function setHeaderBarOpacity() {
			var headerBar = document.getElementById("headerBar-bg");
			var ct = document.getElementById("home-content");
			ct.onscroll = function() {
				if(this.scrollTop > 50 && this.scrollTop <= 300) {
					headerBar.style.opacity = this.scrollTop/300 * 0.85;
				}else if(this.scrollTop <= 50) {
					headerBar.style.opacity = 0;
				}
			}
		}



		$scope.headerSlideData = [
			{
				alt: '广告1',
				src: 'img/home/home-headerSlide-1.jpg'
			},
			{
				alt: '广告2',
				src: 'img/home/home-headerSlide-2.jpg'
			},
			{
				alt: '广告3',
				src: 'img/home/home-headerSlide-3.jpg'
			},
			{
				alt: '广告4',
				src: 'img/home/home-headerSlide-4.jpg'
			},
			{
				alt: '广告5',
				src: 'img/home/home-headerSlide-5.jpg'
			}
		]

		// 导航列表
		$scope.navList = [
			{
				uiHref: 'category',
				imgSrc: 'img/home/nav0.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav1.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav2.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav3.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav4.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav5.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav6.png',
				alt: '分类查询',
				title: '分类查询'
			},
			{
				uiHref: 'tab.category',
				imgSrc: 'img/home/nav6.png',
				alt: '分类查询',
				title: '分类查询'
			}
		]

		function countdown(){
			if(window.timer){
				clearInterval(window.timer);
			}
			// 倒计时
			var timeObj = {
				h:1,
				m:37,
				s:13
			};

			var timeStr = toDouble(timeObj.h) + toDouble(timeObj.m) + toDouble(timeObj.s);
			var timeList = document.getElementsByClassName('time-text');
			for(var i = 0; i < timeList.length; i++){
				timeList[i].innerHTML = timeStr[i];
			}

			function toDouble(num){
				if(num < 10){
				  return '0' + num;
				}else{
				  return '' + num;
				}
			}

			window.timer = setInterval(function(){
				timeObj.s--;
				if(timeObj.s == -1){
				  timeObj.m--;
				  timeObj.s = 59;
				}
				if(timeObj.m == -1){
				  timeObj.h--;
				  timeObj.m = 59;
				}
				if(timeObj.h == -1){
				  timeObj.h = 0;
				  timeObj.m = 0;
				  timeObj.s = 0;
				  clearInterval($window.timer);
				}
				timeStr = toDouble(timeObj.h) + toDouble(timeObj.m) + toDouble(timeObj.s);
				for(var i = 0; i < timeList.length; i++){
				  timeList[i].innerHTML = timeStr[i];
				}
	      	}, 1000);
	    }
	}]);
})();

