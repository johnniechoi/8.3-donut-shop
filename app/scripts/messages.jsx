
var MessageList = React.createClass({
  getInitialState: function(){
    return {
      message: ''
    }
  }
}),
componentWillMount: function(){
  var self = this;
  $ajax('http://grabow.herokuapp.com/classes/Message').then(displayData),
  function displayData(data){
    self.setState({message: data.results})
  }
},
render: function(){
  var messages = this.state.message;
  var messageList - messages.map(function(data))
    return(

    )
}
