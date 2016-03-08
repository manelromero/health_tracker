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
		}
	};

})();
