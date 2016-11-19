(function() {
  angular.module('easykanban')
      .config(function($routeProvider) {
        $routeProvider.when('/tasks', {
          templateUrl: '/templates/pages/tasks/index.html'
        })
           .when('/', {
             templateUrl: '/templates/pages/login/index.html'
           })
           .otherwise({
             redirectTo: '/'
           });
      });
})();
