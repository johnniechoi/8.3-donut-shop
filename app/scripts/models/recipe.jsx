var Backbone = require('backbone');
var React = require('react');



var Recipe = Backbone.Model.extend({
    idAttribute: '_id',
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://masterj.herokuapp.com/classes/recipeCollection'
})

var Ingredient = Backbone.Model.extend({
    idAttribute: '_id'
});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient,
  url: 'https://masterj.herokuapp.com/classes/IngredientCollection'
})

module.exports = {
  Recipe,
  RecipeCollection,
  Ingredient,
  IngredientCollection
}
