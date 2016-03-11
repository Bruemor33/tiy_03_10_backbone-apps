var $ = require('jquery');
var Backbone = require('backbone');

//Local Imports: Template and Collection
var userFormTemplate = require('../../template/person-form-template.hbs');
var userModel = require('../model/person');

//User Creation form
var UserForm = Backbone.View.extend({
  tagName: 'form',
  id: 'userData',
  template: userFormTemplate,
  events: {
    'submit': "userSubmission"
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  userSubmission: function(event){
    event.preventDefault();
    var userPostData = this.$el.serializeArray().reduce(function(acum, i){
      acum[i.name] = i.value;
      return acum;
    }, {});
    this.collection.create(userPostData);
  }

})

//Export View
module.exports = {
  'UserForm': UserForm
}
