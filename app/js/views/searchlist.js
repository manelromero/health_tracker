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
			this.fetchError = $('#fetch-error')[0];
			this.listenTo(app.searchList, 'sync', this.render);
		},

		search: function() {
			// Hide the error message before start the search
			this.fetchError.style.display = 'none';
			// Set the text to search for
			app.searchList.setSearchText(this.input.val());
			// Fetch
			app.searchList.fetch({
				error: function() {
					// Show the error message
					$('.fetch-error').css('display', 'block');
				}
			});
		},

		render: function() {
			// Hide search results window if shown
			this.resultsWindow.style.display = this.input.val() ? 'block' : 'none';
			var list = $('#search-list').empty();

			app.searchList.each(function(element) {
				// Create a new search view
				var view = new app.SearchView({model: element});
				// Render view and append
				list.append(view.render());
			});
		}

	});

})();
