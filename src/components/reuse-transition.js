// ======= REUSE TRANSITIONS ===========

export const go = () => {
  const t = d3.transition()
  .delay(1000)
  .duration(1000)

  d3.selectAll('.block')
    .transition(t)
    .style('width', '400px')

  d3.select('.a')
    .transition(t)
    .style('background-color', 'orange')

  d3.select('.b')
    .transition(t)
    .style('background-color', 'blue')
}

const configure = (t, delay, duration) => t.delay(delay).duration(duration)

// properly pass in transiton into elements
export const goNow = cb => (
  d3.selectAll('.block')
    .transition()
    .call(configure, 1000, 1000)
    .style('height', '300px')
)
