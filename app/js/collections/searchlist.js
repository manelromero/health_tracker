var app = app || {};

(function() {
	'use strict';

	app.SearchList = Backbone.Collection.extend({

		model: app.Search,

		setSearchText: function(text) {
			this.searchText = text;
		},

		url: function() {

			var nutUrl = 'https://api.nutritionix.com/v1_1/search/',
					string = this.searchText,
					results = '?results=0:3',
					fields = '&fields=item_name,nf_calories',
					appId = '&appId=26952a04',
					appKey = '&appKey=78e2b31849de080049d26dc6cf4f338c';
					// appId = '&appId=03445b3c', // this
					// appKey = '&appKey=3cf95e3e37a58728f59ce039091744a3';

			return nutUrl + string + results + fields + appId + appKey;

		},

		parse: function(response) {

			var searchArray = [];
			var responseLength = response.hits.length;
			for (var i = 0; i < responseLength; i++) {
				var search = new app.Search({
					food: response.hits[i].fields.item_name,
					calories: response.hits[i].fields.nf_calories
				});
				searchArray.push(search);
			};
			return searchArray;
		},

	});

})();
