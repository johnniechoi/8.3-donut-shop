var React = require('react');
var $ = require('jquery')

var User = require('../models/user.js').User;
var NavBar = require('../template.jsx').NavBar;
var Recipe = require('../models/models.js').Recipe;

var RecipeTemplate = React.createClass({
  getInitialState: function(){
    return {
      recipe: '',
      quantity: '',
      measurement: '',
      name: '',
      serving: '',
      ingName: ''
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
    // how is the pointer supposed to be placed in here?
    var data = {
      quantity: this.state.quantity,
      measurement: this.state.measurement,
      ingName: this.state.ingName
    };
    var dataTitle = {
      username: localStorage.getItem('username'),
      recipe: this.state.recipe,
      serving: this.state.serving,
      ingredients: [data]
    }
    this.props.submitTitle(dataTitle);
    this.setState({recipe: '', serving: ''})
    // console.log('dataTitle: ', dataTitle);
    // console.log('state: ', this.state);
    // this.props.submitIngredients(data)
    // this.setState({quantity: '', measurement: '', name: ''});
  },
  render: function(){
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3 htmlFor="quantity" className="">Recipe</h3>
            <input onChange={this.handleRecipeTitle} value={this.state.recipe} name="recipeTitle" id="recipe-title" type="text" placeholder="Recipe Name" />
            <input onChange={this.handleServing} value={this.state.serving} name="recipeServing" id="recipe-serving" type="text" placeholder="Servings Quantity" />
          </div>
          <div className="form-group">
            <h3 htmlFor="quantity" className="">Ingredients</h3>
            <input onChange={this.handleQuantity} value={this.state.quantity} name="recipeQuantity" id="recipe-Quantity" type="text" placeholder="Quantity" />
            <input onChange={this.handleMeasurement} value={this.state.measurement} name="recipeMeasurement" id="recipe-measurement" type="text" placeholder="Cups or Pounds?" />
            <input onChange={this.handleIngredient} value={this.state.ingName}  name="recipeIngredient" id="recipe-Ingredient" type="text" placeholder="Type of Ingredient" />
          </div>
          <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
        </form>
      </div>
    )
  }
})

var RecipeForm = React.createClass({
  submitTitle: function(dataTitle){
    this.setState({ dataTitle });
    var recipes = new Recipe();
    recipes.set(dataTitle);
    recipes.save();
      console.log('recipe: ', dataTitle);
    // $.post('https://masterj.herokuapp.com/classes/recipe', dataTitle).then(function(response){
    //   console.log('response: ', response);
    // });
  },
  render: function(){
    return(
      <div className="container">
        <NavBar/>
        <RecipeTemplate submitTitle={this.submitTitle} submitIngredients={this.submitIngredients}/>
        <h1>Lets Create a Recipe!</h1>
      </div>
    )
  }
})

module.exports = {
  RecipeForm
}
