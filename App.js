var React = require('react');
var Bubbles = require('./Bubbles.js');

var Chart = React.createClass({

  componentDidMount: function() {
    console.log('IM HEREEEE');
    Bubbles.d3();
  },

  render: function() {
    return (
      <div>
        <h1>Hello</h1>
        <button id='button'>Click</button>
        <svg></svg>
      </div>
    );
  }

});

//module.exports = Chart;

React.render(<Chart />, document.body);
