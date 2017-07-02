require.config({
    baseUrl: '/app',
    paths: {
		'angular': 'bower_components/angular/angular',
		'angular-route': 'bower_components/angular-route/angular-route',
		'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'jquery': 'bower_components/jquery/dist/jquery.min'
    },
	shim: {
        'angular':{
            exports:'angular'
        },
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require
(
    [
        'js/app'
    ],
    //function(app)
	function()
    {
        angular.bootstrap(document, ['myApp']);
    }
);