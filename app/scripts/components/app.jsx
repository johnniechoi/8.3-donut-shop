var React = require('react');
var Backbone = require('backbone');

var RecipeList = React.createClass({
  render: function(){
    return(
      <h1>RecipeList</h1>
    )
  }
});

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

var NavBar = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Dan's Cookbook</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Add Receipe <span className="sr-only">(current)</span></a></li>
              {/*Add for Form for the recipes!*/}
              <li><a href="#">Recipes List</a></li>
              {/*see a list of all the great receipes on the API!*/}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

var RecipeApp = React.createClass({

  render: function(){
    return(
      <div className="container">
        <NavBar/>
        <RecipeForm/>
        <RecipeList/>
      </div>
    )
  }
})

module.exports = {
  RecipeApp: RecipeApp
}
