var React = require('react');
var $ = require('jquery')

var User = require('../models/user.js').User;
var NavBar = require('../template.jsx').NavBar;

var RecipeTemplate = React.createClass({
  getInitialState: function(){
    return {
      recipe: '',
      quantity: '',
      measurement: '',
      ingredient: '',
      serving: ''
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
    this.setState({ingredient: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    // how is the pointer supposed to be placed in here?
    var data = {
      username: localStorage.getItem('username'),
      quantity: this.state.quantity,
      measurement: this.state.measurement,
      ingredient: this.state.ingredient
    };
    var dataTitle = {
      username: localStorage.getItem('username'),
      recipe: this.state.recipe,
      serving: this.state.serving
    }
    console.log('dataTitle: ', dataTitle);
    this.props.submitTitle(dataTitle);
    console.log('state: ', this.state);
    this.setState({recipe: '', serving: ''})
    this.props.submitIngredients(data)
    this.setState({quantity: '', measurement: '', ingredient: ''});
  },
  render: function(){
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipe">Recipe Name</label>
            <input onChange={this.handleRecipeTitle} value={this.state.recipe} className="form-control" name="recipeTitle" id="recipe-title" type="text" placeholder="Chick Pot Pie" />
          </div>
          <div className="form-group">
            <label htmlFor="recipe">Servings Quantity</label>
            <input onChange={this.handleServing} value={this.state.serving} className="form-control" name="recipeServing" id="recipe-serving" type="text" placeholder="4" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input onChange={this.handleQuantity} value={this.state.quantity} className="form-control" name="recipeQuantity" id="recipe-Quantity" type="text" placeholder="1..." />
          </div>
          <div className="form-group">
            <label htmlFor="measurement">Cups or Pounds? Dunno</label>
            <input onChange={this.handleMeasurement} value={this.state.measurement} className="form-control" name="recipeMeasurement" id="recipe-measurement" type="text" placeholder="ounces/pounds" />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type of Ingredient</label>
            <input onChange={this.handleIngredient} value={this.state.ingredient} className="form-control" name="recipeIngredient" id="recipe-Ingredient" type="text" placeholder="flour..." />
          </div>
          <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
        </form>
      </div>
    )
  }
})

var RecipeForm = React.createClass({
  submitTitle: function(dataTitle){
    this.setState({ dataTitle })
    $.post('https://masterj.herokuapp.com/classes/recipe', dataTitle).then(function(response){
      console.log('response: ', response);
    });
  },
  submitIngredients: function(data){
    this.setState({ data })
    // console.log(localStorage.token);
    $.post('https://masterj.herokuapp.com/classes/ingredient', data).then(function(response){
      // console.log(response);
    });
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
