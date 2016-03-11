var $ = require('jquery');
var Backbone = require('backbone');

//User Model
var Person = Backbone.Model.extend({

});

//User Data Collection
var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/andrewrymerusers/'
});

//Exports to Views
module.exports = {
  'Person': Person,
  'PersonCollection': PersonCollection
}
