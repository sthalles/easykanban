angular.module('easykanban', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngRoute'])
    .run(function() {
      console.log('App is ready!');
    }).config(function($mdThemingProvider) {
      $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').primaryPalette('yellow').dark();
      $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
      $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').primaryPalette('yellow').dark();
      $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

      $mdThemingProvider.theme('default')
          .primaryPalette('pink')
          .accentPalette('orange')
          .backgroundPalette('grey');
          .warnPalette('red');
    });
