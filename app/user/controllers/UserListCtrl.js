(function(ng) {
    var app = ng.module('app.user.controllers.UserListCtrl', []);

    var UserListCtrl = function($scope, users) {
        var localScope = {
            users: users
        };

        ng.extend($scope, localScope);
    };

    app.controller('UserListCtrl', ['$scope', 'users', UserListCtrl]);

    return app;

})(angular);