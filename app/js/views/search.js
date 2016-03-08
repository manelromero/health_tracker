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

			resultsWindow.style.display = 'none';
			input.val('');

			var food = new app.Food({
				name: this.model.get('food'),
				calories: app.viewHelpers.numberWithCommas(this.model.get('calories'))
			});

			app.foodList.add(food);
			food.save();
		},

		render: function() {
			return this.$el.html(this.template(this.model.toJSON()));
		}

	});

})();
