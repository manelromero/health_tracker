var app = app || {};

(function() {
	'use strict';

	app.AppView = Backbone.View.extend({

		initialize: function() {
			new app.SearchListView();
			new app.FoodListView();
		}

	});

	app.viewHelpers = {

		// I found this solution in http://bit.ly/1ooHsSO
		numberWithCommas: function(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		// Update total calories counter
		totalCalories: function() {
			app.counter.html(app.viewHelpers.numberWithCommas(app._counter.toFixed(2)) + ' cal');
		}

	};

})();
