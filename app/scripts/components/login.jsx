var React = require('react');
var $ = require('jquery')

var Navbar = require('./app.jsx').NavBar

require('../models/login.js')

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "masterj");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "tennis");
  }
});

var SignInContainer = React.createClass({
  handleSignIn: function(e){
    this.setState({email: e.target.value});
  },
  handlePassword: function(e){
    this.setState({password: e.target.value});
  },
  handleLogin: function(){
    console.log('Email: ', this.state.email);
    console.log('Password: ', this.state.password);
  },
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>Sign In</h2>
            <form id="signup">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={this.handleSignIn} className="form-control" name="email" id="email" type="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handlePassword} className="form-control" name="password" id="password" type="password" placeholder="Password Please" />
              </div>
              <input onClick={this.handleLogin} className="btn btn-primary" type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    )
  }
})

var LoginContainer = React.createClass({
  handleSignIn: function(e){
    this.setState({email: e.target.value});
  },
  handlePassword: function(e){
    this.setState({password: e.target.value});
  },
  handleLogin: function(){
    console.log('Email: ', this.state.email);
    console.log('Password: ', this.state.password);
  },
  render: function(){
    return(
      <div>
        <div className="col-md-6">
          <h2>Login</h2>
          <form id="login">
            <div className="form-group">
              <label htmlFor="email-login">Email address</label>
              <input onChange={this.handleSignIn} className="form-control" name="email" id="email-login" type="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Password</label>
              <input onChange={this.handlePassword} className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
            </div>
            <input onClick={this.handleLogin} className="btn btn-primary" type="submit" value="Beam Me Up!" />
          </form>
        </div>
      </div>
    )
  }
})

var AccountContainer = React.createClass({
  // handSubmit: function(){
  //
  // }
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
          </div>
        </div>
        <Navbar/>
        <LoginContainer/>
        <SignInContainer/>

      </div>
    )
  }
});

module.exports = {
  AccountContainer: AccountContainer
  // LoginForm
}
