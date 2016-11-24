// ======= CREATE CHART AXES WITH D3V4 ===========

// same example from margin-convention

import { setFill } from './better-org'

const margin = {
  top: 10,
  right: 0,
  bottom: 60,
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
  .attr('width', width)
  .attr('height', height)
  .call(setFill, 'lightblue')
  .style('stroke', 'green')

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]) // y dimension runs from top to bottom

// d3 makes creates its own ticks unless specified ==> d3.axisLeft(yScale).ticks(5, '.2s')
// absolute control on ticks ==> d3.axisLeft(yScale).tickValues([8, 19, 43, 77])
const yAxis = d3.axisLeft(yScale)
container.call(yAxis)

const xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
  .range([0, width])

// ticks for every 45 mins ==> const xAxis = d3.axisBottom(xScale).ticks(d3.timeMinute.every(45))
const xAxis = d3.axisBottom(xScale)
  .ticks(5)
  .tickSizeInner(10)
  .tickSizeOuter(20) // longer ticks on the outside
  .tickPadding(15) // so that all the numbers are aligned

// get the scale to the bottom of the chart
container.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
