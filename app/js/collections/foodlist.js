var app = app || {};

(function() {
	'use strict';

	app.FoodList = Backbone.Collection.extend({

		model: app.Food,

		localStorage: new Backbone.LocalStorage('localFoodList')

	});

})();
