var Backbone = require('backbone');
var $ = require('jquery');

var MyBlog = Backbone.Model.extend({

});

var MyBlogCollection = Backbone.Collection.extend({
  model: MyBlog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/andrewrymerblog/'
})

module.exports = ({
  'Myblog': MyBlog,
  'MyBlogCollection': MyBlogCollection
});
