var app = app || {};

(function() {
	'use strict';

	app.FoodListView = Backbone.View.extend({

		el: $('#food-element'),

		template: _.template($('#food-template').html()),

		initialize: function() {
			app.foodList = new app.FoodList();
			this.counterVal = 0;
			this.counter = $('#counter');
			this.listenTo(app.foodList, 'add', this.render);
			app.foodList.fetch();
		},

		render: function(food) {
			this.$el.append(this.template(food.toJSON()));
			this.counterVal += parseInt(food.get('calories'));
			this.counter.html(parseFloat(Math.round(this.counterVal * 100)/ 100).toFixed(2) + ' cal');
		}

	})

})();
