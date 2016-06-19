(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Video', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.videos'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Video', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
