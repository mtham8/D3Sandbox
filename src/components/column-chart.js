// ======= BUILD A COLUMN CHART ===========

// same example from responsive-view

import { setFill } from './better-org'
import { responsivefy } from './responsive-view'

/*

const data = [
  {score: 63, subject: 'Mathematics'},
  {score: 82, subject: 'Geography'},
  {score: 74, subject: 'Spelling'},
  {score: 97, subject: 'Reading'},
  {score: 52, subject: 'Science'},
  {score: 74, subject: 'Chemistry'},
  {score: 97, subject: 'Physics'},
  {score: 52, subject: 'ASL'}
]

const margin = {
  top: 10,
  right: 20,
  bottom: 30,
  left: 60
}
const width = 400 - margin.left - margin.right
const height = 565 - margin.top - margin.bottom

const svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
    // .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0])
const yAxis = d3.axisLeft(yScale)
svg.call(yAxis)

const xScale = d3.scaleBand()
  .paddingInner(0.2)
  .paddingOuter(0.5)
  .domain(data.map(d => d.subject))
  .range([0, width])
const xAxis = d3.axisBottom(xScale).ticks(5)

// get the scale to the bottom of the chart
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
  .selectAll('text')
  .style('text-anchor', 'end')
  .attr('transform', 'rotate(-45)')

// data join
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
    .attr('x', d => xScale(d.subject))
    .attr('y', d => yScale(d.score))
    .attr('width', d => xScale.bandwidth())
    .attr('height', d => height - yScale(d.score))

*/
