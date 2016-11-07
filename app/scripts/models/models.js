var Backbone = require('backbone');
var React = require('react');



var Recipe = Backbone.Model.extend({
    idAttribute: 'objectId',
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://masterj.herokuapp.com/classes/recipe'
})

var Ingredient = Backbone.Model.extend({
    idAttribute: 'objectId'
});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient,
  url: 'https://masterj.herokuapp.com/classes/ingredient'
})

module.exports = {
  Recipe,
  RecipeCollection,
  Ingredient,
  IngredientCollection
}
