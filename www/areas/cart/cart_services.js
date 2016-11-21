/*
* @Author: 晓峰
* @Date:   2016-10-18 02:08:59
* @Last Modified by:   小张
* @Last Modified time: 2016-11-14 18:38:55
*/

angular.module('cart.services', [])

.factory('CartFt', ['$q', 'IndexdbFt', function($q, IndexdbFt) {
  return {
      getAllData: function () {
        var deferred = $q.defer();
        IndexdbFt.getAll("order", function(data){
          deferred.resolve(data);
        }, function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      get: function (id) {
        var deferred = $q.defer();
        IndexdbFt.get(id, "order", function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      updateData: function (data) {
        var deferred = $q.defer();
        IndexdbFt.update("order", data, function(){
          deferred.resolve();
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      delete: function (id) {
        var deferred = $q.defer();
        IndexdbFt.delete(id,"order", function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      }
    }
}]);
