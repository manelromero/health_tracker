var app = app || {};

(function() {
	'use strict';

	app.FoodView = Backbone.View.extend({

		template: _.template($('#food-template').html()),

		events: {
			'click': 'delete'
		},

		// When a food in the list is clicked
		delete: function() {
			this.model.destroy();
		},

		render: function() {
			return this.$el.append(this.template(this.model.toJSON()));
		}

	});

})();
