var React = require('react');
var Backbone = require('backbone');

var Ingredient = require('../models/models.js').Ingredient;
var IngredientCollection = require('../models/models.js').IngredientCollection;
var RecipeModel = require('../models/models.js').Recipe;
var RecipeForm = require('./recipes.jsx').RecipeForm;
var NavBar = require('../template.jsx').NavBar;


var IngredientTemplate = React.createClass({
  render: function(){
    var self = this;
    var recipe = this.props.ingredientItems.map(function(ingredient){
      return(
        <div key={ingredient.cid}>
          <table>
            <tbody>
              <tr>
                <th>{ingredient.get('title')}: </th>
                <th>makes {ingredient.get('quantity')} </th>
                <th>Servings</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    })
    return(
      <div>
        {recipe}
      </div>
    )
  }
})

var IngredientList = React.createClass({
  getInitialState: function(){
    var ingredient = new Ingredient();
    var ingredientCollection = new IngredientCollection();
    var recipe = new RecipeModel();

//gotta figure out how to login and then point an objectID to the recipe.
  ingredientCollection.add([
    {quantity: '2', title: 'carrots' },
    {quantity: '1', title: 'potatos' },
    {quantity: '.5', title: 'peas' }
  ])
    return{
      Ingredient: Ingredient,
      ingredientCollection: ingredientCollection
    }
  },
  render: function(){
    return(
      <div>
        <h1>Recipes</h1>
        <IngredientTemplate ingredientItems={this.state.ingredientCollection}/>
      </div>
    )
  }
});

// Perhaps, have this guy in another page? Haven't through th
// var RecipeList = React.createClass({
//   render: function(){
//     return(
//       <h1>RecipeList</h1>
//     )
//   }
// })

var RecipeForm = React.createClass({
  render: function(){
    return(
        <div>
          <form>
            <table>
              <tbody>
                <tr>
                  <th>Makes</th>
                  <th><input type="text" value=""/></th>
                  <th>Servings</th>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-default">Submit</button>
          </form>
        </div>
    )
  }
})

var RecipeApp = React.createClass({
  render: function(){
    return(
      <div className="container">
        <NavBar/>
        <RecipeForm/>
        <IngredientList/>
      </div>
    )
  }
})

module.exports = {
  RecipeApp,
}
