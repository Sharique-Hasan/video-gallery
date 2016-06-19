/**
 * @ngdoc overview
 * @name app.videos
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.videos', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
      .state('Root.Videos', {
        url:'/videos',
        templateUrl:'src/videos/video.html',
        controller: 'Video as vm'
      }
    );
  }

}());
