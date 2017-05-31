angular.module('galeriaVirtualFbaul')
    .controller('collectionsController', ['$scope', function ($scope) {
        $scope.getNumberOfJumbotron = function () {
            return new Array(5);
        }

        $scope.getNumberOfFeedPictures = function () {
            return new Array(30);
        }

    }])