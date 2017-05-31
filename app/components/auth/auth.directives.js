angular.module('galeriaVirtualFbaul').directive('loginForm', function() {
  return {
    templateUrl: 'app/components/auth/login/login.template.html',
    controller: 'loginController'
  };
}).directive('registerForm', function() {
  return {
    templateUrl: 'app/components/auth/register/register.template.html',
    controller: 'registerController'
  };
});