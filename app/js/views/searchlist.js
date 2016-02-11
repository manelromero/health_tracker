var app = app || {};

(function() {
	'use strict';

	app.SearchListView = Backbone.View.extend({

		el: $('#search-input'),

		events: {
			'input': 'search',
			'keypress': 'enter'
		},

		initialize: function() {
			this.input = $('#search-input');
			console.log('SearchView initialized');
		},

		search: function() {

			this.model = new app.SearchList();
			this.model.searchText(this.input.val());

			var list = $('#search-list');
			list.empty();

			this.model.fetch({

				success: function(result) {

					result.each(function(res) {
						new app.Search({
							food: res.get('fields').item_name,
							calories: res.get('fields').nf_calories
						})
						list.append('<li>' + res.get('fields').item_name + '</li>');
					});

				},

				error: function() {
					console.log('fetch error');
				}

			});

		},

		render: function(res) {
			console.log('rendering');
		},

		enter: function(e) {
			if (e.which == 13) console.log('Enter key pressed');
		}

	});

})();
