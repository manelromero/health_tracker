var app = app || {};

(function() {
	'use strict';

	app.AppView = Backbone.View.extend({

		initialize: function() {
			new app.SearchListView();
			new app.FoodListView();
		},

		enter: function(e) {
			if (e.keyCode == 27) this.input.val(null);
			if (e.keyCode == 13) console.log('Enter key pressed');
		},

	})

})();
