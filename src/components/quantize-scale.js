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
