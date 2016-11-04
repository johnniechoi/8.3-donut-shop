var Backbone = require('backbone');

var User = Backbone.Model.Extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users'
  signup: function(){
      var username = this.get('username');
      ver password = this.get('password');

    this.savce().then(function(data)){
      localStorage.setItem('user', this.toJSON())
    }
  }
})
