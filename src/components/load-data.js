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
