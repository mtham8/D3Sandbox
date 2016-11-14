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

console.log(timeScale(new Date(2016, 0, 15)))
console.log(timeScale(new Date(2016, 4, 15)))
console.log(timeScale(new Date()))