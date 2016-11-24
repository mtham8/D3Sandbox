// ======= CREATE CHART AXES WITH D3V4 ===========

// same example from margin-convention

import { setFill } from './better-org'

const margin = {
  top: 10,
  right: 0,
  bottom: 30,
  left: 40
}

const width = 425 - margin.left - margin.right
const height = 625 - margin.top - margin.bottom

const container = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

container.append('rect')
  .attr('width', width/2)
  .attr('height', height)
  .call(setFill, 'lightblue')
  .style('stroke', 'green')

const yScale = d3.scaleLinear()
  .domain([0, 500])
  .range([height, 0]) // y dimension runs from top to bottom

// d3 makes creates its own ticks unless specified ==> d3.axisLeft(yScale).ticks(5, '.2s')
// absolute control on ticks ==> d3.axisLeft(yScale).tickValues([8, 19, 43, 77])
const yAxis = d3.axisLeft(yScale)
container.call(yAxis)

const xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date(2016, 1, 1)])
  .range([0, width])

const xAxis = d3.axisBottom(xScale)
container.call(xAxis)
