console.log("Hello World!");

//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');

//Local Inports
var model = require('./model/person.js');
var formView = require('./views/person-form.js');


//Create an Instance of my view along with our collections
var userCollection = new model.PersonCollection();
var userView = new formView.UserForm({collection: userCollection});


//Bring the template view into my HTML doc
$('#form-template').html(userView.render().el);

//Create an Instance of your button view or your app doesn't really know it exists.
