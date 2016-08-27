angular.module('myApp.controller',['myApp.services'])
    .controller('HomeCtrl',function ($scope,$state,$http,HomeFactory) {
        // console.log('HomeCtrl');

        $scope.hasLoading=true;

        $scope.$on('HomeFactoryUpdate',function(event,data) {   //接收数据
            $scope.items = data;
            $scope.hasLoading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');   //绑定数据 再广播
        })
        // 加载更多
        $scope.loadMore = function () {
            HomeFactory.loadMore();
        }

        $scope.hasData = function () {
            return HomeFactory.hasData();
        }
        
        $scope.leftShow=function () {

        }


       // $http({
       //     method:'Jsonp',
       //     url:'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2&callback=JSON_CALLBACK'
       // }).success(function (data) {
       //     // console.log(data)
       //     $scope.items=data.result;
       //     $scope.hasLoading=false;
       //      // console.log( $scope.items);
       // }).error(function (error) {
       //     console.log(error);
       // })

    })

    
    // ··············新闻详情控制器················
    
    .controller('HomeArticleCtrl',['$scope','$state','$stateParams','$http','$ionicActionSheet',function ($scope,$state,$stateParams,$http,$ionicActionSheet) {
         // console.log($stateParams);

          $scope.hasLoading=true;

          $scope.aid = $stateParams.aid;
           // console.log($scope.aid);

         var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+$scope.aid+'&callback=JSON_CALLBACK';

        $http({
           method:'Jsonp',
            url:url
        }).success(function (data) {
            // console.log(data.result[0]);
            //console.log($scope.items);
            $scope.item=data.result[0];
            $scope.hasLoading=false;
        }).error(function(error){
            console.log(error);
        });
// 分享到显示分享框
        $scope.show = function() {

            // 显示操作表
            $ionicActionSheet.show({
                buttons: [
                    { text: '分享到朋友圈' },
                    { text: '发送给朋友' },
                    { text: '收藏' },
                ],
                // destructiveText: 'Delete',
                // titleText: 'Modify your album',
                cancelText: '取消',
                buttonClicked: function(index) {
                        return true;
                }
            });

        };
    }])
    
    // ·········论坛控制器·············

    .controller('BbsCtrl',function ($scope,$state,$http,BbsFactory) {
        // console.log('BbsCtrl');
        $scope.hasLoading=true;

        $scope.$on('BbsFactoryUpdate',function(event,data) {   //接收数据
            $scope.items = data;
            $scope.hasLoading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');   //绑定数据 再广播
        })
        // 加载更多
        $scope.loadMore = function () {
            BbsFactory.loadMore();
        }

        $scope.hasData = function () {
            return BbsFactory.hasData();
        }

        // $http({
        //     method:'Jsonp',
        //     url:'http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=1&callback=JSON_CALLBACK'
        // }).success(function (data) {
        //      // console.log(data)
        //      $scope.items=data.result;
        //      $scope.hasLoading=false;
        //       // console.log( $scope.items);
        // }).error(function (error) {
        //      // console.log(error);
        // })
    })



        // ············论坛详情控制器·············

    .controller('BbsArticleCtrl',['$scope','$state','$stateParams','$http',function ($scope,$state,$stateParams,$http) {
        // console.log($stateParams);
        $scope.hasLoading = true;
        $scope.tid = $stateParams.tid;

        // console.log($scope.tid);

        var url = "http://www.phonegap100.com/appapi.php?a=getThreadContent&tid=" + $scope.tid + '&callback=JSON_CALLBACK';
        $http({
            method: "Jsonp",
            url: url
        }).success(function (data) {
            console.log(data.result[0]);
            //$scope.item = data.result;
            //console.log($scope.items);

            $scope.item = data.result[0];
            $scope.hasLoading = false;

        }).error(function (error) {
            console.log(error);
        })
    }])


    .controller('AccountCtrl',function () {
        console.log('AccountCtrl');


    })