var app = app || {};

(function() {
	'use strict';

	app.SearchList = Backbone.Collection.extend({

		model: app.Search,

		initialize: function(){
			console.log('Collection initialized');
		},

		searchText: function(text) {
			this.string = text;
		},

		url: function() {

			var nutUrl = 'https://api.nutritionix.com/v1_1/search/',
					string = this.string + '?',
					results = 'results=0:10',
					fields = '&fields=item_name,nf_calories',
					appId = '&appId=26952a04',
					appKey = '&appKey=78e2b31849de080049d26dc6cf4f338c';
					//appId = '&appId=03445b3c',
					//appKey = '&appKey=3cf95e3e37a58728f59ce039091744a3';

			return nutUrl + string + results + fields + appId + appKey;

		},

		parse: function(response) {
			return response.hits;
		},

		clicked: function() {
			console.log('clicked');
		}

	})

})();

app.searches = new app.SearchList();
