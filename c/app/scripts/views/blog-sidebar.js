var $ = require('jquery');
var Backbone = require('backbone');

//Local Inports
var model = require('../model/blog');
var blogListTemplate = require('../../template/blog-list.hbs');

//My Blog Sidebar List
var SidebarView = Backbone.View.extend({

});

//Exports
module.exports = {
  'SidebarView': SidebarView
}
