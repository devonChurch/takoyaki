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

	/* <posts> */'use strict';
	
	__webpack_require__(1);__webpack_require__(2);__webpack_require__(3); /* </posts> */
	__webpack_require__(4);
	
	// var html = require('jade!../posts/one.jade');

	// var html = require('file?name=three.html!jade-html!../posts/three.jade');
	// console.log(html);

	// const jade = [];
	// const posts = [
	//     'one',
	//     'two',
	//     'three'
	// ];

	// for (const post of posts) {
	//
	//     console.log(`--> POST = ${post}`);
	//
	//     // jade.push(require(`file?name=${post}.html!jade-html!../posts/${post}.jade`));
	//     require(`file?name=${post}.html!jade-html!../posts/${post}.jade`);
	//     // require(`file?name=two.html!jade-html!../posts/two.jade`);
	// }
	//
	//
	// // './src/app.js', 'file?name=index.html!jade-html!./src/index.jade'

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "one.html";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "two.html";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "three.html";

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map