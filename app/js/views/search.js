var app = app || {};

(function() {
	'use strict';

	app.SearchView = Backbone.View.extend({

		tagName: 'li',

		events: {
			'mouseover': 'hoverResult'
		},

		initialize: function() {
			this.list = $('#search-list');
			this.listenTo(app.searches, 'add', this.jander);
			console.log('Model initialized');
		},

		jander: function(search) {
			console.log('ep');
			var view = new SearchView({model: search});
			this.list.append(view.render().el);
		},

		render: function() {
			this.el.html('<li>' + this.model.get('food') + '</li>')
		},

		hoverResult: function() {
			console.log('mouse over');
		}

	})

})();
