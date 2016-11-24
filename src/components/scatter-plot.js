// ======= SCATTER PLOT ===========
/**
 * 1. append your data ==> d3.json(data, (error, data) => do something)
 * 2. create your xScale, yScale, and rScale
 * 3. join your data with elements via svg.selectAll('circle')
 * 4. set svg elements attributes to the defined scales (x, y r)
 */
import { setFill, fade } from './better-org'
import { responsivefy } from './responsive-view'

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

d3.json('../scatter-data.json', (err, data) => {
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.expectancy))
    .range([height, 0])
    .nice()
  const yAxis = d3.axisLeft(yScale)
  svg.call(yAxis)

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.cost))
    .range([0, width])
    .nice()
  const xAxis = d3.axisBottom(xScale).ticks(5)

  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis)

  // create a circle
  const rScale = d3.scaleSqrt()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, 40])

  const circles = svg
    .selectAll('.ball')
    .data(data)
    .enter()
    .append('g')
      .attr('class', 'ball')
      .attr('transform', d => `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`)

  circles
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => rScale(d.population))
    .call(setFill, 'steelblue')
    .call(fade, 0.5)

  circles
    .append('text')
    .style('text-anchor', 'middle')
    .call(setFill, 'black')
    .attr('y', 4)
    .text(d => d.code)
})
