var app = {

  init: function () {
    app.playingAround();
  },

  playingAround: function () {
    // d3.select("body").append("p");

    // <svg width="50" height="50">
    //   <circle cx="25" cy="25" r="25" fill="green" />
    // </svg>
    d3.select("body")
      .append("svg")
      .attr("width", 50)
      .attr("height", 50)
      .append("circle")
      .attr("cx", 25)
      .attr("cy", 25)
      .attr("r", 25)
      .style("fill", "green");
  }
}
