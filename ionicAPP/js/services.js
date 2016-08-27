/**
 * Created by Administrator on 2016/8/3 0003.
 */
angular.module("myApp.services",[])
    
    .factory('HomeFactory',function ($http,$rootScope,HttpJsonp) {
        var page = 1;
        
        var results = '';
        
        var hasData = true;
        
        return{
            loadMore:function () {
                var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+page;

                HttpJsonp.getData(url).success(function (data) {

                    if(data.result<20){
                        hasData = false;
                    }
                    if(results!=''){
                        results = results.concat(data.result);
                    }else{
                        results = data.result;
                    }
                    $rootScope.$broadcast('HomeFactoryUpdate',results);     /*广播数据*/
                    ++page;
                })
            },
            hasData:function(){
                return hasData;
            }
        }
    })
    
    .factory('BbsFactory',function ($http,$rootScope,HttpJsonp) {
        var page = 1;

        var results = '';

        var hasData = true;

        return{
            loadMore:function () {
                var url="http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page="+page;

                HttpJsonp.getData(url).success(function (data) {

                    if(data.result<20){
                        hasData = false;
                    }
                    if(results!=''){
                        results = results.concat(data.result);
                    }else{
                        results = data.result;
                    }
                    $rootScope.$broadcast('BbsFactoryUpdate',results);     /*广播数据*/
                    ++page;
                })
            },
            hasData:function(){
                return hasData;
            }
        }
    })

    .factory('HttpJsonp',function ($http) {
        return{
            getData:function (url) {
                return $http({
                    method:'Jsonp',
                    url:url+'&callback=JSON_CALLBACK'
                }).success(function (data) {

                }).error(function (error) {

                })
            }
        }
    })


