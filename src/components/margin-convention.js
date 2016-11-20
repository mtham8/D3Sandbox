// ======= MARGIN CONVENTION ===========

const margin = {
  top: 0,
  right: 0,
  bottom: 25,
  left: 25
}

const width = 425 - margin.left - margin.right
const height = 625 - margin.top - margin.bottom

const svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.left + margin.right)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg.append('rect')
  .attr('width', width/2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green')

svg.append('rect')
  .attr('x', width/2)
  .attr('width', width/2)
  .attr('height', height)
  .style('fill', 'peru')
  .style('stroke', 'green')
