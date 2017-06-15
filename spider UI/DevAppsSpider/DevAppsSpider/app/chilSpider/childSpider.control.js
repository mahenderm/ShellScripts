(function(){
    function childSpiderCtrl($scope,spiderserv,$stateParams){
        console.log("data"+$stateParams.data);
        console.log("btn"+$stateParams.btns)
               var btn=[];
        $scope.selectedbtn=$stateParams.data.name;
        $scope.leftButtons=[];
        $scope.rightButton=[];
        $scope.childBtn=[];
        $scope.childButtons=[];
        spiderserv.getButtons()
        .then(function(response){
             var btn=response.data.buttons;
            $scope.visible=false;
              var btns=response.data.buttons;
            
            
            
            for(var i=0;i<btn.length;i++){
                if($stateParams.data.id==btn[i].id){
                    $scope.childbtn=btn[i].childs;
                    $scope.activeChild=btn[i].active;
                }
            }
            console.log(   $scope.childbtn);
          for(var i=0;i<btn.length;i++){
              $scope.status=false;
              $scope.activeChildStatus=false;
              
              for(var j=0;j<$scope.childbtn.length;j++){
                 if(btn[i].id==$scope.childbtn[j]){
                     $scope.status=true;
                     for(var k=0;k<$scope.activeChild.length;k++){
                         if($scope.activeChild[k]==$scope.childbtn[j]){
                            $scope.activeChildStatus=true; 
                         }
                         
                     }
                 } 
              }
          if($scope.status==false){
              btn[i].name=null;
              btn[i].class+=" "+"spider-disable";
              
          }
              if($scope.activeChildStatus==true){
                 btn[i].class+=" "+"spider-success"; 
                
              }
               else if($scope.status==true&&$scope.activeChildStatus==false){
                    btn[i].class+=" "+"spider-unsuccess"+" "+"spider-disable"; 
               }
             
          }
            for(var i=0;i<btn.length/2;i++){
                $scope.leftButtons.push(btn[i]);
            }
             for(var i=btn.length/2;i<btn.length;i++){
                $scope.rightButton.push(btn[i]);
            }
           
        })
     
        $scope.childSpider=function(data){
            $scope.selectedbtn=data.name;
            if(data.name!=null){
                  spiderserv.getButtons()
        .then(function(response){
             var btn=response.data.buttons;
            $scope.visible=false;
              var btns=response.data.buttons;
            for(var i=0;i<btn.length;i++){
                if(data.id==btn[i].id){
                    $scope.childbtn=btn[i].childs;
                    $scope.activeChild=btn[i].active;
                }
            }
            console.log(   $scope.childbtn);
          for(var i=0;i<btn.length;i++){
              $scope.status=false;
              $scope.activeChildStatus=false;
              
              for(var j=0;j<$scope.childbtn.length;j++){
                 if(btn[i].id==$scope.childbtn[j]){
                     $scope.status=true;
                     for(var k=0;k<$scope.activeChild.length;k++){
                         if($scope.activeChild[k]==$scope.childbtn[j]){
                            $scope.activeChildStatus=true; 
                         }
                         
                     }
                 } 
              }
          if($scope.status==false){
              btn[i].name=null;
              
          }
              if($scope.activeChildStatus==true){
                 btn[i].class+=" "+"spider-success"; 
              }
               else if($scope.status==true&&$scope.activeChildStatus==false){
                    btn[i].class+=" "+"spider-unsuccess"+" "+"spider-disable"; 
               }
             
          }
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
            }
         
        }
    }
    angular.module("childSpider")
    .controller("childSpiderCtrl",["$scope","spiderService","$stateParams",childSpiderCtrl])
})();