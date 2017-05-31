angular.module('galeriaVirtualFbaul')
.controller('loginController', ['$scope','$rootScope', '$location', function($scope, $rootScope, $location){
    $scope.login = function(){
        if($scope.email == 'galerias' && $scope.password == 'galerias'){
            $location.path('/home');
        }
        else{
            $scope.invalid = true;
        }
    }
}])