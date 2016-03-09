var app = app || {};

(function() {
	'use strict';

	app.SearchView = Backbone.View.extend({

		template: _.template($('#search-template').html()),

		events: {
			'click': 'selected'
		},

		selected: function() {
			var input = $('#search-input'),
					resultsWindow = $('#results-window')[0];
			// Close the search results window
			resultsWindow.style.display = 'none';
			// Reset input value
			input.val('');
			// Create a new food model
			var food = new app.Food({
				name: this.model.get('food'),
				calories: app.viewHelpers.numberWithCommas(this.model.get('calories'))
			});
			// Add the model to the collection
			app.foodList.add(food);
			food.save(); // this is very important for localStorage to update
		},

		render: function() {
			return this.$el.html(this.template(this.model.toJSON()));
		}

	});

})();
