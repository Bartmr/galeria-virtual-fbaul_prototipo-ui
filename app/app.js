angular.module('galeriaVirtualFbaul', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/components/auth/auth.template.html"
            })
            .when("/home", {
                templateUrl: "app/components/home/home.template.html",
                controller: 'homeController'
            })
            .when("/user/collections", {
                templateUrl: "app/components/user/collections/user.collections.template.html",
                controller: 'collectionsController'
            })
            .when("/user/profile", {
                templateUrl: "app/components/user/profile/profile.template.html",
            })
            .when("/user/project", {
                templateUrl: "app/components/single-project-page/single-project-page.template.html",
            })
            .otherwise({
                templateUrl: "app/components/404/404.template.html"
            })
    });