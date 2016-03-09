var app = app || {};

(function() {
	'use strict';

	app.SearchList = Backbone.Collection.extend({

		model: app.Search,

		// Search string
		setSearchText: function(text) {
			this.searchText = text;
		},

		// Nutritionix API data
		url: function() {
			var nutUrl = 'https://api.nutritionix.com/v1_1/search/',
					string = this.searchText,
					results = '?results=0:10',
					fields = '&fields=item_name,nf_calories',
					appId = '&appId=03445b3c',
					appKey = '&appKey=3cf95e3e37a58728f59ce039091744a3';

			return nutUrl + string + results + fields + appId + appKey;
		},

		// Create an Array with Nutritionix response
		parse: function(response) {
			var searchArray = [];
			var responseLength = response.hits.length;
			for (var i = 0; i < responseLength; i++) {
				var search = new app.Search({
					food: response.hits[i].fields.item_name,
					calories: parseFloat(response.hits[i].fields.nf_calories).toFixed(2)
				});
				searchArray.push(search);
			}
			return searchArray;
		}

	});

})();
