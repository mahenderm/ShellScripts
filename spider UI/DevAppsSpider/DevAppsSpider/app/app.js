(function(){
    angular.module("root",["spider","childSpider","ui.router"]);
    angular.module("root")
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        var spider={
            url:"/spider",
            templateUrl:"app/spider/spider.tpl.html",
            controller:"spiderCtrl"}
        var childSpider={
            url:"/childSpider",
            templateUrl:"app/chilSpider/childSpider.tpl.html",
            controller:"childSpiderCtrl",
               params: {
            data: null
        },

        }
        $urlRouterProvider.otherwise("/spider");
        $stateProvider.state("spider",spider);
        $stateProvider.state("childSpider",childSpider);
    }])
})();