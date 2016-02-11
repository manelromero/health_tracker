var app = app || {};

(function() {
	'use strict';

	app.SearchView = Backbone.View.extend({

		el: $('#search-list'),

		events: {
			'click': 'clicked'
		},

		initialize: function() {
			//
		},

		clicked: function() {
			console.dir(this);
		}

	})

})();
