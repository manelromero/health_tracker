var app = app || {};

(function() {
	'use strict';

	app.FoodListView = Backbone.View.extend({

		el: $('#list'),

		events: {
			'click #clear': 'clearList'
		},

		initialize: function() {
			app.foodList = new app.FoodList();
			app.counter = $('#counter');
			this.listenTo(app.foodList, 'sync', this.render);
			this.listenTo(app.foodList, 'remove', this.render);
			app.foodList.fetch();
		},

		render: function() {
			var yourList = $('#food-element').empty();

			// Reset total calories
			app._counter = 0;
			app.foodList.each(function(food) {
				// Create a new food view
				var view = new app.FoodView({model: food});
				// Render view and append
				yourList.append(view.render());
				// Add food calories to the total
				app._counter += parseFloat(food.get('calories'));
				app.viewHelpers.totalCalories();
			});
		},

		// Clear the whole food list
		clearList: function() {
			var foodListLength = app.foodList.length;
			for (var i = 0; i < foodListLength; i++) {
				app.foodList.at(0).destroy();
			}
			app._counter = 0;
			app.viewHelpers.totalCalories();
		}

	});

})();
