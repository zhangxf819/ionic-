/*
* @Author: 晓峰
* @Date:   2016-10-18 02:08:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:59
*/

angular.module('guidePage.directive', [])

.directive('GuidePageDit', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  return {
  	link: function(scope, ele, attr) {
  		// 1.获取当前页，并且给加样式
  		// 2.去掉其他页的样式
  		console.log(ele);
  	}
  }
});
