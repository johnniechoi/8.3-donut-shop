var React = require('react');


var FormContainer = React.createClass({
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>Please Login</h2>
            <form id="login">
              <div className="form-group">
                <label htmlFor="email-login">Email address</label>
                <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password-login">Password</label>
                <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
              </div>
              <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
            </form>
          </div>
          <div className="col-md-6">
            <h2>Need an Account? Sign Up!</h2>
            <form id="signup">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input className="form-control" name="email" id="email" type="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" name="password" id="password" type="password" placeholder="Password Please" />
              </div>
              <input className="btn btn-primary" type="submit" value="Sign Me Up!" />
            </form>
          </div>
        </div>
      </div>
    )
  }
})

var LoginContainer = React.createClass({
  // signUpNewUser: function(username, password){
  //   this.state.user.set({username, password});
  //   this.state.user.signUp();
  // },
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Parse Users</h1>
          </div>
        </div>

        <FormContainer/>

      </div>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
  // LoginForm
}
