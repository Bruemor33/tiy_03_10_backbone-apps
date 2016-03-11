var $ = require('jquery');
var Backbone = require('jquery');

//Local Inports
var model = require('../model/blog');
var blogTemplate = require('../../template/blog-template.hbs');

//Set Up Body View
var BlogBody = Backbone.View.extend({

});

//Exports
module.exports = {
  'BlogBody': BlogBody
}
