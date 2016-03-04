var app = app || {};

(function() {
	'use strict';

	app.FoodListView = Backbone.View.extend({

		model: app.Food,

		el: $('#food-element'),

		template: _.template($('#food-template').html()),

		events: {
			//
		},

		initialize: function() {
			app.foodList = new app.FoodList();
			this.foodLines = $('#food-list');
			this.listenTo(app.foodList, 'add', this.render);
		},

		render: function() {
			this.$el.append(this.template(app.foodList.last().toJSON()));
		}

	})

})();
