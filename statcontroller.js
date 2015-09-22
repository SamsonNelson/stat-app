var app = angular.module('statApp');
app.controller('statcontroller', function($scope) {
    

    $scope.countPointsTwo = function(){
        $scope.countPointsTwo = 0;
    }
    $scope.countPointsTwo();
    
    
    $scope.countOffReb = function(){
        $scope.countOffReb = 0;
    }
    $scope.countOffReb();
    
    
    $scope.countDefReb = function(){
        $scope.countDefReb = 0;
    }
    $scope.countDefReb();
    
    
    $scope.countAssists = function(){
        $scope.countAssists = 0;
    }
    $scope.countAssists();
    
    
    $scope.countSteals = function(){
        $scope.countSteals = 0;
    }
    $scope.countSteals();
    
    
    $scope.countFouls = function(){
        $scope.countFouls = 0;
    }
    $scope.countFouls();

});