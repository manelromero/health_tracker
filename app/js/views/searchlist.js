var app = app || {};

(function() {
	'use strict';

	app.SearchListView = Backbone.View.extend({

		el: $('#search'),

		events: {
			'input #search-input': 'search',
			'keypress': 'enter'
		},

		initialize: function() {
			app.searchList = new app.SearchList();
			this.input = $('#search-input');
			this.resultsWindow = $('#results-window')[0];
			this.listenTo(app.searchList, 'sync', this.render);
		},

		search: function() {
			app.searchList.setSearchText(this.input.val());
			app.searchList.fetch({
				error: function() {
					console.log('fetch error');
				}
			});
		},

		render: function() {
			this.resultsWindow.style.display = this.input.val() ? 'block' : 'none';
			var list = $('#search-list').empty();

			app.searchList.each(function(element) {
				var view = new app.SearchView({model: element});
				list.append(view.render());
			});

		}

	});

})();
