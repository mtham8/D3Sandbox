// ======= CONVERT DATES TO NUMERICAL VALUES WITH TIME SCALES ===========
const timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100])
/*
console.log(timeScale(new Date(2016, 0, 15)))
console.log(timeScale(new Date(2016, 4, 15)))
console.log(timeScale(new Date()))
*/
