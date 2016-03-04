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

			var food = new app.Food({
				name: this.model.get('food'),
				calories: this.model.get('calories')
			});

			app.foodList.add(food);

		},

		render: function() {
			return this.$el.html(this.template(this.model.toJSON()));
		}

	})

})();
