(function(ng) {
    var app = ng.module('app.user.controllers.UserEditCtrl', []);

    var UserEditCtrl = function($scope, $log, user) {
        var localScope = {
            user: user,
            tempUser: ng.copy(user)
        };

        this.save = function(user) {
            if(!ng.equals(localScope.tempUser, localScope.user)) {
                ng.extend(localScope.user, localScope.tempUser);

                $log.info('Original user %O', localScope.user);
                $log.info('User with %s name has been saved', user.name);
            } else {
                $log.warn('User don\'t have a some chage');
            }
        };

        ng.extend($scope, localScope);
    };

    app.controller('UserEditCtrl', ['$scope', '$log', 'user', UserEditCtrl]);

    return app;

})(angular);