// ======= CREATE DOM ELEMENTS ===========
/*
var button = d3.select('.title')
  // .append('button') // changes the selected element
  .insert('button', 'a:first-child') // insert has a 'type' and `before` arg
    .html('Inventory <b>SALE</b>')
*/

// remove element
// d3.select('.action').remove()
d3.select('.title')
  .append('div')
    .style('color', 'green')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .style('display', 'block')
    .text('submit')
