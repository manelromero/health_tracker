var app = app || {};

(function() {
	'use strict';

	app.SearchView = Backbone.View.extend({

		template: _.template($('#search-template').html()),

		events: {
			'click': 'clicked'
		},

		initialize: function() {
			//
		},

		clicked: function() {
			console.log('clicked:', this);
		},

		render: function() {
			return this.$el.html(this.template(this.model.toJSON()));
		}

	})

})();
