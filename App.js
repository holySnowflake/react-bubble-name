var React  = require('react');
//var Bubbles = require('./Bubbles.js');
var App = React.createClass({

  render: function () {

    return(
      <div>
        <h1>Hello World!</h1>
        <button id="button">Move Me</button>
      </div>
    );
  }
});

module.exports = App;
