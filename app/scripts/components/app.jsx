var React = require('react');
var Backbone = require('backbone');
var router = require('../router');

var Ingredient = require('../models/models.js').Ingredient;
var IngredientCollection = require('../models/models.js').IngredientCollection;
var RecipeModel = require('../models/models.js').Recipe;
var RecipeCollection = require('../models/models.js').RecipeCollection;
var RecipeForm = require('./recipes.jsx').RecipeForm;
var NavBar = require('../template.jsx').NavBar;


var RecipeItem = React.createClass({
  getInitialState: function(){
    return {
      recipe: '',
      serving: ''
    }
  },
  render: function(){
    // console.log('recipe state: ', this.props.recipes);
    // var ingredients = JSON.parse(this.state.recipes)
    var recipeListing = this.props.recipes.map(function(item){
    // console.log('recipeListing: ', item)
      return (
        <tr key={item.get('objectId')}>
          <th>
            <a href={'#/recipe/' + item.get('objectId') + '/'}>
              {item.get('recipe')}
            </a>
          </th>
          <th> {item.get('serving')}  servings</th>
        </tr>
      )
    })
    return(
      <div>
        <h1>Recipe List</h1>
        <table>
          <thead>
            <tr>
              <td>Recipe Name</td>
              <td>Servings</td>
            </tr>
          </thead>
          <tbody>{recipeListing}</tbody>
        </table>
      </div>
    )
  }
})

var IngredientList = React.createClass({
  render: function(){
    var ingredients = this.props.recipe
    // console.log('ingredients: ', ingredients);

    return(
      <h1> </h1>
    )
  }
})


var RecipeList = React.createClass({
  getInitialState: function(){
    var self = this;
    var recipe = new RecipeModel();
    recipe.fetch().then(function(data){
      console.log('fetch model', data);
      self.setState({recipe: recipe})
      // console.log('recipe: ', recipe);
    })
    var recipes = new RecipeCollection();
    recipes.fetch().then(function(data){
      // console.log('fetch', data);
      self.setState({recipes: recipes})
      // console.log('recipes: ', recipes);
    })
    return{
      recipe: recipe,
      recipes: recipes
    }
  },
  render: function(){
    // console.log('recipe log: ', this.state.recipes);
    return(
      <div className="container">
        <NavBar/>
          <RecipeItem recipes={this.state.recipes}/>
      </div>
    )
  }
})

module.exports = {
  RecipeList,
}
