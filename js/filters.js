/**
 * Created with IntelliJ IDEA.
 * User: jan
 * Date: 14.01.13
 * To change this template use File | Settings | File Templates.
 */


angular.module('pixmaFilters', []).filter('fromnow', function () {
    return function (input) {
        return moment.unix(input).fromNow();
    };
});