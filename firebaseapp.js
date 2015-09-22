var app = angular.module('myapp', ['firebase'])

.controller("myCtrl", function($scope, $firebaseArray){
    
          var URL = 'https://crackling-inferno-3769.firebaseio.com/';
    
          $scope.items = $firebaseArray(new Firebase(URL +'/items'));
    
                $scope.addItem = function(post
                
    
    });




angular.module('myApp').controller('adminCtrl', function($scope, adminService, $firebaseArray){
    // var ref = new Firebase('https://chrisblashillphoto.firebaseio.com/');

    var url = 'https://chrisblashillphoto.firebaseio.com/';

    $scope.items = $firebaseArray(new Firebase(url + '/items'));

    // $scope.addPost = adminService.addpost;
    


     $scope.addPost = function(postDate, postPost, postTitle){
         $scope.items.$add({date:postDate, post:postPost,title:postTitle});
    
     }
    
    // var data = $firebaseObject(ref);
    // data.$bindTo($scope, 'title')
    // $scope.title = {
    //     title: 'this is my title',

    // }

    // $scope.test = "a test";

})