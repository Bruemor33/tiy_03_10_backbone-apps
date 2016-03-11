console.log("Hello World!");

var $ = require('jquery');
var Backbone = require('backbone');
var model = require('./model/blog.js');
var blogTitleView = require('./views/blog-title.js');
// var blogBodyView = require('./views/blog-body.js');







//Instanciate my view
var titleCollection = new model.MyBlogCollection();
var titleView = new blogTitleView.Title({collection: titleCollection});
// var bodyView = new blogBodyView.Body({collection: titleCollection});

//Select the div within my HTML that I want to render my template to
$('#blog-title').html(titleView.render().el);
// $('#blog-body').html(bodyView.render().el);
