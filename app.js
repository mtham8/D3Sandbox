const app = {

  init: () => {
    app.playingAround();
  },

  playingAround: () => {
    let storage = [1, 2, 3, 4];
    let p = d3.select("body").selectAll("p")
      .data(storage)
      .enter()
      .append("p")
      .text( (data, i) => {
        let bass = 808;
        let nectar;
        nectar = 'this is i ' + i + ' ' + data + bass;
        return nectar;
      })
      // the data operator .data(data) joins an array of data with the current selection
      // .enter() only allows chaining of append, insert, and select operators

    // CIRCLE:
    // <svg width="50" height="50">
    //   <circle cx="25" cy="25" r="25" fill="green" />
    // </svg>
    d3.select("body")
      .append("div")
      .append("svg") // append an element as the last child of the element in the current selection
      .attr("width", 30) // add on attributes
      .attr("height", 30)
      .append("circle")
      .attr("cx", 15)
      .attr("cy", 15)
      .attr("r", 15)
      .style("fill", "#09765A");

    // SQUARE:
    // <svg width="50" height="50">
    //   <rect x="0" y="0" width="50" height="50" fill="green" />
    // </svg>
    // d3.select("body")
    //   .append("div")
    //   .append("svg")
    //   .attr("width", 30)
    //   .attr("height", 30)
    //   .append("rect")
    //   .attr("x", 0)
    //   .attr("y", 0)
    //   .attr("width", 30)
    //   .attr("height", 30)
    //   .style("fill", black)
    const bodySelection = d3.select("body");
    const svgSelection = bodySelection.append("div")
      .append("svg")
      .attr("width", 30)
      .attr("height", 30)
    const squareSelection = svgSelection.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 30)
      .attr("height", 30)
      .style("fill", "#90CC54")
  }

}
