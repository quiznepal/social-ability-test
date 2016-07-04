'use strict';

describe('myApp.startpage module', function() {

  beforeEach(module('myApp.view1'));

  describe('startpage controller', function(){

    it('should startpage', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});