const app = {

  init: () => {
    app.solidShape();
    app.shapeInsideShape();
    app.coordinateShape();
    app.linePath();
    app.dynamicSpace();

  },

  solidShape: () => {
    let storage = [1, 2, 3, 4];
    let p = d3.select("body").selectAll("p")
      .data(storage)
      .enter()
      .append("p")
      .text( (data, i) => {
        let bass = 808;
        let nectar;
        nectar = 'This is i ' + i + ' ' + data + "-" + bass;
        return nectar;
      })
      // the data operator .data(data) joins an array of data with the current selection
      // .enter() only allows chaining of append, insert, and select operators

    // CIRCLE:
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
  },

  // style SVG elements based on data
  shapeInsideShape: () => {
    let circleRadii = [
    { "r": 40, "color" : "#90CC54" },
    { "r": 30, "color" : "#B1DFF8" },
    { "r": 20, "color" : "#09765A" },
    { "r": 10, "color" : "#6BBFD5" }
    ];
    let svgContainer = d3.select("body").append("svg")
      .attr("width", 100)
      .attr("height", 100);
    let circles = svgContainer.selectAll("circle")
      .data(circleRadii)
      .enter()
      .append("circle");
    let circleAttributes = circles.attr("cx", 50)
      .attr("cy", 50)
      .attr("r", (data) => {
        return data.r;
      })
      .style("fill", (data) => {
        return data.color;
      })
  },

  coordinateShape: () => {
    let spaceCircles = [
    { "xAxis": 30, "yAxis": 30, "color" : "#90CC54" },
    { "xAxis": 70, "yAxis": 70, "color" : "#B1DFF8" },
    { "xAxis": 110, "yAxis": 110, "color" : "#09765A" },
    { "xAxis": 150, "yAxis": 150, "color" : "#6BBFD5" }
    ];
    let svgSpace = d3.select("body").append("svg")
      .attr("width", 200)
      .attr("height", 200);
    let circle = svgSpace.selectAll("circle")
      .data(spaceCircles)
      .enter()
      .append("circle");
    let circleAttr = circle.attr("cx", (data) => { return data.xAxis; })
      .attr("cy", (data) => { return data.yAxis; })
      .attr("r", 20)
      .style("fill", (data) => { return data.color })
  },

  linePath: () => {
    // data for the line
    let lineData = [
    {"x": 1, "y": 5}, {"x": 20, "y": 20},
    {"x": 40, "y": 10}, {"x": 60, "y": 40},
    {"x": 80, "y": 5}, {"x": 100, "y": 60}
    ];

    // path generator
    let lineFunction = d3.svg.line()
      .x( d => { return d.x; })
      .y( d => { return d.y; })
      .interpolate("cardinal");
      // .interpolate("linear") is in the accessor function tells the SVG Path to draw straight lines.

    // svg container
    let svgLine = d3.select("body").append("svg")
      .attr("width", 200)
      .attr("height", 200);

    // line svg path
      // .append("path") is used because we really only have one data object (a set of x,y coordinates),
      // so we do not need to selectAll(), .enter(), append() like we have with other data sets.
      // .attr("d", lineFunction(lineData)) is where the magic happens. This is where we send the data
      // to the accessor function which returns the SVG Path Commands.
    let lineGraph = svgLine.append("path")
      .attr("d", lineFunction(lineData))
      .attr("stroke", "#09765A")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  },

  dynamicSpace: () => {

  }

}













