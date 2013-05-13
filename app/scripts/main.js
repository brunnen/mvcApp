require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'MyMath', 'Models/User', 'Router', 'jquery', 'bootstrap'], function (app, MyMath, User, Router, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log(MyMath.add(1, 2));
    console.log('Running jQuery %s', $().jquery);

    var users = [
        new User('Barney'),
        new User('Cartman'),
        new User('Sheldon')
    ];

    for (var i = 0, len = users.length; i < len; i++) {
        console.log(users[i].name);
    }

    localStorage.users = JSON.stringify(users);

    Router.startRouting();
});