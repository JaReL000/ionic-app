/**
 * Created by Administrator on 2016/7/29 0029.
 */
var app = angular.module('myApp',['ionic','myApp.controller']);
    app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

        $ionicConfigProvider.platform.ios.views.transition('ios');
        
        $stateProvider
            .state("tab",{
                url:'/tab',
                abstract:true,
                templateUrl:'templates/tabs.html'
            })

            .state("tab.home",{
                url:'/home',
                views:{
                    'tab-home':{
                        templateUrl:'templates/home.html',
                        controller:'HomeCtrl'
                    }
                }
            })

            .state("tab.home_article",{
                url:'/home_article/:aid',
                views:{
                    'tab-home':{
                        templateUrl:'templates/home-article.html',
                        controller:'HomeArticleCtrl'
                    }
                }
            })

            .state("tab.bbs",{
                url:'/bbs',
                views:{
                    'tab-bbs':{
                        templateUrl:'templates/bbs.html',
                        controller:'BbsCtrl'
                    }
                }
            })

            .state("tab.bbs_article",{
                url:'/bbs_article/:tid',
                views:{
                    'tab-bbs':{
                        templateUrl:'templates/bbs-article.html',
                        controller:'BbsArticleCtrl'
                    }
                }
            })
            
            .state("tab.account",{
                url:'/account',
                views:{
                    'tab-account':{
                        templateUrl:'templates/account.html',
                        controller:'AccountCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/tab/home');
    });