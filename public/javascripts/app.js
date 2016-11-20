angular.module('easykanban', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngRoute'])
    .run(function() {
      console.log('App is ready!');
    }).config(function($mdThemingProvider) {
      //      $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').primaryPalette('yellow').dark();
      //      $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
      //      $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').primaryPalette('yellow').dark();
      //      $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

      $mdThemingProvider.theme('default')
          .primaryPalette('blue-grey')
          .accentPalette('red')
          .backgroundPalette('grey')
          .warnPalette('red');

      $mdThemingProvider.theme('feature-task')
          .primaryPalette('blue')
          .accentPalette('red')
          .backgroundPalette('light-green').dark();

      $mdThemingProvider.theme('defect-task')
          .primaryPalette('blue')
          .accentPalette('red')
          .backgroundPalette('yellow').dark();

      $mdThemingProvider.theme('improvement-task')
          .primaryPalette('blue')
          .accentPalette('red')
          .backgroundPalette('red').dark();


    });
