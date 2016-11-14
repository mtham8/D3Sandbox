document.body.innerHTML = `<h1>D3 version: ${d3.version}</h1>`;

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
const dataJSON = d3.json('data.json', function (d){
  console.log(d);
})
// console.log(dataJSON)


