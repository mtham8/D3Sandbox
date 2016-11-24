/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _linearScale = __webpack_require__(2);
	
	var _timeScale = __webpack_require__(3);
	
	var _quantizeScale = __webpack_require__(4);
	
	var _ordinalScale = __webpack_require__(5);
	
	var _loadData = __webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(12);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	// ======= CONVERT INPUT DATA TO OUTPUT VALUES ===========
	// linear scale ==> takes a continous input `domain` and maps it to a continuous output `range`, while maintaining proportions
	var linearScale = d3.scaleLinear().domain([0, 100]).range([0, 600]).clamp(true);
	// clamp ==> makes sure your values are within the scale
	/*
	console.log(linearScale(0))
	console.log(linearScale(50))
	console.log(linearScale(105))
	// invert ==> converts number into domain
	console.log(linearScale.invert(300))
	*/

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	// ======= CONVERT DATES TO NUMERICAL VALUES WITH TIME SCALES ===========
	var timeScale = d3.scaleTime().domain([new Date(2016, 0, 1), new Date()]).range([0, 100]);
	/*
	console.log(timeScale(new Date(2016, 0, 15)))
	console.log(timeScale(new Date(2016, 4, 15)))
	console.log(timeScale(new Date()))
	*/

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	// ======= CREATE LABELS FROM NUMERIC DATA WITH QUANTIZE SCALES ===========
	// quantize scale ==> good to use if you want to map all of your input data to a specific set of output values
	var quantizeScale = d3.scaleQuantize().domain([0, 100]).range(['red', 'white', 'green']); // 0-100 broken into three pieces bc three colors
	/*
	console.log(quantizeScale(22))
	console.log(quantizeScale(50))
	console.log(quantizeScale(88))
	console.log(quantizeScale.invertExtent('white')) // white is going to be anything from 33.3-66.6
	*/

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	// ======= CREATE LABELS FROM NON-NUMERIC DATA WITH ORDINAL SCALES ===========
	var ordinalScale = d3.scaleOrdinal().domain(['poor', 'good', 'great']).range(['red', 'white', 'green']);
	/*
	console.log(ordinalScale('good'))
	console.log(ordinalScale('great'))
	console.log(ordinalScale('poor'))
	*/

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	// ======= LOAD AND INSPECT DATA ===========
	// loading data ==> d3.json
	var dataJSON = d3.json('data.json', function (data) {
	  // get minimum element
	  var min = d3.min(data, function (d) {
	    return d.age;
	  });
	  // console.log('this is min ==> ', min)
	
	  // get maximum element
	  var max = d3.max(data, function (d) {
	    return d.age;
	  });
	  // console.log('this is max ==> ', max)
	
	  // get min and max
	  var extent = d3.extent(data, function (d) {
	    return d.age;
	  });
	  // console.log('this is both ==> ', extent)
	
	  var scale = d3.scaleLinear().domain(extent).range([0, 600]);
	  // console.log('this is scaled value ==> ', scale(24))
	
	  // for unique values, use d3.set()
	  var ages = d3.set(data, function (d) {
	    return d.age;
	  });
	  // console.log('this is set of unique values ==> ', ages.values())
	});
	// console.log(dataJSON)

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	// ======= SELECT AND MODIFY DOM ELEMENTS ===========
	var div = d3.select('div');
	// to select multiple items ==> d3.selectAll
	// console.log(div.nodes())
	var divLinks = div.selectAll('a');
	// console.log(divLinks.nodes())
	// alternatively ==> console.log(d3.selectAll('div a').nodes()) // [a, a, a]
	var actionLink = d3.select('.action');
	// console.log(actionLink.nodes())
	
	// add attributes or style to element
	var secondLink = d3.select('a:nth-child(2)').attr('href', 'http://google.com')
	// .style('color', 'red')
	.classed('red', true) // adds CSS classes to element
	// .text('Inventory') // changes the text to 'Inventory'
	.html('Inventory <b>SALE</b>');
	// console.log(secondLink.attr('href'))

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// ======= START VISUALIZING D3 ===========
	var scores = exports.scores = [{ name: 'Alice', score: 96 }, { name: 'Billy', score: 83 }, { name: 'Cindy', score: 91 }, { name: 'David', score: 96 }, { name: 'Emily', score: 88 }];
	/*
	const update = d3.select('.chart')
	  .selectAll('div')
	  .data(scores, function(d){
	    return d ? d.name : this.innerText
	  }) // to make sure data already on the DOM doesn't get repeated ==> this is set the the DOM element
	  .style('color', 'blue')

	const enter = update.enter() // this adds new elements
	  .append('div') // this tells d3 to append a div to each of the data items that aren't appended to an element
	  .text(d => d.name)
	    .style('color', 'green')

	update.exit().remove() // this removes element that don't have data appended

	update.merge(enter)
	  .style('width', d => `${d.score}px`)
	  .style('height', '50px')
	  .style('background', 'lightgreen')
	  .style('border', '1px solid black')
	*/

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _startVisual = __webpack_require__(8);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setFill = undefined;
	
	var _startVisual = __webpack_require__(8);
	
	// ======= BETTER CODE ORGANIZATION WITH SELECTION.CALL() ===========
	
	var scaleBar = function scaleBar(selection, scale) {
	  return selection.style('transform', 'scaleX(' + scale + ')');
	};
	
	var fade = function fade(selection, opacity) {
	  return selection.style('fill-opacity', opacity);
	};
	
	var setFill = exports.setFill = function setFill(selection, color) {
	  return selection.style('fill', color);
	};
	
	/*
	const bar = d3.select('.chart')
	  .append('svg') // create svg container
	    .attr('width', 225)
	    .attr('height', 300)
	  .selectAll('g') // create a collection of g elements
	  .data(scores)
	  .enter()
	    .append('g')
	    .attr('transform', (d, i) => `translate(0,${i*33})`)

	// append rectangle and text to g elements
	bar.append('rect')
	    .style('width', d => d.score)
	    .attr('class', 'bar')
	    .on('mouseover', function(d, i, elements){
	      d3.select(this)
	        .call(scaleBar, 2)
	        .call(setFill, 'teal')

	      d3.selectAll(elements)
	        .filter(':not(:hover)')
	        .call(fade, 0.5)
	    })
	    .on('mouseout', function(d, i, elements){
	      d3.select(this).call(scaleBar, 1)

	      d3.selectAll(elements)
	        .call(fade, 1)
	        .call(setFill, 'lightgreen')
	    })

	bar.append('text')
	  .attr('y', 20) // distance from top of element
	  .attr('x', 5) // distance from left of element
	  .text(d => d.name)
	*/

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _betterOrg = __webpack_require__(10);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _betterOrg = __webpack_require__(10);
	
	var margin = {
	  top: 10,
	  right: 0,
	  bottom: 60,
	  left: 40
	}; // ======= CREATE CHART AXES WITH D3V4 ===========
	
	// same example from margin-convention
	
	var width = 425 - margin.left - margin.right;
	var height = 625 - margin.top - margin.bottom;
	
	var container = d3.select('.chart').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.left + margin.right).append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
	
	container.append('rect').attr('width', width).attr('height', height).call(_betterOrg.setFill, 'lightblue').style('stroke', 'green');
	
	var yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]); // y dimension runs from top to bottom
	
	// d3 makes creates its own ticks unless specified ==> d3.axisLeft(yScale).ticks(5, '.2s')
	// absolute control on ticks ==> d3.axisLeft(yScale).tickValues([8, 19, 43, 77])
	var yAxis = d3.axisLeft(yScale);
	container.call(yAxis);
	
	var xScale = d3.scaleTime().domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)]).range([0, width]);
	
	// ticks for every 45 mins ==> const xAxis = d3.axisBottom(xScale).ticks(d3.timeMinute.every(45))
	var xAxis = d3.axisBottom(xScale).ticks(5).tickSizeInner(10).tickSizeOuter(20) // longer ticks on the outside
	.tickPadding(15); // so that all the numbers are aligned
	
	// get the scale to the bottom of the chart
	container.append('g').attr('transform', 'translate(0, ' + height + ')').call(xAxis);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map