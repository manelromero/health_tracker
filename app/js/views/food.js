var app = app || {};

(function() {
	'use strict';

	app.FoodView = Backbone.View.extend({

		template: _.template($('#food-template').html()),

		events: {
			//
		},

		initialize: function() {
			//
		},

		clicked: function() {
			console.log('clicked:', this);
		},

		render: function() {
			//
		}

	})

})();
