const app = {

  init: () => {
    app.solidShape();
    app.shapeInsideShape();
    app.coordinateShape();
    app.linePath();
    app.dynamicSpace();
    app.scales()

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
  // manually adjusting svg container space
    let jsonRect = [
    { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "#90CC54" },
    { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "#B1DFF8" },
    { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "#09765A" }
    ];
    // variables to hold the updated coordinates
    let max_x = 0;
    let max_y = 0;

    for (let i = 0; i < jsonRect.length; i++) {
      let temp_x, temp_y;
      // farthest right hand point
      temp_x = jsonRect[i].x_axis + jsonRect[i].width;
      // farthest bottom point
      temp_y = jsonRect[i].y_axis + jsonRect[i].height;

      if(temp_x >= max_x) {
        max_x = temp_x;
      }
      if(temp_y >= max_y) {
        max_y = temp_y;
      }
    }

    let svgContainer = d3.select("body").append("svg")
      .attr("width", max_x + 20)
      .attr("height", max_y + 20);

    let rectangles = svgContainer.selectAll("rect")
        .data(jsonRect)
        .enter()
        .append("rect");

    let rectangleAttributes = rectangles
        .attr("x", (d) => { return d.x_axis; })
        .attr("y", (d) => { return d.y_axis; })
        .attr("height", (d) => { return d.height; })
        .attr("width", (d) => { return d.width; })
        .style("fill", (d) => { return d.color; });

  },

  scales: () => {
    let initialData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000]; // domain
    let newScaleData = []; // range
    // This constructs a new linear scale with the default domain [0,1] to range [0,1] which produces a mapping of 1:1
    let linearScale = d3.scale.linear()
      .domain([0, 10000])
      .range([0, 100]);
    for (let i = 0; i < initialData.length; i++) {
      newScaleData[i] = linearScale(initialData[i]);
    }
    console.log(newScaleData);
  }

}













