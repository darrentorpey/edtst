EDTST = window.EDTST || {};

(function(EDTST){
  'use strict';

  EDTST.Game = {
    ENTER_KEY: 13,

    init: function() {
      // Kick things off by creating the ToDoGameView
      return new app.ToDoGameView();
    }
  };
})(EDTST);

$(function () {
	'use strict';

  window.game = EDTST.Game.init();
});
