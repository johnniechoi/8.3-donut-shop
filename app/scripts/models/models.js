var Backbone = require('backbone');
var React = require('react');

var Recipe = Backbone.Model.extend({
    defaults:{
      recipe: '',
      serving: '',
      ingredients: []
    },
    idAttribute: 'objectId',
    urlRoot: 'https://masterj.herokuapp.com/classes/recipe/',
    save: function(key, val, options){
      delete this.attributes.createdAt;
      delete this.attributes.updatedAt;
      return Backbone.Model.prototype.save.apply(this, arguments);
    }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://masterj.herokuapp.com/classes/recipe',
  parse: function(data){
    return data.results
  }
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
