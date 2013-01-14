/**
 * Created with IntelliJ IDEA.
 * User: jan
 * Date: 13.01.13
 * To change this template use File | Settings | File Templates.
 */

var App = angular.module('pixma', ['http-auth-interceptor', 'pixmaServices', 'pixmaFilters', 'ngSanitize', 'ngCookies'], function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    $httpProvider.defaults.transformRequest = [function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? jQuery.param(data) : data;
    }];
    $httpProvider.defaults.withCredentials = true;
});
App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/albums', {templateUrl: 'tpl/album-list.html', controller: AlbumListCtrl}).
        when('/albums/:albumId', {templateUrl: 'tpl/album-detail.html', controller: AlbumDetailCtrl}).
        otherwise({redirectTo: '/albums'});
}]);
App.directive('PixmaAuth', function () {
    return {
        restrict: 'C',
        link: function (scope, elem, attrs) {



            //once Angular is started, remove class:

            elem.removeClass('waiting-for-angular');

            var login = elem.find('#loginDialog');

            login.modal({show: false});

            scope.$on('event:auth-loginRequired', function () {
                login.modal('show');
            });
            scope.$on('event:auth-loginConfirmed', function () {
                login.modal('hide')
            });
        }
    }
});


/*App.config(['$locationProvider', function($location) {
 $location.html5Mode(true); //now there won't be a hashbang within URLs for browers that support HTML5 history
 }]);*/