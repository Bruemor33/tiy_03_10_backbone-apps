var $ = require('jquery');
var Backbone = require('backbone');

//Local Imports: Template and Collection
var userFormTemplate = require('../../template/person-form-template.hbs');
var userModel = require('../model/person');

//User Submit Form View
var UserSubmit = Backbone.View.extend({
  tagName: 'form',
  className: 'submit-button',
  template: userFormTemplate,
  events: {
    'submit': "userSubmit"
  },
  initialize: function(){
    
  }
})
