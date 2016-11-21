/*
* @Author: 晓峰
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:58
*/

angular.module('guidePage.controllers', ['guidePage.services'])

.controller('GuidePageCtrl', ['$scope', 'GuidePageFt', '$state', function($scope, GuidePageFt, $state) {
	
	var mySwiper = new Swiper('.swiper-container', {
		pagination : '.swiper-pagination',
		onSlideChangeEnd: function(swiper){
			console.log(swiper);
     	 	console.log(swiper.activeIndex);
     	 	var item = $("#tip" + (swiper.activeIndex + 1));
     	 	// item.classList.remove('hidden');
     	 	// item.classList.add('guide-show');
     	 	var tips = $(".tip");
     	 	console.log(tips);
 	 		// tips[i].addClass('hidden');
 	 		tips.each(function(index, el) {
 	 			console.log(index);
 	 			console.log(el);
 	 			$(el).addClass('hidden');
 	 		});

     	 	item.removeClass("hidden").addClass('guide-show');
    	}
	});

	$scope.func_goHome = function() {
		$state.go("tab.home");
		localStorage["isNotFirst"] = true;
	}
}]);