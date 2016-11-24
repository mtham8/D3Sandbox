// ======= MAKE D3V4 CHARTS RESPONSIVE WITH viewBox ATTRIBUTE ===========
// understanding svg coordinates and transform ==> https://sarasoueidan.com/blog/svg-coordinate-systems/
// same example from chart-axes

/**
 * viewBox = <min-x> <min-y> <width> <height>
 */

import { setFill } from './better-org'

const margin = {
  top: 10,
  right: 0,
  bottom: 60,
  left: 40
}

// svg = d3.select('svg')
const responsivefy = svg => {
  // get container + svg aspect ratio
  let container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style('width')),
      height = parseInt(svg.style('height')),
      aspect = width/height

  // get width of container and resize svg to fit it
  const resize = cb => {
    let targetWidth = parseInt(container.style('width'))
    svg.attr('width', targetWidth)
    svg.attr('height', Math.round(targetWidth/aspect))
  }

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on intial page load
  svg.attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize)

  // to register multiple listeners for same event type,
  // you need to add namespace, ie., 'click.foo'
  // necessary if you call invoke this function for multiple svg
  // api docs: https://github.com/mbostock/d3/wiki/Selection#on
  d3.select(window).on(`resize.${container}.attr('id')`, resize)

}

const width = 425 - margin.left - margin.right
const height = 625 - margin.top - margin.bottom

const svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .call(setFill, 'lightblue')
  .style('stroke', 'green')

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0])
const yAxis = d3.axisLeft(yScale)
svg.call(yAxis)

const xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
  .range([0, width])
const xAxis = d3.axisBottom(xScale).ticks(5)

// get the scale to the bottom of the chart
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
