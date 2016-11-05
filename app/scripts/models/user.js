var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://masterj.herokuapp.com/users',
  signUp: function(){

      var self = this;
      var user = this.get('username');
      var password = this.get('password');
      console.log(user);
        // console.log(localStorage);
    this.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(self.toJSON()))
      localStorage.setItem('objectId', data.objectId);
      localStorage.setItem('createdAt', data.createdAt);
      localStorage.setItem('sessionToken', data.sessionToken);
      // console.log(localStorage);

    })
  }
})

module.exports = {
  User: User
};
