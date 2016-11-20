// ======= SELECT AND MODIFY DOM ELEMENTS ===========
const div = d3.select('div')
// to select multiple items ==> d3.selectAll
// console.log(div.nodes())
const divLinks = div.selectAll('a')
// console.log(divLinks.nodes())
// alternatively ==> console.log(d3.selectAll('div a').nodes()) // [a, a, a]
const actionLink = d3.select('.action')
// console.log(actionLink.nodes())

// add attributes or style to element
const secondLink = d3.select('a:nth-child(2)')
  .attr('href', 'http://google.com')
  // .style('color', 'red')
  .classed('red', true) // adds CSS classes to element
  // .text('Inventory') // changes the text to 'Inventory'
  .html('Inventory <b>SALE</b>')
// console.log(secondLink.attr('href'))
