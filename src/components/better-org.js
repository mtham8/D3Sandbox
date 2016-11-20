import { scores } from './start-visual'

// ======= BETTER CODE ORGANIZATION WITH SELECTION.CALL() ===========

const scaleBar = (selection, scale) => selection.style('transform', `scaleX(${scale})`)

const fade = (selection, opacity) => selection.style('fill-opacity', opacity)

const setFill = (selection, color) => selection.style('fill', color)

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
    .on('mouseover', function(d, i, elements){
      d3.select(this)
        .call(scaleBar, 2)
        .call(setFill, 'teal')

      d3.selectAll(elements)
        .filter(':not(:hover)')
        .call(fade, 0.5)
    })
    .on('mouseout', function(d, i, elements){
      d3.select(this).call(scaleBar, 1)

      d3.selectAll(elements)
        .call(fade, 1)
        .call(setFill, 'lightgreen')
    })

bar.append('text')
  .attr('y', 20) // distance from top of element
  .attr('x', 5) // distance from left of element
  .text(d => d.name)
