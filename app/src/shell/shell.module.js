/**
 * @ngdoc overview
 * @name app.shell
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.shell', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
      .state('Root', {
        abstract: true,
        templateUrl:'src/shell/root.html'
      }
    );
  }

}());
