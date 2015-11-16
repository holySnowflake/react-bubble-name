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
        <h2>Drag and drop the bubbles. Click anywhere to create new bubbles.</h2>
        <svg></svg>
        <button id='button'>Click to see the bubbles move</button>
      </div>
    );
  }

});

//module.exports = Chart;

React.render(<Chart />, document.body);
