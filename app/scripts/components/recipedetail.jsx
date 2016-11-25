var React = require('react')

var Recipe = require('../models/models.js').Recipe;
var NavBar = require('../template.jsx').NavBar;

var RecipeAdjustmentForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
  },
  handleServing: function(e){
    this.props.adjustQty(e.target.value)
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="">
            Serving: <input onChange={this.handleServing} type="text" value={this.props.servings}/>
          </div>
        </form>
      </div>
    )
  }
})

var RecipeDetailContainer = React.createClass({
  getInitialState: function(){
    return {
      recipe: new Recipe(),
      factor: 1,
      servings: 0,
      ingredients: ''
    }
  },
  componentWillMount: function(){
    var self = this;
    var recipe = this.state.recipe;
    var recipeId = this.props.recipeId;
    recipe.set('objectId', recipeId)
    recipe.fetch().then(function(){
      console.log('fetch', this.state);
      self.setState({servings: recipe.get('serving'), recipe: recipe})
    })
  },
  adjustQty: function(newServings){
    var recipe = this.state.recipe;
    console.log(recipe);
    var newFactor = (newServings / recipe.get('serving')) || 1;
    console.log(newFactor);
    this.setState({servings: newServings, factor: newFactor})
  },
  render: function(){
    console.log(Recipe);
    var recipe = this.state.recipe.get('recipe')
    var ingredients = this.state.recipe.get('ingredients')
    // console.log('ingredients: ', ingredients);
    var factor =  this.state.factor

    if(ingredients){
      var ingredientHTML = ingredients.map(function(ingredient){
        var adjustedAmount = ingredient.quantity * factor;
        var amount = parseInt(adjustedAmount) === adjustedAmount ? adjustedAmount : adjustedAmount.toFixed(2);
        return(
          <li className="list-group-item" key={ingredient.ingName}>
            {amount} {ingredient.measurement}s of {ingredient.ingName}
          </li>
          )
        })
      }
    return(
      <div className="container">
        <NavBar/>
        <h1>{recipe}</h1>
        <RecipeAdjustmentForm servings={this.state.servings} ingredients={ingredients} recipe={this.state.recipe} adjustQty={this.adjustQty} />
        {ingredientHTML ? ingredientHTML : null}
      </div>
    )
  }
})

module.exports = {
  RecipeDetailContainer
}
