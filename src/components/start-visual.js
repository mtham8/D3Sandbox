// ======= START VISUALIZING D3 ===========
export const scores = [
  {name: 'Alice', score: 96},
  {name: 'Billy', score: 83},
  {name: 'Cindy', score: 91},
  {name: 'David', score: 96},
  {name: 'Emily', score: 88},
]
/*
const update = d3.select('.chart')
  .selectAll('div')
  .data(scores, function(d){
    return d ? d.name : this.innerText
  }) // to make sure data already on the DOM doesn't get repeated ==> this is set the the DOM element
  .style('color', 'blue')

const enter = update.enter() // this adds new elements
  .append('div') // this tells d3 to append a div to each of the data items that aren't appended to an element
  .text(d => d.name)
    .style('color', 'green')

update.exit().remove() // this removes element that don't have data appended

update.merge(enter)
  .style('width', d => `${d.score}px`)
  .style('height', '50px')
  .style('background', 'lightgreen')
  .style('border', '1px solid black')
*/
