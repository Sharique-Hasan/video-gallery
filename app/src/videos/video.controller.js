/**
 * @ngdoc controller
 * @name app.videos.controller:Video
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.videos')
		.controller('Video', Video);

  /* @ngInject */
	function Video(){
		var vm = this;
    let currentPlaying;
    vm.players = [];
    let config = {
      autoPlay: false,
      title: 'Clip #',
      sources: [
        {src: "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd"}
      ],
      theme: {
        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
      },
      plugins: {
        poster: "http://www.videogular.com/assets/images/videogular.png"
      }
    };
    vm.configs = [config];
    vm.loadMoreData = () => {
      loadMore().forEach((item) => {
        let config = {
          autoPlay: false,
          title: 'Clip #',
          sources: [
            {src: item.stream.file}
          ],
          theme: {
            url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
          },
          plugins: {
            poster: item.thumbnail
          }
        };
        vm.configs = vm.configs.concat(config);
      });
    };
    vm.onPlayerReady = (API, index) => {
      vm.players[index] = API;
    };
    vm.inView = (index, inview, inviewPart) => {
      if(inviewPart === 'both'){
        if(currentPlaying){
          currentPlaying.pause();
        }
        currentPlaying = vm.players[index];
        vm.players[index].play();
        toastr.info(`${vm.configs[index].title} ${index} has started`, 'Event');
        console.info(`${vm.configs[index].title} ${index} has started`);
      }
    };
    vm.onComplete = (index) => {
      toastr.info(`${vm.configs[index].title} ${index} has completed`, 'Event');
      console.info(`${vm.configs[index].title} ${index} has completed`);
    };
    vm.onStateUpdate = (state, index) => {
      if(state === 'play'){
        _.each(vm.players, (item, $index) => {
          if ($index !== index) {
            item.pause();
          }
        });
      }
    };

    function loadMore() {
      return [
        {
          stream: {
            protocol: 'dash',
            file: 'http://dash.edgesuite.net/akamai/test/caption_test/ElephantsDream/elephants_dream_480p_heaac5_1.mpd'
          },
          thumbnail: 'http://images.castaclip.net/resize/760x428/freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg',
          title: 'Clip#'
        },
        {
          stream: {
            protocol: 'dash',
            file: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd'
          },
          thumbnail: 'http://www.videogular.com/assets/images/videogular.png',
          title: 'Clip#'

        }
      ];
    }
	}

}());
