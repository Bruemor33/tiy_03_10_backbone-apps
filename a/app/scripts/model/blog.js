var Backbone = require('backbone');
var $ = require('jquery');

var MyBlog = Backbone.Model.extend({

});

var MyBlogCollection = Backbone.Collection.extend({
  model: MyBlog
})

module.exports = ({
  'Myblog': MyBlog,
  'MyBlogCollection': MyBlogCollection
});
