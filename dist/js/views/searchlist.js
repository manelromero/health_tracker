var app=app||{};!function(){"use strict";app.SearchListView=Backbone.View.extend({el:$("#search"),events:{"input #search-input":"search",keypress:"enter"},initialize:function(){app.searchList=new app.SearchList,this.input=$("#search-input"),this.resultsWindow=$("#results-window")[0],this.fetchError=$("#fetch-error")[0],this.listenTo(app.searchList,"sync",this.render)},search:function(){this.fetchError.style.display="none",app.searchList.setSearchText(this.input.val()),app.searchList.fetch({error:function(){$(".fetch-error").css("display","block")}})},render:function(){this.resultsWindow.style.display=this.input.val()?"block":"none";var e=$("#search-list").empty();app.searchList.each(function(s){var t=new app.SearchView({model:s});e.append(t.render())})}})}();