(function(){
  
    
    function spiderCtrl($scope,$rootScope,spiderService,$state){
      
        $scope.leftButtons=[];
        $scope.rightButton=[];
        $scope.childBtn=[];
        $scope.childButtons=[];
        spiderService.getButtons()
        
        
        .then(function(response){
             var btn=response.data.buttons;
            $scope.visible=false;
              var btns=response.data.buttons;
            for(var i=0;i<btn.length/2;i++){
                $scope.leftButtons.push(btn[i]);
            }
             for(var i=btn.length/2;i<btn.length;i++){
                $scope.rightButton.push(btn[i]);
            }
           
        })
        .catch(function(err){
            $scope.buttons=err;
        })
        $scope.childSpider=function(button){
            console.log(button);
          $state.go("childSpider",{data:button}); 
        }
    }
     angular.module("spider")
    .controller("spiderCtrl",["$scope","$rootScope","spiderService","$state",spiderCtrl]);
})();