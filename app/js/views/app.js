var app = app || {};

(function() {
	'use strict';

	app.AppView = Backbone.View.extend({

		el: $('#search-input'),

		events: {
			'input': 'search',
			'keypress': 'enter',
		},

		initialize: function() {
			this.input = $('#search-input');
		},

		search: function() {

			this.model = new app.SearchList();
			this.model.searchText(this.input.val());

			var list = $('#search-list');
			list.empty();

			this.model.fetch({

				success: function(result) {

					result.each(function(res) {
						app.searches.push(new app.Search({
							food: res.get('fields').item_name,
							calories: res.get('fields').nf_calories
						}));
						//list.append('<li class="aaa">' + res.get('fields').item_name + '</li>');
					});

					app.searches.each(function(search) {
						list.append('<li class="aaa">' + search.get('food') + '</li>');
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


	})

})();
