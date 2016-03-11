var $ = require('jquery');
var Backbone = require('backbone');

//Local Imports: Template and Collection
var userFormTemplate = require('../../template/person-form-template.hbs');
var userModel = require('../model/person');

//User Creation form
var UserForm = Backbone.View.extend({
  tagName: 'form',
  id: 'first-name',
  className: 'user-name-input',
  template: userFormTemplate,
  events: {
    'submit': "userSubmit"
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

})

//Export View
module.exports = {
  'UserForm': UserForm
}
