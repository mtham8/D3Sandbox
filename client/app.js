// document.body.innerHTML = `<h1>D3 version: ${d3.version}</h1>`;

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

const timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100])
/*
console.log(timeScale(new Date(2016, 0, 15)))
console.log(timeScale(new Date(2016, 4, 15)))
console.log(timeScale(new Date()))
*/

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

const div = d3.select('div')
// to select multiple items ==> d3.selectAll
// console.log(div.nodes())
const divLinks = div.selectAll('a')
// console.log(divLinks.nodes())
// alternatively ==> console.log(d3.selectAll('div a').nodes()) // [a, a, a]
const actionLink = d3.select('.action')
// console.log(actionLink.nodes())
const secondLink = d3.select('a:nth-child(2)')
// add an attribute to an element
secondLink.attr('href', 'http://google.com')
console.log(secondLink.nodes())


























