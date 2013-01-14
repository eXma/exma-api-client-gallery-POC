/**
 * Created with IntelliJ IDEA.
 * User: jan
 * Date: 13.01.13
 * To change this template use File | Settings | File Templates.
 */

var SERVICE_BASE = "http://localhost\\:5000"

var serviceModule = angular.module('pixmaServices', ['ngResource']);
serviceModule.factory('Album', function ($resource) {
    return $resource(SERVICE_BASE + '/albums/:albumId', {}, {
        query: {method: 'GET', params: {limit: 80}, isArray: true}
    });
});
serviceModule.factory('Picture', function ($resource) {
    return $resource(SERVICE_BASE + '/albums/:albumId/pictures', {}, {
        //query: {method:'GET', params:{albumId:albumId}, isArray:true}
    });
});
serviceModule.factory('Login', function ($resource) {
    return $resource(SERVICE_BASE + '/login', {}, {
        //query: {method:'GET', params:{albumId:albumId}, isArray:true}
    });
});
serviceModule.factory('Logout', function ($resource) {
    return $resource(SERVICE_BASE + '/logout', {}, {
        //query: {method:'GET', params:{albumId:albumId}, isArray:true}
    });
});
