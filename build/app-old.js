const app = {

  init: () => {
    app.solidShape();
    app.shapeInsideShape();
    app.coordinateShape();
    // app.linePath();
    app.dynamicSpace();
    app.scales();
    app.groupingEl();
    app.text();
    app.axes();
    app.barGraph();
    app.opacity();
    app.scatterplot();

  },

  solidShape: () => {
    let storage = [1, 2, 3, 4];
    let p = d3.select("body").selectAll("p")
      .data(storage)
      .enter()
      .append("p")
      .text( (data, i) => nectar = 'index ' + i + ' & ' + data )
      // the data operator .data(data) joins an array of data with the current selection
      // .enter() only allows chaining of append, insert, and select operators

    // CIRCLE:
    d3.select("body")
      .append("p")
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
    const svgSelection = bodySelection.append("p")
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
      .attr("r", data => data.r )
      .style("fill", data => data.color )
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
    let circleAttr = circle.attr("cx", data => data.xAxis )
      .attr("cy", data => data.yAxis )
      .attr("r", 20)
      .style("fill", data => data.color )
  },

  // linePath: () => {
  //   // data for the line
  //   let lineData = [
  //   {"x": 1, "y": 5}, {"x": 20, "y": 20},
  //   {"x": 40, "y": 10}, {"x": 60, "y": 40},
  //   {"x": 80, "y": 5}, {"x": 100, "y": 60},
  //   {"x": 120, "y": 30}, {"x": 140, "y": 70},
  //   {"x": 160, "y": 140}, {"x": 180, "y": 100}
  //   ];

  //   // path generator
  //   let lineFunction = d3.svg.line()
  //     .x( d => d.x )
  //     .y( d => d.y )
  //     .interpolate("cardinal");
  //     // .interpolate("linear") is in the accessor function tells the SVG Path to draw straight lines.

  //   // svg container
  //   let svgLine = d3.select("body").append("svg")
  //     .attr("width", 200)
  //     .attr("height", 200);

  //   // line svg path
  //     // .append("path") is used because we really only have one data object (a set of x,y coordinates),
  //     // so we do not need to selectAll(), .enter(), append() like we have with other data sets.
  //     // .attr("d", lineFunction(lineData)) is where the magic happens. This is where we send the data
  //     // to the accessor function which returns the SVG Path Commands.
  //   let lineGraph = svgLine.append("path")
  //     .attr("d", lineFunction(lineData))
  //     .attr("stroke", "#09765A")
  //     .attr("stroke-width", 2)
  //     .attr("fill", "none");
  // },

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
        .attr("x", d => d.x_axis )
        .attr("y", d => d.y_axis )
        .attr("height", d => d.height )
        .attr("width", d => d.width )
        .style("fill", d => d.color );

  },

  scales: () => {
    let initialData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000]; // domain
    let newScaleData = []; // range
    let max = d3.max(initialData);
    let min = d3.min(initialData);
    // This constructs a new linear scale with the default domain [0,1] to range [0,1] which produces a mapping of 1:1
    let linearScale = d3.scaleLinear()
      .domain([min, max])
      .range([0, 100]);
    console.log('this is linearScale', linearScale)

    for (let i = 0; i < initialData.length; i++) {
      newScaleData[i] = linearScale(initialData[i]);
    }
    console.log(newScaleData);
  },

  // grouping elements that share the same attributes
  // transform - to define a new coordinate system for set of svg elements by applying
  // a transformation to each coordinate specified in this set of svg elements
  groupingEl: () => {
    let circleData = [
    { "cx": 30, "cy": 30, "radius": 20, "color" : "#90CC54" },
    { "cx": 70, "cy": 70, "radius": 20, "color" : "#B1DFF8" }
    ];

    let rectData = [
    { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "#09765A" },
    { "rx": 150, "ry": 150, "height": 30, "width": 30, "color" : "#6BBFD5" }
    ];

    let svgContain = d3.select("body").append("svg")
      .attr("width", 200)
      .attr("height", 200)
      // .style("border", "1px solid black");

    let circleGroup = svgContain.append("g")
      .attr("transform", "translate(80,0)");

    let circles = circleGroup.selectAll("circle")
      .data(circleData)
      .enter()
      .append("circle");

    let circleAttr = circles.attr("cx", d => d.cx )
      .attr("cy", d => d.cy )
      .attr("r", d => d.radius )
      .style("fill", d => d.color );

    let rectGroup = svgContain.append("g");

    let rect = rectGroup.selectAll("rect")
      .data(rectData)
      .enter()
      .append("rect");

    let rectAttr = rect.attr("x", d => d.rx )
      .attr("y", d => d.ry )
      .attr("height", d => d.height )
      .attr("width", d => d.width )
      .style("fill", d => d.color );
  },

  text: () => {
    let circleData = [
    { "cx": 40, "cy": 40, "radius": 20, "color" : "#09765A" },
    { "cx": 40, "cy": 100, "radius": 20, "color" : "#6BBFD5" }
    ];

    let svgContainer = d3.select('body').append("svg")
      .attr("width", 200)
      .attr("height", 200);

    let circles = svgContainer.selectAll("circle")
      .data(circleData)
      .enter()
      .append("circle");

    let circleAttr = circles.attr("cx", d => d.cx )
      .attr("cy", d => d.cy )
      .attr("r", d => d.radius )
      .style("fill", d => d.color );

    let texts = svgContainer.selectAll("text")
      .data(circleData)
      .enter()
      .append("text");

    let textAttr = texts.attr("x", d => d.cx )
      .attr("y", d => d.cy )
      .text(d => "(" + d.cx + "," + d.cy + ")" + " coordinates" )
      .attr("font-family", "'Helvetica', sans-serif")
      .attr("font-size", "12px")
      .attr("fill", "black");
  },

  axes: () => {
    let initialData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];
    let min = d3.min(initialData);
    let max = d3.max(initialData);
    // scale for the axis
    let aScale = d3.scaleLinear()
      .domain([min, max])
      .range([0, 400]);
    // // svg viewport
    let svgCont = d3.select("body").append("svg")
      .attr("width", 500)
      .attr("height", 100);
    // axis
    // let xAxis = d3.svg.axis()
    //   .scale(aScale);
    let xAxis = svgCont.append("g")
      .call(d3.axisBottom(aScale));
    // group Element for the axis elements and call the xAxis function
    // let axisGroup = svgCont.append("g")
    //   .call(xAxis)
  },

  barGraph: () => {
    let dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
    // let dataset = []; // create random data set
    // for (var i = 0; i < 20; i++) {
    //   let newNum = Math.random() * 30;
    //   dataset.push(newNum);
    // }
    let w = 500;
    let h = 100;
    let barPadding = 1;
    let svg = d3.select("body").append("svg")
      .attr("height", h)
      .attr("width", w)
    let bars = svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * (w/dataset.length) ) // create evenly spaced bars
      .attr("y", d => h - (d * 4) ) // set the bar graph to be from bottom-up, instead of up-bottom
      .attr("width", w/dataset.length - barPadding) // create dynamic width based on number of data values
      .attr("height", d => d * 4 ) // create height of bars based on data value
      .attr("fill", d => "rgb(0, 0, " + (d * 10) + ")" ) // create color of bars based on data
    let text = svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * (w/dataset.length) + (w/dataset.length - barPadding) / 2) // set x to the left edge of each bar plus half the bar width
      .attr("y", d => h - (d * 4) + 14 )
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white")
      .attr("text-anchor", "middle");
  },

  opacity: () => {
    let data = [5, 10, 15, 20, 25];
    let width = 500;
    let height = 80;
    let svg = d3.select("body").append("svg")
      .attr("height", height)
      .attr("width", width)
    let circle = svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
    let attributes = circle.attr("cx", (d, i) => (i*50)+25 )
      .attr("cy", height/2)
      .attr("r", d => d )
      .attr("fill", "#09765A")
      .attr("stroke", "#6BBFD5")
      .attr("stroke-width", d => d/2 )
      .attr("opacity", d => d/20 );
  },

  scatterplot: () => {
    let dataset = [
      [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
      [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
      ];
    let w = 600;
    let h = 100;
    let rScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, d => d[1]) ])
                     .range([2, 5]);
    // create svg element
    let svg = d3.select("body").append("svg").attr("height", h).attr("width", w);
    let circles = svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", d => d[0])
      .attr("cy", d => d[1])
      .attr("r", d => rScale(d[1])) // radius corresponds to y-axis
      .attr("fill", "#09765A")

    let texts = svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text");

    let textAttr = texts.attr("x", d => d[0] )
      .attr("y", d => d[1] )
      .text(d => "(" + d[0] + "," + d[1] + ")" )
      .attr("font-family", "'Helvetica', sans-serif")
      .attr("font-size", "10px")
      .attr("fill", "black");
  }

}

app.init();












