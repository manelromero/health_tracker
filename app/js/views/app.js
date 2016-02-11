var app = app || {};

(function() {
	'use strict';

	app.AppView = Backbone.View.extend({

		el: $('#search'),

		events: {
			'input #search-input': 'search',
			'keyup': 'enter',
		},

		initialize: function() {
			this.model = new app.SearchList();
			this.input = $('#search-input');
			this.resultsWindow = $('#results-window');
			this.listenTo(this.model, 'sync', this.render);
			this.listenToOnce(this.model, 'sync', this.addView);
		},

		search: function() {
			this.model.searchText(this.input.val());
			if (this.input.val()) {
				this.model.fetch();
				this.resultsWindow.css('display', 'block');
			} else {
				this.resultsWindow.css('display', 'none');
			}
		},

		render: function(results) {
			var list = $('#search-list');
			list.empty();
			results.each(function(result) {
				list.append('<li class="result">' + result.get('fields').item_name + '</li>');
			});
		},

		enter: function(e) {
			if (e.keyCode == 27) this.input.val(null);
			if (e.keyCode == 13) console.log('Enter key pressed');
		},

		addView: function() {
			new app.SearchView();
		}

	})

})();
