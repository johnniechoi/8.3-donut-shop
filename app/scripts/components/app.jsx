var React = require('react');
var Backbone = require('backbone');

var Ingredient = require('../models/models.js').Ingredient;
var IngredientCollection = require('../models/models.js').IngredientCollection;
var RecipeModel = require('../models/models.js').Recipe;
var RecipeCollection = require('../models/models.js').RecipeCollection;
var RecipeForm = require('./recipes.jsx').RecipeForm;
var NavBar = require('../template.jsx').NavBar;


var RecipeList = React.createClass({
  // getInitialState: function(){
  //   var ingredients = this.props.recipes;
    // console.log('recipe state: ', this.state.recipes);
      // console.log('ingredients: ', ingredients);
  // },
  render: function(){
    // console.log("Just date: ", new Date());
    // console.log("toJSON: ", (new Date()).toJSON());
    // var ingredients = JSON.parse(this.state.recipes)
    var recipeListing = this.props.recipes.map(function(item){
      // console.log('recipeListing: ', item)
      return(
        <table key={item.cid}>
          <tbody>
            <tr>
              <th> {item.get('recipe')} serving </th>
              <th> {item.get('serving')} </th>
            </tr>
          </tbody>
        </table>
      )
    })
      // console.log(recipeListing);
    return(
      <h1>{recipeListing}</h1>
    )
  }
})

var IngredientList = React.createClass({
  render: function(){
    var ingredients = this.props.recipes.get('ingredients')
      console.log(this.props.recipes);
    return(
      <h1></h1>
    )
  }
})


var IngredientForm = React.createClass({
  getInitialState: function(){
    return {
      inputQty: ''
    }
  },
  handleInputQty: function(e){
    this.setState({inputQty: e.target.value})
  },
  handleSubmit: function(e){
    e.preventDefault();
    var inputQty = this.state.inputQty
  },
  render: function(){
    var self = this;
    var inputQty = this.state.inputQty
    var ingredientList = this.props.ingredientItems.map(function(ingredient){
      return(
        <div key={ingredient.cid}>
          <table>
            <tbody>
              <tr>
                <th>{ingredient.get('ingredient')}: </th>
{/* the following is the ternary that I would like to write to be one step closer to finishing!
  in order for this to work, I need to point out one recipe and get the serving quantity from it.

    <th>collection.get('serving') == inputQty ? collection.get('serving') : collection.get('serving')/inputQty*ingredient.get('quantity')}  </th>

        The following is code on line 81 is dummy code to see the numbers change on the screen.
  */}
                <th>{ingredient.get('quantity') =='2' ? ingredient.get('quantity') : ingredient.get('quantity')/2*inputQty  } </th>
                <th>{ingredient.get('measurement')}</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    })
    return(
      <div>
        <div>
          <form onClick={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th>Makes</th>
                  <th><input type="text" onChange={this.handleInputQty} value={this.state.inputQty} type="text"/></th>
                  <th>Servings</th>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-default">Update Servings</button>
          </form>
        </div>
        {ingredientList}
      </div>
    )
  }
})

var RecipeApp = React.createClass({
  getInitialState: function(){
    var self = this;
    var recipes = new RecipeCollection();
    recipes.fetch().then(function(data){
      recipes.reset([])
      var recipeList = data.results;
      // console.log("recipeList: ", recipeList);
      recipeList.map(function(recipeList){
        recipes.add(recipeList)
      })
      self.setState({recipes: recipes})
    })
    return{
      recipes: recipes
    }
  },
  render: function(){
    console.log('recipe log: ', this.state.recipes);
    return(
      <div className="container">
        <NavBar/>
          <RecipeList recipes={this.state.recipes}/>
        <IngredientList recipes={this.state.recipes}/>
      </div>
    )
  }
})

module.exports = {
  RecipeApp,
}

// var IngredientList = React.createClass({
//   getInitialState: function(){
//     var self = this;
//     var ingredient = new Ingredient();
//     var ingredientCollection = new IngredientCollection();
//     ingredientCollection.fetch().then(function(data){
//       ingredientCollection.reset([])
//       var ingredient = data.results;
//       ingredient.map(function(ingredient){
//       ingredientCollection.add(ingredient)
//       })
//       self.setState({ingredientCollection: ingredientCollection})
//     })
//     return{
//       ingredient: ingredient,
//       ingredientCollection: ingredientCollection
//     }
//   },
//   render: function(){
//     return(
//       <div>
//         <IngredientForm ingredientItems={this.state.ingredientCollection}/>
//       </div>
//     )
//   }
// });
