import { scores } from './start-visual'
// ======= OUTPUT SVG ELEMENTS WITH D3V4 ===========
// ======= SVG GRAPHIC CONTAINERS AND TEXT ELEMENTS ===========

const bar = d3.select('.chart')
  .append('svg') // create svg container
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g') // create a collection of g elements
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0,${i*33})`)

// append rectangle and text to g elements
bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')

bar.append('text')
  .attr('y', 20) // distance from top of element
  .attr('x', 5) // distance from left of element
  .text(d => d.name)

