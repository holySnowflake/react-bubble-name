// var React  = require('react');
// var Bubbles = require('./Bubbles.js');
// var App = React.createClass({
//
//   render: function () {
//
//     return(
//       <div>
//         <h1>Drag and drop the bubbles. Click to create new bubbles.</h1>
//         <button id="button">Move the Bubbles</button>
//         <svg></svg>
//       </div>
//     );
//   }
// });
//
// module.exports = App;

var React = require('react');

function createChart () {
  console.log('IM NOW HEREEEE');
  var d3 = require("d3")

  var nodes = d3.range(7).map(function(i) { return { radius: Math.random() * 12 + 4} })

  var color = d3.scale.category10();
  var cy = 25;

  var width = 1000,
      height = 500;

  var drag = d3.behavior.drag()
      .origin(function() {
        var t = d3.select(this);
        return {
          x: t.attr("x") + d3.transform(t.attr("transform")).translate[0],
          y: t.attr("y") + d3.transform(t.attr("transform")).translate[1]};
        })
      .on("drag", dragmove)

  var svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height)
      .on("click", click);


  var circles = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("cy", cy)
      .attr("cx", function(d, i) { return i * 100 + 30})
      .attr("r", 20)
      .style("fill", function(d, i) { return color(i); })
      .call(drag);

   function dragmove(d) {
     var x = d3.event.x;
     var y = d3.event.y;
     d3.select(this)
      .attr("transform", "translate(" + x + "," + y + ")")
     d3.select(this).transition()
      .ease("elastic")
      .duration(500)
      .attr("r", 32);
   }

   function click(){
     console.log('CLICKED');
    if (d3.event.defaultPrevented) return;

    var point = d3.mouse(this)
    p = {x: point[0], y: point[1] };

    svg.append("circle")
        .attr("transform", "translate(" + p.x + "," + p.y + ")")
        .attr("r", "10")
        .style("fill", function(d, i) { return color(i); })
        .call(drag);
  }

  var click = 0;
  document.getElementById('button').addEventListener('click', function(){
    click += 1;
    if (click % 2 === 0) {
    circles.transition()
      .attr("cy", cy-=200).duration(1000)
      .attr("r", function(d) { return d.radius; })
    } else {
    circles.transition()
      .attr("cy", cy+=200).duration(1000)
      .attr("r", function(d) { return d.radius; })
    }
  })
}

var Chart = React.createClass({

  componentDidMount: function() {
    console.log('IM HEREEEE');
    createChart();
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

React.render(<Chart />, document.body);
