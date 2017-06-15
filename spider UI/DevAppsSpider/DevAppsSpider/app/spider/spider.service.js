(function(){
    function spiderService($q,$http){
        var em=this;
//        em.getChildBtn=function(btnName){
//            var def=$q.defer();
//            $http.get()
//            return def.promise;
//        }
        em.getButtons=function(){
             var def=$q.defer();
            $http.get("api/legs.json")
            .then(function(respose){
                def.resolve(respose);
                console.log(respose);
            })
            return def.promise;
        }
    }
    angular.module("spider")
    .service("spiderService",["$q","$http",spiderService])
})();