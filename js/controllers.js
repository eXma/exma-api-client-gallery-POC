/**
 * Created with IntelliJ IDEA.
 * User: jan
 * Date: 13.01.13
 * To change this template use File | Settings | File Templates.
 */


function AlbumListCtrl($scope, Album) {
    $scope.albums = Album.query();
}

function AlbumDetailCtrl($scope, $routeParams, Album, Picture) {
    $scope.album = Album.get({albumId: $routeParams.albumId}, function (album) {
        $scope.pictures = Picture.query({albumId: album.id})
    });
}

function LoginCtrl($scope, $http, authService, Login) {
    $scope.user = {};

    $scope.login = function() {
        Login.save({login: $scope.user.login, password: $scope.user.password}, function (d) {
            authService.loginConfirmed($scope.user.login);
        },
        function(d) {
            $scope.authError = "Cannot authenticate!";
            if (undefined != d.data) {
                if (undefined != d.data.message) {
                    $scope.authError = d.data.message;
                }
            }
        });
        $scope.user = {};
    };
    $scope.clearForm = function() {
        $scope.user = {};
    }
}

function UserCtrl($scope, $rootScope, $location, Logout, Login) {
    $scope.logout = function() {
        Logout.query(function() {
            $location.path( "/" );
        });
    };

    $scope.isAuthenticated = function() {
        return $rootScope.loggedIn;
    };

    $scope.userInfo = function() {
        var user = $rootScope.user;
        if ($rootScope.loggedIn && undefined == user) {
            Login.get(function( d ) {
                $rootScope.user = d.login;
            })
        }
        return $rootScope.user;
    }

}