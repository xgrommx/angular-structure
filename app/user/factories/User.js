(function(ng) {
    var app = ng.module('app.user.factories.User', []);

    var User = function() {
        var users = [
            {id: 1, name: "Alex", age: 20},
            {id: 2, name: "Marina", age: 24},
            {id: 3, name: "Denis", age: 26},
            {id: 4, name: "Olya", age: 18}
        ];

        return {
            users: users
        }
    };

    app.factory('User', [User]);

    return app;

})(angular);