var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://masterj.herokuapp.com/users',
  signUp: function(){

      var self = this;
      // var user = this.get('username');
      // var password = this.get('password');
        // console.log(password);
    this.save().then(function(data){
      // console.log(data);

      localStorage.setItem('user', JSON.stringify(self.toJSON()))
    })
  }
})

module.exports = {
  User: User
};
