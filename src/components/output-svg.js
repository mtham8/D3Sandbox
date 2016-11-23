import { scores } from './start-visual'
// ======= OUTPUT SVG ELEMENTS WITH D3V4 ===========
// ======= SVG GRAPHIC CONTAINERS AND TEXT ELEMENTS ===========
// ======= BASIC INTERACTIVITY WITH D3V4 ===========

/*
export const bar = d3.select('.chart')
  .append('svg') // create svg container
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g') // create a collection of g elements
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0,${i*33})`) // you have to transform the element to the position you want it

// append rectangle and text to g elements
bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')
    .on('mouseover', function(d, i, elements){
      d3.select(this).style('transform', 'scaleX(2)') // increase the bar width on hover
      d3.selectAll(elements) // get all elements not on hover to lose opacity
        .filter(':not(:hover)')
        .style('fill-opacity', 0.5)
      // d3.select(this).classed('bar-on', true)
    })
    .on('mouseout', function(d, i, elements){
      d3.select(this).style('transform', 'scaleX(1)') // scale it back to normal when exit
      d3.selectAll(elements) // restore opacity when nothing is hovered
        .style('fill-opacity', 1)
      // d3.select(this).classed('bar-on', false)
    })

bar.append('text')
  .attr('y', 20) // distance from top of element
  .attr('x', 5) // distance from left of element
  .text(d => d.name)
*/
