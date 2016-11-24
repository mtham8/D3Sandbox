// ======= ANIMATE WITH THE GENERAL UPDATE PATTERN ===========

import { setFill } from './better-org'
import { responsivefy } from './responsive-view'

const data = [
  {name: 'Alice', math: 37,   science: 62,   language: 54},
  {name: 'Billy', math: null, science: 34,   language: 85},
  {name: 'Cindy', math: 86,   science: 48,   language: null},
  {name: 'David', math: 44,   science: null, language: 65},
  {name: 'Emily', math: 59,   science: 73,   language: 29}
]

const margin = {
  top: 10,
  right: 10,
  bottom: 30,
  left: 60
}
const width = 400 - margin.left - margin.right
const height = 535 - margin.top - margin.bottom

const svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0])
const yAxis = d3.axisLeft(yScale)
svg.append('g').call(yAxis)

const xScale = d3.scaleBand()
  .paddingInner(0.2)
  .paddingOuter(0.5)
  .domain(data.map(d => d.name))
  .range([0, width])
const xAxis = d3.axisBottom(xScale)

// get the scale to the bottom of the chart
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)

export const render = sub => {
  const t = d3.transition().duration(500)

  const update = svg.selectAll('rect')
    .data(data.filter(d => d[sub]), d => d.name)

  // slide out the data that are null
  update.exit()
    .transition(t)
    .attr('y', height)
    .attr('height', 0)
    .remove() // remove any rect that doesn't have data

  // update the remaining elements
  update
    .transition(t)
    .delay(500)
    .attr('y', d => yScale(d[sub]))
    .attr('height', d => height - yScale(d[sub]))

  // add new elements with data
  update
    .enter()
    .append('rect')
    .transition(t)
      .attr('y', height)
      .attr('height', 0)
      .attr('x', d => xScale(d.name))
      .attr('width', d => xScale.bandwidth())
    .transition(t)
      .delay(update.exit().size() ? 500 : 0)
      .attr('y', d => yScale(d[sub]))
      .attr('height', d => height - yScale(d[sub]))
}
