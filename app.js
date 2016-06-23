const app = {

  init: () => {
    app.solidShape();
    app.shapeInsideShape();
    app.coordinateShape();

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
  },

  // style SVG elements based on data
  shapeInsideShape: () => {
    let circleRadii = [40, 30, 20, 10];
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
        return data;
      })
      .style("fill", (data) => {
        let returnColor;
        if(data === 40) returnColor = "#90CC54";
        else if(data === 30) returnColor = "#B1DFF8";
        else if(data === 20) returnColor = "#09765A";
        else if(data === 10) returnColor = "#6BBFD5";
        return returnColor;
      })
  },

  coordinateShape: () => {
    let spaceCircles = [30, 70, 110, 150];
    let svgSpace = d3.select("body").append("svg")
      .attr("width", 200)
      .attr("height", 200);
    let circle = svgSpace.selectAll("circle")
      .data(spaceCircles)
      .enter()
      .append("circle");
    let circleAttr = circle.attr("cx", (data) => { return data; })
      .attr("cy", (data) => { return data; })
      .attr("r", 20)
      .style("fill", (data) => {
        let color;
        if(data === 30) color = "#90CC54";
        else if(data === 70) color = "#B1DFF8";
        else if(data === 110) color = "#09765A";
        else if(data === 150) color = "#6BBFD5";
        return color;
      })
  }

}













