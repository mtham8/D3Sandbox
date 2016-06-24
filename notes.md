**Visualizing Data:**

1. _Acquire:_ Obtain the data, whether from a file on a disk or a source over a network.

2. _Parse:_ Provide some structure for the data's meaning, and order it into categories.
  The amount of Data one can collect and analyze is immense. It is necessary to put the data you collect it into a structure.
  This structure will make it easier to know convey to others what data you have by format, tags, names, and indices.

3. _Filter:_ Remove all but the data of interest.
  After putting the data into a structure. You will have to filter out the data that is not necessary
  for your Data Visualization. If you are doing a specific gender visualization, you would have to remove
  the genders you did not want in your data set.

4. _Mine:_ Apply methods from statistics or data mining as a way to discern patterns or place the data in mathematical context.

5. _Represent:_ Choose a basic visual model, such as a bar graph, list, or tree.

6. _Refine:_ Improve the basic representation to make it clearer and more visually engaging.

7. _Interact:_ Add methods for manipulating the data or controlling what features are visible.

When defining the circle SVG shape, three necessary attributes are attached:
cx - The x-axis coordinate of the center of the circle.
cy - The y-axis coordinate of the center of the circle.
r - The radius of the circle.

SVG Coordinate Space works in the same way that mathematical graph coordinate space
works except for two important features:
1 - SVG Coordinate space has x=0 and y=0 coordinates fall on the top left.
2 - SVG Coordinate space has the Y coordinate growing from top to bottom.
Which means as Y increases, the coordinates move down, not up.

D3.js has built in functionality to load in the following types of external resources:
  an XMLHttpRequest
  a text file
  a JSON blob
  an HTML document fragment
  an XML document fragment
  a comma-separated values (CSV) file
  a tab-separated values (TSV) file
Each of these resources will return data that D3.js can then use. The only thing to pay attention to is to
make sure you construct an array out of the data.

CIRCLE:
The important attributes we need to draw an SVG Circle in D3.js are - cx, cy and r.
<svg width="50" height="50">
  <circle cx="25" cy="25" r="25" fill="purple" />
</svg>

<svg width="50" height="50">
  <ellipse cx="25" cy="25" rx="15" ry="10" fill="red" />
</svg>

SQUARE:
The important attributes we need to draw an SVG Rectangle in D3.js are - x, y, width and height.
<svg width="50" height="50">
  <rect x="0" y="0" width="50" height="50" fill="green" />
</svg>

LINE:
The important attributes we need to draw an SVG Straight Line in D3.js are - x1, y1, x2, y2, stroke-width and stroke.
<svg width="50" height="50">
  <line x1="5" y1="5" x2="40" y2="40" stroke="gray" stroke-width="5"  />
</svg>
Make sure to give the line:
.attribute("stroke-width", NUMBER), where NUMBER is how wide the line is in units
.attribute("stroke", "COLOR"), where COLOR is a color to used to color the line

POLYGON:
<svg width="50" height="50">
  <polygon fill="yellow" stroke="blue" stroke-width="2"
    points="05,30
            15,10
            25,30" />
</svg>

POLYLINE:
<svg width="50" height="50">
   <polyline fill="none" stroke="blue" stroke-width="2"
     points="05,30
             15,30
             15,20
             25,20
             25,10
             35,10" />
 </svg>

SVG PATH:
SVG Paths represent the outline of a shape that can be stroked, filled, used as a clipping path, or any combination of all three.
The shape of an SVG Path element is defined by one attribute: d.

This attribute, d, contains a series of commands and parameters in the SVG Path Mini-Language.

These commands and parameters are a sequential set of instructions for how to "move the pen over the paper".

The instructions are defined in case-senstive terms of moveto (set a new current point), lineto (draw a straight line),
curveto (draw a curve using a cubic Bézier), arc (elliptical or circular arc) and closepath (close the current shape by
drawing a line to the last moveto).
<svg width="100" height="100">
  <path d=" M 10 25
            L 10 75
            L 60 75
            L 10 25"
            stroke="red" stroke-width="2" fill="none" />
</svg>
The d=" M 10 25 ......" part of the SVG code above is the set of instructions we are giving our SVG Pen.
In this case (all in the SVG Coordinate System - X coordinate first, then Y coordinate):
M 10 25 - Put the pen down at 10 25
L 10 75 - Draw a line to the point 10 75, from the previous point 10 25
L 60 75 - Draw a line to the point 60 75, from the previous point 10 75
L 10 25 - Draw a line to the point 10 25, from the previous point 60 75
Note - our letters (M, L) are capitalized which means that we were using absolute positioning within our SVG Viewing window.
If we use lower case commands, then we will be using relative positioning.
d3.svg.line - create a new line generator
d3.svg.line.radial - create a new radial line generator
d3.svg.area - create a new area generator
d3.svg.area.radial - create a new radial area generator
d3.svg.arc - create a new arc generator
d3.svg.symbol - create a new symbol generator
d3.svg.chord - create a new chord generator
d3.svg.diagonal - create a new diagonal generator
d3.svg.diagonal.radial - create a new radial diagonal generator


SCALING:
To do the transformation, we can follow this algorithm:
Figure out what the largest number in the original interval is ( -> 10000 )
Figure out what the smallest number in the original interval is ( -> 0)
Figure out the difference between the two original interval numbers ( -> 10000 - 0 = 10000 )
Figure out what the largest number in the new interval is ( -> 100 )
Figure out what the smallest number in the new interval is ( -> 0 )
Figure out the difference between the two new interval numbers ( -> 100 - 0 = 100 )
Divide the original interval difference between the new interval difference ( -> 10000 / 100 = 100 )
This tells us that 100 units of the original interval are equal to 1 unit of the new interval
This is called a linear scaling (y = mx + b , where b=0 and m = 1/100)

D3.js comes with Quantitative Scales (one of which we've already covered - Linear) and Ordinal Scales.

The Quantitative scales have a continuous domain such as dates, times, real numbers, etc...
The Ordinal scales are for discrete domains - like names, categories, colors, etc...
The D3.js scales are:
Identity: a special kind of linear scale, 1:1, good for pixel values. input == output
Linear: transforms one value in the domain interval into a value in the range interval
Power and Logarithmic scales: sqrt, pow, log – used for exponentially increasing values
Quantize and Quantile scales: for discrete sets of unique possible values for inputs or outputs
Ordinal: for non quantitative scales, like names, categories, etc

SVG TRANSFORM ATTRIBUTE:
<svg width="200" height="200">
2  <g transform="translate(...) scale(...) rotate(...) translate(...) rotate(...)">
3    ...
4  </g>
5</svg>










