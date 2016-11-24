// ======= DEBUGGING D3 ===========

/**
 * $0.__data__ ==> shows your the data of the selected element
 */

import { setFill, fade } from './better-org'
import { responsivefy } from './responsive-view'
/*
const margin = {
  top: 10,
  right: 20,
  bottom: 60,
  left: 30
}
const width = 400 - margin.left - margin.right
const height = 565 - margin.top - margin.bottom

const svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

d3.json('../debug-data.json', (err, data) => {
  const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0])
    .nice()
  const yAxis = d3.axisLeft(yScale)
  svg.append('g').call(yAxis)

  const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width])
    .nice()
  const xAxis = d3.axisBottom(xScale).ticks(5)

  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis)

  const circles = svg
    .selectAll('.ball')
    .data(data)
    .enter()
    .append('g')
      .attr('class', 'ball')
      .attr('transform', d => `translate(${xScale(d.x)}, ${yScale(d.y)})`)

  circles
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => d.r)
    .call(setFill, 'steelblue')
    .call(fade, 0.5)

  circles
    .append('text')
    .style('text-anchor', 'middle')
    .call(setFill, 'black')
    .attr('y', 4)
    .text(d => d.code)
})
*/
