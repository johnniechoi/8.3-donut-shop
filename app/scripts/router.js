var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')

var AccountContainer = require('./components/login.jsx').AccountContainer;
var RecipeList = require('./components/app.jsx').RecipeList;
var RecipeForm = require('./components/recipes.jsx').RecipeForm;
var RecipeDetailContainer = require('./components/recipedetail.jsx').RecipeDetailContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login',
    'recipe/': 'recipe',
    'recipe/:id/': 'recipeDetail'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(RecipeList),
      document.getElementById('app')
    )
  },
  login: function(){
    ReactDOM.render(
      React.createElement(AccountContainer),
      document.getElementById('app')
    );
  },
  recipe: function(){
    ReactDOM.render(
      React.createElement(RecipeForm),
      document.getElementById('app')
    );
  },
  recipeDetail: function(id){
    ReactDOM.render(
      React.createElement(RecipeDetailContainer, {recipeId: id}),
      document.getElementById('app')
    );
  }
})

var router = new AppRouter();

module.exports = {
  router
}
