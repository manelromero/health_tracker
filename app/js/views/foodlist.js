var app = app || {};

(function() {
	'use strict';

	app.FoodListView = Backbone.View.extend({

		initialize: function() {
			app.foodList = new app.FoodList();
			this.listenTo(app.foodList, 'sync', this.render);
			this.listenTo(app.foodList, 'remove', this.render);
			app.foodList.fetch();
		},

		render: function() {

			var yourList = $('#food-element').empty(),
					counterVal = 0,
					counter = $('#counter');

			app.foodList.each(function(food) {
				var view = new app.FoodView({model: food});
				yourList.append(view.render());
				counterVal += parseFloat(food.get('calories'));
				counter.html(app.viewHelpers.numberWithCommas(counterVal.toFixed(2)) + ' cal');
			});

		}

	});

})();
