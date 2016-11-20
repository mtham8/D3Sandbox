import { scores } from './start-visual'
// ======= OUTPUT SVG ELEMENTS WITH D3V4 ===========
d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('rect')
  .data(scores)
  .enter()
    .append('rect')
    .attr('y', (d, i) => i * 33)
    .style('width', d => d.score)
    .text(d => d.name)
    .attr('class', 'bar')

