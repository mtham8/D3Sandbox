var app = {

  init: function () {
    app.playingAround();
  },

  playingAround: function () {
    // d3.select("body").append("p");

    // CIRCLE:
    // <svg width="50" height="50">
    //   <circle cx="25" cy="25" r="25" fill="green" />
    // </svg>
    d3.select("body")
      .append("div")
      .append("svg") // append an element
      .attr("width", 30) // add on attributes
      .attr("height", 30)
      .append("circle")
      .attr("cx", 15)
      .attr("cy", 15)
      .attr("r", 15)
      .style("fill", "green");
    // The Style Operator, if a name and value is specified, sets the CSS style property
    // for the given selection with the given specified value.

    // SQUARE:
    // <svg width="50" height="50">
    //   <rect x="0" y="0" width="50" height="50" fill="green" />
    // </svg>
    d3.select("body")
      .append("div")
      .append("svg")
      .attr("width", 30)
      .attr("height", 30)
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 30)
      .attr("height", 30)
      .style("fill", black)

}
