// linear scale ==> takes a continous input `domain` and maps it to a continuous output `range`, while maintaining proportions
export const linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true)
  // clamp ==> makes sure your values are within the scale

console.log(linearScale(0))
console.log(linearScale(50))
console.log(linearScale(105))
// invert ==> converts number into domain
console.log(linearScale.invert(300))


