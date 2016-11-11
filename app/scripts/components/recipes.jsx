var React = require('react');
var $ = require('jquery')

var User = require('../models/user.js').User;
var NavBar = require('../template.jsx').NavBar;
var Recipe = require('../models/models.js').Recipe;

var RecipeAdd = React.createClass({
  getInitialState: function(){
    return {
      recipe: new Recipe()
    }
  },
  handleRecipeTitle: function(e){
    this.setState({recipe: e.target.value});
  },
  handleServing: function(e){
    this.setState({serving: e.target.value});
  },
  handleQuantity: function(e){
    this.setState({quantity: e.target.value});
  },
  handleMeasurement: function(e){
    this.setState({measurement: e.target.value});
  },
  handleIngredient: function(e){
    this.setState({ingName: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var recipeData = {
      username: localStorage.getItem('username'),
      recipe: this.state.recipe,
      serving: this.state.serving,
      ingredients: []
    }
    // this.props.submitTitle(recipeData);
    // this.setState(recipeData)
  },
  addIngredient: function(){
    var ingredientData = {
      quantity: this.state.quantity,
      measurement: this.state.measurement,
      ingName: this.state.ingName
    };

    // this.state.recipe.ingredients.push(ingredientData);
    console.log(this.state);
    // var myModel = this.state.recipe.toJSON();
    // console.log(myModel);
  },
  render: function(){
    return (
      <div className="col-md-7">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3 htmlFor="quantity" className="">Recipe</h3>
            <input onChange={this.handleRecipeTitle} value={this.state.recipe.recipe} name="recipeTitle" id="recipe-title" type="text" placeholder="Recipe Name" />
            <input onChange={this.handleServing} value={this.state.recipe.serving} name="recipeServing" id="recipe-serving" type="text" placeholder="Servings Quantity" />
          </div>
          <div className="form-group">
            <h3 htmlFor="quantity" className="">Ingredients</h3>
            <input onChange={this.handleQuantity} value={this.state.quantity} name="recipeQuantity" id="recipe-Quantity" type="text" placeholder="Quantity" />
            <input onChange={this.handleMeasurement} value={this.state.measurement} name="recipeMeasurement" id="recipe-measurement" type="text" placeholder="Cups or Pounds?" />
            <input onChange={this.handleIngredient} value={this.state.ingName}  name="recipeIngredient" id="recipe-Ingredient" type="text" placeholder="Type of Ingredient" />
            <button className="btn btn-default" onClick={this.addIngredient} type="button">Add Ingredient!</button>

        </div>
          <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
        </form>
      </div>
    )
  }
})

var RecipeForm = React.createClass({
  getInitialState: function(){
    return {
      recipe: {}
    }
  },
  submitTitle: function(recipeData){
    var self = this;
    this.setState({ recipeData });
    var recipe = new Recipe();
    recipe.set(recipeData);
    recipe.save().then(()=>{
      recipe.set('objectId', recipe.get('objectId'))
      recipe.fetch().then(function(){
        self.state.recipe = recipe;
      })

    });
      console.log('recipe: ', recipeData);
  },
  render: function(){
    return(
      <div className="container">
        <NavBar/>
        <RecipeAdd recipe={this.state.recipe} submitTitle={this.submitTitle} submitIngredients={this.submitIngredients}/>
        <h1>Lets Create a Recipe!</h1>
      </div>
    )
  }
})

module.exports = {
  RecipeForm
}
