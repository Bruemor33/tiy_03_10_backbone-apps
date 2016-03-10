//This file is the view for my title input.
//Not that I really need two views for this. More just doing this for the practice.

//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');

//Local Inports
var blogFormTemplate = require('../../template/blog-template.hbs');
var blogModel = require('../model/blog');

//Utility
$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

//My Title View
var Title = Backbone.View.extend({
  tagName: 'form',
  className: 'blog-input-title',
  template: blogFormTemplate,
  events: {

  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  titleSubmit: function(){

  }

});


//Exports
module.exports = {
  'Title': Title
}
