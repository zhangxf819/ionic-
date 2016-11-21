/*
* @Author: 晓峰
* @Date:   2016-10-19 09:48:37
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:39:02
*/

// 这个文件用来定义一些全局变量，比如http请求服务器的地址，或者app的版本号，开发者的账号，密码。
angular.module('global', [])
.constant('GlobalVariable', {
	"SERVERURL": "127.0.0.1",
	"VERSION": "0.1"
});
