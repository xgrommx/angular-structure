(function(ng) {
    var app = ng.module('app', ['ui.router', 'app.user']);

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/'
        });

        $stateProvider.state('user', {
            url: '/user',
            views: {
                "userView": {
                    templateUrl: 'app/user/partials/user.html',
                    resolve: {
                        users: ['User', function(User) {
                            return User.users;
                        }]
                    },
                    controller: 'UserListCtrl as list'
                }
            }
        }).state('user.edit', {
            url: '/edit/{id}',
            views: {
                "userEditView": {
                    templateUrl: 'app/user/partials/user.edit.html',
                    resolve: {
                        user: ['User', '$stateParams', function(User, $stateParams) {
                            var id = $stateParams.id;

                            return (User.users.filter(function(user) {
                                return user.id == id;
                            }))[0];
                        }]
                    },
                    controller: 'UserEditCtrl as edit'
                }
            }
        });

    });

    return app;
})(angular);