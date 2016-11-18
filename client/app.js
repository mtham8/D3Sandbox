// document.body.innerHTML = `<h1>D3 version: ${d3.version}</h1>`;

// ======= CONVERT INPUT DATA TO OUTPUT VALUES ===========
// linear scale ==> takes a continous input `domain` and maps it to a continuous output `range`, while maintaining proportions
const linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true)
  // clamp ==> makes sure your values are within the scale
/*
console.log(linearScale(0))
console.log(linearScale(50))
console.log(linearScale(105))
// invert ==> converts number into domain
console.log(linearScale.invert(300))
*/

// ======= CONVERT DATES TO NUMERICAL VALUES WITH TIME SCALES ===========
const timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100])
/*
console.log(timeScale(new Date(2016, 0, 15)))
console.log(timeScale(new Date(2016, 4, 15)))
console.log(timeScale(new Date()))
*/

// ======= CREATE LABELS FROM NUMERIC DATA WITH QUANTIZE SCALES ===========
// quantize scale ==> good to use if you want to map all of your input data to a specific set of output values
const quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(['red', 'white', 'green']) // 0-100 broken into three pieces bc three colors
/*
console.log(quantizeScale(22))
console.log(quantizeScale(50))
console.log(quantizeScale(88))
console.log(quantizeScale.invertExtent('white')) // white is going to be anything from 33.3-66.6
*/

// ======= CREATE LABELS FROM NON-NUMERIC DATA WITH ORDINAL SCALES ===========
const ordinalScale = d3.scaleOrdinal()
  .domain(['poor', 'good', 'great'])
  .range(['red', 'white', 'green'])
/*
console.log(ordinalScale('good'))
console.log(ordinalScale('great'))
console.log(ordinalScale('poor'))
*/

// ======= LOAD AND INSPECT DATA ===========
// loading data ==> d3.json
const dataJSON = d3.json('data.json', data => {
  // get minimum element
  let min = d3.min(data, d => d.age)
  // console.log('this is min ==> ', min)

  // get maximum element
  let max = d3.max(data, d => d.age)
  // console.log('this is max ==> ', max)

  // get min and max
  let extent = d3.extent(data, d => d.age)
  // console.log('this is both ==> ', extent)

  let scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600])
    // console.log('this is scaled value ==> ', scale(24))

  // for unique values, use d3.set()
  let ages = d3.set(data, d => d.age)
  // console.log('this is set of unique values ==> ', ages.values())
})
// console.log(dataJSON)

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

// ======= START VISUALIZING D3 ===========
const scores = [
  {name: 'Alice', score: 96},
  {name: 'Billy', score: 83},
  {name: 'Cindy', score: 91},
  {name: 'David', score: 96},
  {name: 'Emily', score: 88},
]

const update = d3.select('.chart')
  .selectAll('div')
  .data(scores, function(d){
    return d ? d.name : this.innerText
  }) // to make sure data already on the DOM doesn't get repeated
  .style('color', 'blue')

update.enter()
  .append('div') // this tells d3 to append a div to each of the data items that aren't appended to an element
  .text(d => d.name)
    .style('color', 'green')

update.exit().remove()

















