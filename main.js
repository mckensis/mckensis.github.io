/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/about.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* About section styles */\n\n.about {\n    padding: 3rem;\n}\n\n.about p {\n    color: var(--blue);\n    font-size: 2rem;\n    line-height: 3rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/about.css"],"names":[],"mappings":"AAAA,yBAAyB;;AAEzB;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["/* About section styles */\n\n.about {\n    padding: 3rem;\n}\n\n.about p {\n    color: var(--blue);\n    font-size: 2rem;\n    line-height: 3rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/hero.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/hero.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Hero section styles */\n\n@keyframes slideInFromTop {\n    0% {\n        transform: translateY(-100%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes bigLinkWiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(-2deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.hero {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content max-content max-content;\n    column-gap: 2rem;\n    row-gap: 0.5rem;\n    max-width: 1000px;\n}\n\n.hero h1,\n.hero p {\n    animation: 0.25s ease-in 0s 1 slideInFromTop;\n}\n\n.hero img.portrait {\n    animation: 0.75s ease-in 0s 1 slideInFromTop;\n}\n\n\n.hero button.big-link {\n    animation: 1.25s ease-in 0s 1 slideInFromTop;\n}\n\n.hero a.big-link {\n    animation: 1.5s ease-in 0s 1 slideInFromTop;\n}\n\n.hero p {\n    grid-column: 1 / -1;\n    font-size: 2.5rem;\n    color: var(--blue);\n}\n\n.hero .big-link {\n    margin-top: 1.5rem;\n    padding: 2rem;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.hero button:hover {\n    transform: rotate(-2deg);\n}\n\n.hero img.portrait {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    place-self: center;\n    padding: 0.25rem;\n    border: 0.5rem solid var(--white);\n    border-radius: 50%;\n}\n\n.big-link.hero-contact {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: max-content max-content;\n    place-items: center;\n    place-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/hero.css"],"names":[],"mappings":"AAAA,wBAAwB;;AAExB;IACI;QACI,4BAA4B;QAC5B,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI,8BAA8B;IAC9B,mEAAmE;IACnE,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,4CAA4C;AAChD;;;AAGA;IACI,4CAA4C;AAChD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8CAA8C;IAC9C,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb","sourcesContent":["/* Hero section styles */\n\n@keyframes slideInFromTop {\n    0% {\n        transform: translateY(-100%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes bigLinkWiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(-2deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.hero {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content max-content max-content;\n    column-gap: 2rem;\n    row-gap: 0.5rem;\n    max-width: 1000px;\n}\n\n.hero h1,\n.hero p {\n    animation: 0.25s ease-in 0s 1 slideInFromTop;\n}\n\n.hero img.portrait {\n    animation: 0.75s ease-in 0s 1 slideInFromTop;\n}\n\n\n.hero button.big-link {\n    animation: 1.25s ease-in 0s 1 slideInFromTop;\n}\n\n.hero a.big-link {\n    animation: 1.5s ease-in 0s 1 slideInFromTop;\n}\n\n.hero p {\n    grid-column: 1 / -1;\n    font-size: 2.5rem;\n    color: var(--blue);\n}\n\n.hero .big-link {\n    margin-top: 1.5rem;\n    padding: 2rem;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.hero button:hover {\n    transform: rotate(-2deg);\n}\n\n.hero img.portrait {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    place-self: center;\n    padding: 0.25rem;\n    border: 0.5rem solid var(--white);\n    border-radius: 50%;\n}\n\n.big-link.hero-contact {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: max-content max-content;\n    place-items: center;\n    place-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Navbar */\n\nheader {\n    font-size: 1.5rem;\n    background-color: var(--mid-blue);\n    position: sticky;\n    top: 0;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr max-content max-content;\n    align-items: center;\n    column-gap: 2rem;\n    width: calc(100vw - 3rem);\n}\n\nnav ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 8rem;\n    place-items: center;\n    list-style: none;\n}\n\nnav a {\n    color: var(--white);\n    transition: text-decoration 0.75s;\n    text-decoration: 0.5rem underline transparent;\n}\n\n.home {\n    font-weight: 800;\n    font-size: 4.5rem;\n    text-decoration: none;\n    margin-left: 2rem;\n    place-self: start;\n    transition: color 0.5s ease-out, text-shadow 0.25s ease-in-out;\n}\n\n.home:hover {\n    color: var(--blue);\n    text-shadow: 3px 3px var(--black);\n}\n\n.active {\n    color: var(--white);\n    font-weight: 800;\n}\n\n.active:hover {\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/styles/nav.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,iBAAiB;IACjB,iCAAiC;IACjC,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kDAAkD;IAClD,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;IACjC,6CAA6C;AACjD;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,8DAA8D;AAClE;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* Navbar */\n\nheader {\n    font-size: 1.5rem;\n    background-color: var(--mid-blue);\n    position: sticky;\n    top: 0;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr max-content max-content;\n    align-items: center;\n    column-gap: 2rem;\n    width: calc(100vw - 3rem);\n}\n\nnav ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 8rem;\n    place-items: center;\n    list-style: none;\n}\n\nnav a {\n    color: var(--white);\n    transition: text-decoration 0.75s;\n    text-decoration: 0.5rem underline transparent;\n}\n\n.home {\n    font-weight: 800;\n    font-size: 4.5rem;\n    text-decoration: none;\n    margin-left: 2rem;\n    place-self: start;\n    transition: color 0.5s ease-out, text-shadow 0.25s ease-in-out;\n}\n\n.home:hover {\n    color: var(--blue);\n    text-shadow: 3px 3px var(--black);\n}\n\n.active {\n    color: var(--white);\n    font-weight: 800;\n}\n\n.active:hover {\n    cursor: default;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Projects section styles */\n.projects {\n    scroll-snap-type: y mandatory;\n    scroll-snap-stop: always;\n    scroll-behavior: smooth;\n}\n\n.individual-project {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content repeat(2, max-content);\n    row-gap: 1rem;\n    margin: 1rem 2rem;\n    padding: 2rem;\n    border: 3px solid var(--white);\n    border-radius: 1rem;\n    box-shadow: 1px 1px 5px var(--white);\n    scroll-snap-align: start;\n    transition: background-color 0.25s ease-in-out;\n}\n\n.individual-project:hover {\n    background-color: rgba(0,0,0,0.25);\n}\n\n.individual-project h2 {\n    transition: color 0.5s ease-in-out;\n    text-shadow: 3px 3px var(--black);\n}\n\n.individual-project section.details,\n.individual-project section.development {\n    gap: 1rem;\n    place-self: start;\n}\n\n.project-links {\n    display: grid;\n    grid-column: 2 / -1;\n    justify-content: end;\n    place-self: end;\n    grid-auto-flow: column;\n    place-items: center;\n    gap: 1.5rem;\n}\n\n.project-links img {\n    transition: transform 0.25s ease-in-out;\n}\n\n.project-links img:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.projects-link a:hover::after {\n    content: 'yo';\n    border: 1px solid red;\n    padding: 3rem;\n}\n\n/* Heading with title and links */\n.header {\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    place-content: center;\n    grid-template-columns: max-content 1fr;\n    margin-bottom: 1rem;\n}\n\n.details li {\n    list-style: none;\n}\n\n.details li,\n.development p {\n    font-size: 1.3rem;\n    line-height: 2.25rem;\n}\n\n/* Tag styles */\n\n.tags {\n    display: grid;\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    grid-auto-rows: max-content;\n    grid-auto-columns: max-content;\n    place-items: center;\n    place-self: start;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.tags span {\n    padding: 0.5rem 0.75rem;\n    text-align: center;\n    background-color: var(--darkblue);\n    border-radius: 1rem;\n    font-weight: 400;\n    letter-spacing: 0.75px;\n    outline: 1px solid black;\n    box-shadow: 0 0 5px black;\n}\n\n.tags span:hover {\n    box-shadow: 0 0 10px black;\n    background-color: var(--mid-blue);\n    outline: 2px solid black;\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/styles/projects.css"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B;IACI,6BAA6B;IAC7B,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kEAAkE;IAClE,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oCAAoC;IACpC,wBAAwB;IACxB,8CAA8C;AAClD;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;;IAEI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,aAAa;AACjB;;AAEA,iCAAiC;AACjC;IACI,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;IACrB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA,eAAe;;AAEf;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,iCAAiC;IACjC,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;IAC1B,iCAAiC;IACjC,wBAAwB;IACxB,eAAe;AACnB","sourcesContent":["/* Projects section styles */\n.projects {\n    scroll-snap-type: y mandatory;\n    scroll-snap-stop: always;\n    scroll-behavior: smooth;\n}\n\n.individual-project {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content repeat(2, max-content);\n    row-gap: 1rem;\n    margin: 1rem 2rem;\n    padding: 2rem;\n    border: 3px solid var(--white);\n    border-radius: 1rem;\n    box-shadow: 1px 1px 5px var(--white);\n    scroll-snap-align: start;\n    transition: background-color 0.25s ease-in-out;\n}\n\n.individual-project:hover {\n    background-color: rgba(0,0,0,0.25);\n}\n\n.individual-project h2 {\n    transition: color 0.5s ease-in-out;\n    text-shadow: 3px 3px var(--black);\n}\n\n.individual-project section.details,\n.individual-project section.development {\n    gap: 1rem;\n    place-self: start;\n}\n\n.project-links {\n    display: grid;\n    grid-column: 2 / -1;\n    justify-content: end;\n    place-self: end;\n    grid-auto-flow: column;\n    place-items: center;\n    gap: 1.5rem;\n}\n\n.project-links img {\n    transition: transform 0.25s ease-in-out;\n}\n\n.project-links img:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.projects-link a:hover::after {\n    content: 'yo';\n    border: 1px solid red;\n    padding: 3rem;\n}\n\n/* Heading with title and links */\n.header {\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    place-content: center;\n    grid-template-columns: max-content 1fr;\n    margin-bottom: 1rem;\n}\n\n.details li {\n    list-style: none;\n}\n\n.details li,\n.development p {\n    font-size: 1.3rem;\n    line-height: 2.25rem;\n}\n\n/* Tag styles */\n\n.tags {\n    display: grid;\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    grid-auto-rows: max-content;\n    grid-auto-columns: max-content;\n    place-items: center;\n    place-self: start;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.tags span {\n    padding: 0.5rem 0.75rem;\n    text-align: center;\n    background-color: var(--darkblue);\n    border-radius: 1rem;\n    font-weight: 400;\n    letter-spacing: 0.75px;\n    outline: 1px solid black;\n    box-shadow: 0 0 5px black;\n}\n\n.tags span:hover {\n    box-shadow: 0 0 10px black;\n    background-color: var(--mid-blue);\n    outline: 2px solid black;\n    cursor: default;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/slideshow.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/slideshow.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Slideshow styles */\n\n.slideshow {\n    display: grid;\n    grid-row: 3 / 5;\n    grid-template-columns: 3.5rem 300px 3.5rem;\n    grid-template-rows: 350px max-content;\n    gap: 0.5rem;\n}\n\n.slideshow .images {\n    display: none;\n}\n\n.slideshow img {\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    border-radius: 2rem;\n}\n\n.slideshow > a:focus,\n.slideshow > a:hover {\n    color: var(--white);\n    background: var(--blue);\n}\n\n.slideshow .dot.active {\n    background-color: var(--darkblue);\n}\n\n.slideshow .dot:hover {\n    background-color: var(--blue);\n}\n\n.slide {\n    grid-column: 2;\n}\n\n.slideshow .dots {\n    display: grid;\n    grid-column: 2;\n    place-items: center;\n    place-content: center;\n    grid-auto-flow: column;\n    gap: 0.5rem;\n}\n\n.slideshow .dot {\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n    background-color: var(--white);\n    cursor: pointer;\n}\n\n.slideshow .arrow {\n    align-self: center;\n    font-size: 6rem;\n    cursor: pointer;\n}\n\n.arrow:hover {\n    color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/styles/slideshow.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,aAAa;IACb,eAAe;IACf,0CAA0C;IAC1C,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,qBAAqB;IACrB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/* Slideshow styles */\n\n.slideshow {\n    display: grid;\n    grid-row: 3 / 5;\n    grid-template-columns: 3.5rem 300px 3.5rem;\n    grid-template-rows: 350px max-content;\n    gap: 0.5rem;\n}\n\n.slideshow .images {\n    display: none;\n}\n\n.slideshow img {\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    border-radius: 2rem;\n}\n\n.slideshow > a:focus,\n.slideshow > a:hover {\n    color: var(--white);\n    background: var(--blue);\n}\n\n.slideshow .dot.active {\n    background-color: var(--darkblue);\n}\n\n.slideshow .dot:hover {\n    background-color: var(--blue);\n}\n\n.slide {\n    grid-column: 2;\n}\n\n.slideshow .dots {\n    display: grid;\n    grid-column: 2;\n    place-items: center;\n    place-content: center;\n    grid-auto-flow: column;\n    gap: 0.5rem;\n}\n\n.slideshow .dot {\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n    background-color: var(--white);\n    cursor: pointer;\n}\n\n.slideshow .arrow {\n    align-self: center;\n    font-size: 6rem;\n    cursor: pointer;\n}\n\n.arrow:hover {\n    color: var(--blue);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-Regular.woff2 */ "./src/fonts/manrope/Manrope-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-Regular.woff */ "./src/fonts/manrope/Manrope-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-ExtraLight.woff2 */ "./src/fonts/manrope/Manrope-ExtraLight.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-ExtraLight.woff */ "./src/fonts/manrope/Manrope-ExtraLight.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-Light.woff2 */ "./src/fonts/manrope/Manrope-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-Light.woff */ "./src/fonts/manrope/Manrope-Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-Medium.woff2 */ "./src/fonts/manrope/Manrope-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-Medium.woff */ "./src/fonts/manrope/Manrope-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-SemiBold.woff2 */ "./src/fonts/manrope/Manrope-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-SemiBold.woff */ "./src/fonts/manrope/Manrope-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-ExtraBold.woff2 */ "./src/fonts/manrope/Manrope-ExtraBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/manrope/Manrope-ExtraBold.woff */ "./src/fonts/manrope/Manrope-ExtraBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Manrope - Google Fonts */\n/* Regular */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n}\n/* ExtraLight */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n    font-weight: 200;\n}\n/* Light */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff');\n    font-weight: 300;\n}\n/* Medium */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff');\n    font-weight: 500;\n}\n/* SemiBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff');\n    font-weight: 600;\n}\n/* ExtraBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('woff');\n    font-weight: 800;\n}\n\n/* Custom variables */\n:root {\n    --primary-text-color: #7180AC;\n    --secondary-text-color: #F5F1ED;\n\n    --white: #F5F1ED; /* Isabelline */\n    --black: #030104;\n    \n    --blue: #7180AC; /* Glaucous */\n    --mid-blue: #2C3E50;\n    --darkblue: #201E50;\n}\n\n/* Default page styles */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*:hover {\n    cursor: default;\n}\n\nhtml {\n    font-family: 'Manrope', sans-serif;\n    background: linear-gradient(var(--mid-blue) 15%, var(--black));\n    background-attachment: fixed;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    color: var(--white);\n}\n\nmain {\n    display: grid;\n    margin: 0 auto;\n    max-width: 1000px;\n}\n\nsection {\n    display: grid;\n    place-content: center;\n}\n\n.hero,\n.about,\n.projects {\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n    grid-auto-flow: row;\n    place-content: center;\n    row-gap: 0.5rem;\n}\n\nh1 {\n    grid-column: 1;\n    font-size: 5rem;\n    place-self: end;\n}\n\nh2 {\n    place-self: center;\n    font-size: 2.3rem;\n    font-weight: 800;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n    border-bottom: 0.5rem solid var(--blue);\n}\n\nh4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nhr {\n    width: 50%;\n    place-self: center;\n    height: 0.5rem;\n    margin: 1rem;\n    border-radius: 2rem;\n    background-color: var(--white);\n    outline: none;\n    border: none;\n}\n\n/* Default links */\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover:not(a.active):not(a.home):not(a.big-link) {\n    text-decoration: 0.5rem underline var(--blue);\n}\n\na:active,\nbutton:active {\n    opacity: 0.75;\n}\n\n/* Large links i.e. 'Contact' and 'Projects' links, etc */\n\n.big-link {\n    padding: 1rem;\n    font-weight: 800;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: var(--darkblue);\n    background-color: var(--white);\n    background: radial-gradient(white, #F5F1ED);\n    outline: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 0 10px var(--darkblue);\n    border-radius: 1.5rem;\n    transition: box-shadow 0.25s, transform 0.5s;\n    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.big-link:hover {\n    box-shadow: 0 0 10px var(--white);\n    outline: 4px solid var(--black);\n    transform: rotate(2deg);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B,YAAY;AACZ;IACI,sBAAsB;IACtB;+DACgE;AACpE;AACA,eAAe;AACf;IACI,sBAAsB;IACtB;+DACmE;IACnE,gBAAgB;AACpB;AACA,UAAU;AACV;IACI,sBAAsB;IACtB;+DAC8D;IAC9D,gBAAgB;AACpB;AACA,WAAW;AACX;IACI,sBAAsB;IACtB;+DAC+D;IAC/D,gBAAgB;AACpB;AACA,aAAa;AACb;IACI,sBAAsB;IACtB;+DACiE;IACjE,gBAAgB;AACpB;AACA,cAAc;AACd;IACI,sBAAsB;IACtB;gEACkE;IAClE,gBAAgB;AACpB;;AAEA,qBAAqB;AACrB;IACI,6BAA6B;IAC7B,+BAA+B;;IAE/B,gBAAgB,EAAE,eAAe;IACjC,gBAAgB;;IAEhB,eAAe,EAAE,aAAa;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA,wBAAwB;;AAExB;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,8DAA8D;IAC9D,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;;;IAGI,0BAA0B;IAC1B,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;IACzB,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA,kBAAkB;;AAElB;;IAEI,eAAe;AACnB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;;IAEI,aAAa;AACjB;;AAEA,yDAAyD;;AAEzD;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;IACtB,8BAA8B;IAC9B,2CAA2C;IAC3C,aAAa;IACb,YAAY;IACZ,eAAe;IACf,oCAAoC;IACpC,qBAAqB;IACrB,4CAA4C;IAC5C,iEAAiE;AACrE;;AAEA;IACI,iCAAiC;IACjC,+BAA+B;IAC/B,uBAAuB;AAC3B","sourcesContent":["/* Manrope - Google Fonts */\n/* Regular */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Regular.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Regular.woff') format('woff');\n}\n/* ExtraLight */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-ExtraLight.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-ExtraLight.woff') format('woff');\n    font-weight: 200;\n}\n/* Light */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Light.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Light.woff') format('woff');\n    font-weight: 300;\n}\n/* Medium */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Medium.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Medium.woff') format('woff');\n    font-weight: 500;\n}\n/* SemiBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-SemiBold.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-SemiBold.woff') format('woff');\n    font-weight: 600;\n}\n/* ExtraBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-ExtraBold.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-ExtraBold.woff') format('woff');\n    font-weight: 800;\n}\n\n/* Custom variables */\n:root {\n    --primary-text-color: #7180AC;\n    --secondary-text-color: #F5F1ED;\n\n    --white: #F5F1ED; /* Isabelline */\n    --black: #030104;\n    \n    --blue: #7180AC; /* Glaucous */\n    --mid-blue: #2C3E50;\n    --darkblue: #201E50;\n}\n\n/* Default page styles */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*:hover {\n    cursor: default;\n}\n\nhtml {\n    font-family: 'Manrope', sans-serif;\n    background: linear-gradient(var(--mid-blue) 15%, var(--black));\n    background-attachment: fixed;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    color: var(--white);\n}\n\nmain {\n    display: grid;\n    margin: 0 auto;\n    max-width: 1000px;\n}\n\nsection {\n    display: grid;\n    place-content: center;\n}\n\n.hero,\n.about,\n.projects {\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n    grid-auto-flow: row;\n    place-content: center;\n    row-gap: 0.5rem;\n}\n\nh1 {\n    grid-column: 1;\n    font-size: 5rem;\n    place-self: end;\n}\n\nh2 {\n    place-self: center;\n    font-size: 2.3rem;\n    font-weight: 800;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n    border-bottom: 0.5rem solid var(--blue);\n}\n\nh4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nhr {\n    width: 50%;\n    place-self: center;\n    height: 0.5rem;\n    margin: 1rem;\n    border-radius: 2rem;\n    background-color: var(--white);\n    outline: none;\n    border: none;\n}\n\n/* Default links */\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover:not(a.active):not(a.home):not(a.big-link) {\n    text-decoration: 0.5rem underline var(--blue);\n}\n\na:active,\nbutton:active {\n    opacity: 0.75;\n}\n\n/* Large links i.e. 'Contact' and 'Projects' links, etc */\n\n.big-link {\n    padding: 1rem;\n    font-weight: 800;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: var(--darkblue);\n    background-color: var(--white);\n    background: radial-gradient(white, #F5F1ED);\n    outline: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 0 10px var(--darkblue);\n    border-radius: 1.5rem;\n    transition: box-shadow 0.25s, transform 0.5s;\n    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.big-link:hover {\n    box-shadow: 0 0 10px var(--white);\n    outline: 4px solid var(--black);\n    transform: rotate(2deg);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/hero.css":
/*!*****************************!*\
  !*** ./src/styles/hero.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hero.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/hero.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/nav.css":
/*!****************************!*\
  !*** ./src/styles/nav.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/projects.css":
/*!*********************************!*\
  !*** ./src/styles/projects.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/slideshow.css":
/*!**********************************!*\
  !*** ./src/styles/slideshow.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./slideshow.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/slideshow.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GetScreenshots.js":
/*!*******************************!*\
  !*** ./src/GetScreenshots.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Returns screenshots from the dist folder which match the project variable
function GetScreenshots(project, context) {
    let images = [];

    //For each item in the images/screenshots folder
    //If the image name matches the project variable,
    //Add it to the images array
    context.keys().forEach((item) => {
        if (item.includes(project)) {
            let temp = context(item);
            images.push(temp);
        }
    });
    return images;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetScreenshots);

/***/ }),

/***/ "./src/LoadPage.js":
/*!*************************!*\
  !*** ./src/LoadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Projects */ "./src/components/Projects.js");
/* harmony import */ var _LoadSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadSection */ "./src/LoadSection.js");






function LoadPage() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    const main = document.createElement('main');
    
    body.append(header);
    body.append(main);

    header.append((0,_components_Nav__WEBPACK_IMPORTED_MODULE_0__["default"])());
    main.append((0,_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"])());

    const links = document.querySelectorAll('nav li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.textContent !== 'Github' && link.textContent !== 'Download CV') {
                link.classList.add('active');
                links.forEach(link => {
                    if (link !== e.target) {
                        link.classList.remove('active');
                    }
                });

                (0,_LoadSection__WEBPACK_IMPORTED_MODULE_4__["default"])(link.textContent);
            }
        });
    });

    const home = document.querySelector('nav a.home');
    home.addEventListener('click', () => {
        (0,_LoadSection__WEBPACK_IMPORTED_MODULE_4__["default"])('Home');
        links.forEach(link => {
            link.classList.remove('active');
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);

/***/ }),

/***/ "./src/LoadSection.js":
/*!****************************!*\
  !*** ./src/LoadSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Projects */ "./src/components/Projects.js");




function LoadSection(section) {

    const main = document.querySelector('main');

    if (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }

    switch(section) {
        case 'About':
            main.append((0,_components_About__WEBPACK_IMPORTED_MODULE_1__["default"])());
            break;
        case 'Projects':
            main.append((0,_components_Projects__WEBPACK_IMPORTED_MODULE_2__["default"])());
            break;
        case 'Home':
            main.append((0,_components_Hero__WEBPACK_IMPORTED_MODULE_0__["default"])());
            break;
        default:
            main.append((0,_components_Hero__WEBPACK_IMPORTED_MODULE_0__["default"])());
            break;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadSection);

/***/ }),

/***/ "./src/Slideshow.js":
/*!**************************!*\
  !*** ./src/Slideshow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toggleActive(dots, index) {

    dots.forEach(dot => {
        if (dots.indexOf(dot) !== index) {
            dot.classList.remove('active');
        } else {
            dot.classList.add('active');
        }
    });
};

function updateDisplay(display, image) {
    display.src = image.src;
};

function updateArrows(arrows, images, index) {
    let previous = arrows[0];
    let next = arrows[1];

    if (index === images.length -1) {
        previous.style.display = 'block';
        next.style.display = 'none';
    } else if (index === 0) {
        previous.style.display = 'none';
        next.style.display = 'block';
    } else {
        previous.style.display = 'block';
        next.style.display = 'block';
    }
};

function Slideshow(parents) {

    parents.forEach(parent => {
        let index = 0;
        const arrows = parent.querySelectorAll('.arrow');
        const previous = parent.querySelector('.arrow.previous');
        const next = parent.querySelector('.arrow.next');
        const display = parent.querySelector('.slide');
        const dots = Array.from(parent.querySelector('.dots').children);
        const images = Array.from(parent.querySelector('.images').children);
        
        //Hide the previous arrow on initial slideshow load
        previous.style.display = 'none';
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                updateArrows(arrows, images, dots.indexOf(dot));
                toggleActive(dots, dots.indexOf(dot));
                updateDisplay(display, images[dots.indexOf(dot)]);
            });
        });

        next.addEventListener('click', () => {
            if (index !== images.length -1) {
                index++;
            }
            toggleActive(dots, index);
            updateArrows(arrows, images, index);
            updateDisplay(display, images[index]);
        });

        previous.addEventListener('click', () => {
            if (index !== 0) {
                index--;
            }
            toggleActive(dots, index);
            updateArrows(arrows, images, index);
            updateDisplay(display, images[index]);
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");



function About() {
    const about = document.createElement('section');
    about.className = 'about';

    const heading = document.createElement('h2');
    heading.textContent = 'About Me';

    const para = document.createElement('p');
    para.textContent = `I'm a self-taught developer who has been learning web development since early 2022. `
        + `I'm now looking to enter the industry and grow within a professional environment. `
        + `My current goal is to find a role where I can begin my career and continue developing my skillset.`;

    const tools = document.createElement('p');
    tools.textContent = 'While I am eager to learn new languages & frameworks, I am primarily using the following at the moment:';

    const hr = document.createElement('hr');

    about.append(para, hr, tools);

    return about;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_hero_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/hero.css */ "./src/styles/hero.css");
/* harmony import */ var _images_icon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon.jpg */ "./src/images/icon.jpg");
/* harmony import */ var _images_icons_email_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/email.png */ "./src/images/icons/email.png");
/* harmony import */ var _LoadSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadSection */ "./src/LoadSection.js");






function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const portrait = document.createElement('img');
    portrait.classList.add('portrait');
    portrait.src = _images_icon_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const header = document.createElement('h1');
    header.textContent = `Hi, I'm Aidan`;

    const para = document.createElement('p');
    para.textContent = 'Front-end developer from Glasgow, Scotland';

    const projects = document.createElement('button');
    projects.textContent = 'View My Projects';
    projects.type = 'button';
    projects.classList.add('big-link');
    projects.addEventListener('click', () => {
        document.querySelector('nav li a.project-link').classList.add('active');
        (0,_LoadSection__WEBPACK_IMPORTED_MODULE_4__["default"])('Projects');
    });

    const mailIcon = document.createElement('img');
    mailIcon.src = _images_icons_email_png__WEBPACK_IMPORTED_MODULE_3__;

    const contact = document.createElement('a');
    contact.textContent = 'Contact Me';
    contact.classList.add('big-link', 'hero-contact');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    
    contact.append(mailIcon);
    hero.append(header, para, projects, contact, portrait);

    return hero;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/nav.css */ "./src/styles/nav.css");



function Nav() {
    const nav = document.createElement('nav');
    
    const home = document.createElement('a');
    home.className = 'home';
    home.textContent = 'AM.';

    const contact = document.createElement('a');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    contact.className = 'contact';
    contact.classList.add('big-link');
    contact.textContent = 'Contact';
    
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.textContent = 'About';
    
    const projects = document.createElement('li');
    const projectsLink = document.createElement('a');
    projectsLink.textContent = 'Projects';
    projectsLink.classList.add('project-link');
    
    const github = document.createElement('li');
    const githubLink = document.createElement('a');
    githubLink.textContent = 'Github';    
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    
    const cv = document.createElement('li');
    const cvLink = document.createElement('a');
    cvLink.textContent = 'View CV';
    cvLink.href = '#';
    cvLink.target = '_blank';

    about.append(aboutLink);
    projects.append(projectsLink);
    github.append(githubLink);
    cv.append(cvLink);
    list.append(about, projects, github, cv);
    nav.append(home, list, contact);

    return nav;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_projects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/projects.css */ "./src/styles/projects.css");
/* harmony import */ var _styles_slideshow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/slideshow.css */ "./src/styles/slideshow.css");
/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slideshow */ "./src/Slideshow.js");
/* harmony import */ var _images_icons_live_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/live.png */ "./src/images/icons/live.png");
/* harmony import */ var _images_icons_github_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/github.png */ "./src/images/icons/github.png");
/* harmony import */ var _GetScreenshots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GetScreenshots */ "./src/GetScreenshots.js");








function GetProjects() {
    const battleship = {
        title: 'Battleship',
        alias: 'battleship',
        info: [
            `Classic Battleship board game`, 
            `Play against an AI player`,
            `First player to destroy the enemy's 5 ships wins`,
        ],
        development: 'I wrote unit tests with Jest during development of this project and purposefully broke the project with each new test until functionality was complete.',
        live: 'battleship',
        code: 'battleship',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest', 'TDD' ],
        images: [],
    };

    const weather = {
        title: 'Weather Forecast',
        alias: 'forecast',
        info: [
            `Enter a location to search for the weather`,
            `Current weather will display for the location`,
            `Later & tomorrow forecasts will also display`,
        ],
        development: `I used async and await along with multiple APIs from OpenWeather such as 'Geocoding', 'CurrentWeather', and '3 Hour / 5 Day Forecast'.`,
        live: 'weather-forecast',
        code: 'weather-forecast',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'API', 'Async / Await' ],
        images: [],
    };

    const todo = {
        title: 'To-Do List',
        alias: 'to-do-list',
        info: [
            `View lists on the left & tasks on the right`,
            `Add a new list or task within either section`,
            `Mark a tasks as complete, or change task priority`,
        ],
        development: `I used async and await along with multiple APIs from OpenWeather such as 'Geocoding', 'CurrentWeather', and '3 Hour / 5 Day Forecast'.`,
        live: 'to-do-list',
        code: 'to-do-list',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'LocalStorage' ],
        images: [],
    };

    return [ battleship, weather, todo ];
}

function CreateSlideshow(images) {
    const slideshow = document.createElement('section');
    slideshow.className = 'slideshow';

    const previous = document.createElement('div');
    previous.classList.add('arrow', 'previous');
    previous.innerHTML = '&lsaquo;';

    const next = document.createElement('div');
    next.classList.add('arrow', 'next');
    next.innerHTML = `&rsaquo;`;

    const slide = document.createElement('img');
    slide.className = 'slide';
    slide.src = images[0];

    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'images';
    
    const dots = document.createElement('div');

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        imagesDiv.append(img);

        const dot = document.createElement('p');
        dot.className = 'dot';
        dots.append(dot);
    });
    
    dots.className = 'dots';
    
    if (dots.children[0]) {
        dots.children[0].classList.add('active');
    }

    slideshow.append(previous, slide, next, dots, imagesDiv);

    return slideshow;
}

function CreateTags(tags) {
    const section = document.createElement('section');
    section.classList.add('tags');
    
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        section.append(span);
    });
    
    return section;
}

function CreateLinks(links) {
    const BASE_GITHUB_URL = 'https://github.com/mckensis/';

    const section = document.createElement('section');
    section.className = 'project-links';

    const heading = document.createElement('h4');
    heading.textContent = 'View Project';

    const liveLink = document.createElement('a');    
    const live = document.createElement('img');
    liveLink.href = links.live;
    liveLink.target = '_blank';
    liveLink.title = 'View project live';
    live.src = _images_icons_live_png__WEBPACK_IMPORTED_MODULE_4__;
    
    const codeLink = document.createElement('a');
    const code = document.createElement('img');
    codeLink.href = BASE_GITHUB_URL + links.github;
    codeLink.target = '_blank';
    codeLink.title = 'View on GitHub';
    code.src = _images_icons_github_png__WEBPACK_IMPORTED_MODULE_5__;

    liveLink.append(live);
    codeLink.append(code);

    section.append(heading, liveLink, codeLink);

    return section;
}

function CreateDetailsSection(details) {
    const section = document.createElement('section');
    section.classList.add('details');

    const heading = document.createElement('h3');
    heading.textContent = 'Project Details';

    const list = document.createElement('ul');

    details.forEach(piece => {
        const item = document.createElement('li');
        item.textContent = piece;
        list.append(item);
    })

    section.append(heading, list);
    
    return section;
}

function CreateDevelopmentSection(info) {
    const section = document.createElement('section');
    section.classList.add('development');
    
    const heading = document.createElement('h3');
    heading.textContent = 'Development Process';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = info;

    section.append(heading, paragraph);
    return section;
}

function CreateProject(project) {
    const article = document.createElement('article');
    article.className = 'individual-project';
    
    //Header Section
    const header = document.createElement('section');
    header.classList.add('header');
    //Heading
    const heading = document.createElement('h2');
    heading.textContent = project.title;
    //Links
    const links = CreateLinks({ live: project.live, github: project.code });
    //Slideshow
    const slideshow = CreateSlideshow(project.images);
    //Tags
    const tags = CreateTags(project.tags);
    //Info
    const info = CreateDetailsSection(project.info);
    //Development
    const development = CreateDevelopmentSection(project.development);
    
    header.append(heading, links);
    article.append(header, tags, info, development, slideshow);
    
    return article;
}

function Projects() {
    const projects = document.createElement('section');
    projects.className = 'projects';

    const list = GetProjects();
    let parents = [];

    list.forEach(project => {
        project.images = (0,_GetScreenshots__WEBPACK_IMPORTED_MODULE_6__["default"])(project.alias, __webpack_require__("./src/images/screenshots sync \\.jpg$"));
        let parent = CreateProject(project);
        projects.append(parent);
        let slideshow = parent.querySelector('.slideshow')
        parents.push(slideshow);
    });

    (0,_Slideshow__WEBPACK_IMPORTED_MODULE_3__["default"])(parents);

    return projects;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/images/screenshots sync \\.jpg$":
/*!**********************************************************!*\
  !*** ./src/images/screenshots/ sync nonrecursive \.jpg$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship0.jpg": "./src/images/screenshots/battleship0.jpg",
	"./battleship1.jpg": "./src/images/screenshots/battleship1.jpg",
	"./forecast0.jpg": "./src/images/screenshots/forecast0.jpg",
	"./forecast1.jpg": "./src/images/screenshots/forecast1.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/screenshots sync \\.jpg$";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-ExtraBold.woff":
/*!**************************************************!*\
  !*** ./src/fonts/manrope/Manrope-ExtraBold.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "69243babb5105a4560a1.woff";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-ExtraBold.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/manrope/Manrope-ExtraBold.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b68b7eb2b6d32b35c895.woff2";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-ExtraLight.woff":
/*!***************************************************!*\
  !*** ./src/fonts/manrope/Manrope-ExtraLight.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53d40fa4f987af49b713.woff";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-ExtraLight.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/manrope/Manrope-ExtraLight.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6763706b6428e82b217.woff2";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-Light.woff":
/*!**********************************************!*\
  !*** ./src/fonts/manrope/Manrope-Light.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8370e1cd2d2c89356dfb.woff";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-Light.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/manrope/Manrope-Light.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7bb7d9fd2b80408ba0d6.woff2";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-Medium.woff":
/*!***********************************************!*\
  !*** ./src/fonts/manrope/Manrope-Medium.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06d5d5a8a3fb137f2ca8.woff";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-Medium.woff2":
/*!************************************************!*\
  !*** ./src/fonts/manrope/Manrope-Medium.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3c8fbc30da8cfe4e910.woff2";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/manrope/Manrope-Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "86ea9c7b23711d2bcb8d.woff";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-Regular.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/manrope/Manrope-Regular.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "451d7d8c7ae016fd0740.woff2";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-SemiBold.woff":
/*!*************************************************!*\
  !*** ./src/fonts/manrope/Manrope-SemiBold.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "632c80108f4d21251a3e.woff";

/***/ }),

/***/ "./src/fonts/manrope/Manrope-SemiBold.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/manrope/Manrope-SemiBold.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05b6ef303805a485b26d.woff2";

/***/ }),

/***/ "./src/images/icon.jpg":
/*!*****************************!*\
  !*** ./src/images/icon.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f616edfa9e05be70dbf.jpg";

/***/ }),

/***/ "./src/images/icons/email.png":
/*!************************************!*\
  !*** ./src/images/icons/email.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0aa09abef39bfe570d50.png";

/***/ }),

/***/ "./src/images/icons/github.png":
/*!*************************************!*\
  !*** ./src/images/icons/github.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b187dc27bdc49c689b2d.png";

/***/ }),

/***/ "./src/images/icons/live.png":
/*!***********************************!*\
  !*** ./src/images/icons/live.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c171ed118bb0d46da59.png";

/***/ }),

/***/ "./src/images/screenshots/battleship0.jpg":
/*!************************************************!*\
  !*** ./src/images/screenshots/battleship0.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc4af9d3b568f74e5336.jpg";

/***/ }),

/***/ "./src/images/screenshots/battleship1.jpg":
/*!************************************************!*\
  !*** ./src/images/screenshots/battleship1.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b09b376d6162e791b58.jpg";

/***/ }),

/***/ "./src/images/screenshots/forecast0.jpg":
/*!**********************************************!*\
  !*** ./src/images/screenshots/forecast0.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "67353c3dc090bf553b6a.jpg";

/***/ }),

/***/ "./src/images/screenshots/forecast1.jpg":
/*!**********************************************!*\
  !*** ./src/images/screenshots/forecast1.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3a0ff1460a5f27f10070.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadPage */ "./src/LoadPage.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");



window.addEventListener('load', _LoadPage__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDTjs7QUFFNUIsZ0NBQWdDLGlEQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2hlcm8uY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvbmF2LmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL3NsaWRlc2hvdy5jc3MiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzP2QxMTciLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9oZXJvLmNzcz84MTU4Iiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvbmF2LmNzcz8yMTcwIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzPzFhYWEiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9zbGlkZXNob3cuY3NzPzFjZmUiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9HZXRTY3JlZW5zaG90cy5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvTG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL0xvYWRTZWN0aW9uLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9TbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvSGVyby5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy8gc3luYyBub25yZWN1cnNpdmUgXFwuanBnJCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEFib3V0IHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLmFib3V0IHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmFib3V0IHAge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5Qjs7QUFFekI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQWJvdXQgc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4uYWJvdXQge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSGVybyBzZWN0aW9uIHN0eWxlcyAqL1xcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Ub3Age1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJpZ0xpbmtXaWdnbGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG4uaGVybyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLmhlcm8gaDEsXFxuLmhlcm8gcCB7XFxuICAgIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbn1cXG5cXG4uaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICBhbmltYXRpb246IDAuNzVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVRvcDtcXG59XFxuXFxuXFxuLmhlcm8gYnV0dG9uLmJpZy1saW5rIHtcXG4gICAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxufVxcblxcbi5oZXJvIGEuYmlnLWxpbmsge1xcbiAgICBhbmltYXRpb246IDEuNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmhlcm8gLmJpZy1saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbn1cXG5cXG4uaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJpZy1saW5rLmhlcm8tY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlcm8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3Qjs7QUFFeEI7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUVBQW1FO0lBQ25FLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7O0FBR0E7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSGVybyBzZWN0aW9uIHN0eWxlcyAqL1xcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Ub3Age1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJpZ0xpbmtXaWdnbGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG4uaGVybyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLmhlcm8gaDEsXFxuLmhlcm8gcCB7XFxuICAgIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbn1cXG5cXG4uaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICBhbmltYXRpb246IDAuNzVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVRvcDtcXG59XFxuXFxuXFxuLmhlcm8gYnV0dG9uLmJpZy1saW5rIHtcXG4gICAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxufVxcblxcbi5oZXJvIGEuYmlnLWxpbmsge1xcbiAgICBhbmltYXRpb246IDEuNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmhlcm8gLmJpZy1saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbn1cXG5cXG4uaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJpZy1saW5rLmhlcm8tY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOYXZiYXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogOHJlbTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IGEge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC43NXM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMC41cmVtIHVuZGVybGluZSB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZS1vdXQsIHRleHQtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFjdGl2ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7O0FBRVg7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtEQUFrRDtJQUNsRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdmJhciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gM3JlbSk7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiA4cmVtO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjc1cztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAwLjVyZW0gdW5kZXJsaW5lIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlLW91dCwgdGV4dC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob21lOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uYWN0aXZlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBQcm9qZWN0cyBzZWN0aW9uIHN0eWxlcyAqL1xcbi5wcm9qZWN0cyB7XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcbiAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4uaW5kaXZpZHVhbC1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLXdoaXRlKTtcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5kaXZpZHVhbC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCBoMiB7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCBzZWN0aW9uLmRldGFpbHMsXFxuLmluZGl2aWR1YWwtcHJvamVjdCBzZWN0aW9uLmRldmVsb3BtZW50IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3QtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGxhY2Utc2VsZjogZW5kO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtbGlua3MgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWxpbmsgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAneW8nO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi8qIEhlYWRpbmcgd2l0aCB0aXRsZSBhbmQgbGlua3MgKi9cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGV0YWlscyBsaSxcXG4uZGV2ZWxvcG1lbnQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLyogVGFnIHN0eWxlcyAqL1xcblxcbi50YWdzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLnRhZ3Mgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcbn1cXG5cXG4udGFncyBzcGFuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUE0QjtBQUM1QjtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0VBQWtFO0lBQ2xFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUHJvamVjdHMgc2VjdGlvbiBzdHlsZXMgKi9cXG4ucHJvamVjdHMge1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS13aGl0ZSk7XFxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3QgaDIge1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3Qgc2VjdGlvbi5kZXRhaWxzLFxcbi5pbmRpdmlkdWFsLXByb2plY3Qgc2VjdGlvbi5kZXZlbG9wbWVudCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGltZyB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3QtbGlua3MgaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1saW5rIGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ3lvJztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4vKiBIZWFkaW5nIHdpdGggdGl0bGUgYW5kIGxpbmtzICovXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5kZXRhaWxzIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHMgbGksXFxuLmRldmVsb3BtZW50IHAge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi8qIFRhZyBzdHlsZXMgKi9cXG5cXG4udGFncyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi50YWdzIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcXG59XFxuXFxuLnRhZ3Mgc3Bhbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTbGlkZXNob3cgc3R5bGVzICovXFxuXFxuLnNsaWRlc2hvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjVyZW0gMzAwcHggMy41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlc2hvdyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyA+IGE6Zm9jdXMsXFxuLnNsaWRlc2hvdyA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zbGlkZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zbGlkZXNob3cgLmRvdCB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXNob3cgLmFycm93IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NsaWRlc2hvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTbGlkZXNob3cgc3R5bGVzICovXFxuXFxuLnNsaWRlc2hvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjVyZW0gMzAwcHggMy41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlc2hvdyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyA+IGE6Zm9jdXMsXFxuLnNsaWRlc2hvdyA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zbGlkZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zbGlkZXNob3cgLmRvdCB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXNob3cgLmFycm93IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhTGlnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLU1lZGl1bS53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1NZWRpdW0ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1TZW1pQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1TZW1pQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTWFucm9wZSAtIEdvb2dsZSBGb250cyAqL1xcbi8qIFJlZ3VsYXIgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbn1cXG4vKiBFeHRyYUxpZ2h0ICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuLyogTGlnaHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4vKiBNZWRpdW0gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4vKiBTZW1pQm9sZCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi8qIEV4dHJhQm9sZCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLyogQ3VzdG9tIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LXRleHQtY29sb3I6ICM3MTgwQUM7XFxuICAgIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNGNUYxRUQ7XFxuXFxuICAgIC0td2hpdGU6ICNGNUYxRUQ7IC8qIElzYWJlbGxpbmUgKi9cXG4gICAgLS1ibGFjazogIzAzMDEwNDtcXG4gICAgXFxuICAgIC0tYmx1ZTogIzcxODBBQzsgLyogR2xhdWNvdXMgKi9cXG4gICAgLS1taWQtYmx1ZTogIzJDM0U1MDtcXG4gICAgLS1kYXJrYmx1ZTogIzIwMUU1MDtcXG59XFxuXFxuLyogRGVmYXVsdCBwYWdlIHN0eWxlcyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbio6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbWlkLWJsdWUpIDE1JSwgdmFyKC0tYmxhY2spKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVybyxcXG4uYWJvdXQsXFxuLnByb2plY3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxufVxcblxcbmgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGxhY2Utc2VsZjogZW5kO1xcbn1cXG5cXG5oMiB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkIHZhcigtLWJsdWUpO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuaHIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBEZWZhdWx0IGxpbmtzICovXFxuXFxuYTpob3ZlcixcXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmE6aG92ZXI6bm90KGEuYWN0aXZlKTpub3QoYS5ob21lKTpub3QoYS5iaWctbGluaykge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDAuNXJlbSB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XFxufVxcblxcbmE6YWN0aXZlLFxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4vKiBMYXJnZSBsaW5rcyBpLmUuICdDb250YWN0JyBhbmQgJ1Byb2plY3RzJyBsaW5rcywgZXRjICovXFxuXFxuLmJpZy1saW5rIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQod2hpdGUsICNGNUYxRUQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZGFya2JsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMsIHRyYW5zZm9ybSAwLjVzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcXG59XFxuXFxuLmJpZy1saW5rOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUpO1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtJQUNJLHNCQUFzQjtJQUN0QjsrREFDZ0U7QUFDcEU7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ21FO0lBQ25FLGdCQUFnQjtBQUNwQjtBQUNBLFVBQVU7QUFDVjtJQUNJLHNCQUFzQjtJQUN0QjsrREFDOEQ7SUFDOUQsZ0JBQWdCO0FBQ3BCO0FBQ0EsV0FBVztBQUNYO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUMrRDtJQUMvRCxnQkFBZ0I7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ2lFO0lBQ2pFLGdCQUFnQjtBQUNwQjtBQUNBLGNBQWM7QUFDZDtJQUNJLHNCQUFzQjtJQUN0QjtnRUFDa0U7SUFDbEUsZ0JBQWdCO0FBQ3BCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7O0lBRS9CLGdCQUFnQixFQUFFLGVBQWU7SUFDakMsZ0JBQWdCOztJQUVoQixlQUFlLEVBQUUsYUFBYTtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBLHdCQUF3Qjs7QUFFeEI7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsOERBQThEO0lBQzlELDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTs7O0lBR0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLGtCQUFrQjs7QUFFbEI7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBLHlEQUF5RDs7QUFFekQ7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFucm9wZSAtIEdvb2dsZSBGb250cyAqL1xcbi8qIFJlZ3VsYXIgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG4vKiBFeHRyYUxpZ2h0ICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFMaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuLyogTGlnaHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi8qIE1lZGl1bSAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4vKiBTZW1pQm9sZCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVNlbWlCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLyogRXh0cmFCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi8qIEN1c3RvbSB2YXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS10ZXh0LWNvbG9yOiAjNzE4MEFDO1xcbiAgICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yOiAjRjVGMUVEO1xcblxcbiAgICAtLXdoaXRlOiAjRjVGMUVEOyAvKiBJc2FiZWxsaW5lICovXFxuICAgIC0tYmxhY2s6ICMwMzAxMDQ7XFxuICAgIFxcbiAgICAtLWJsdWU6ICM3MTgwQUM7IC8qIEdsYXVjb3VzICovXFxuICAgIC0tbWlkLWJsdWU6ICMyQzNFNTA7XFxuICAgIC0tZGFya2JsdWU6ICMyMDFFNTA7XFxufVxcblxcbi8qIERlZmF1bHQgcGFnZSBzdHlsZXMgKi9cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLW1pZC1ibHVlKSAxNSUsIHZhcigtLWJsYWNrKSk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8sXFxuLmFib3V0LFxcbi5wcm9qZWN0cyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG59XFxuXFxuaDIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmhyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogRGVmYXVsdCBsaW5rcyAqL1xcblxcbmE6aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hOmhvdmVyOm5vdChhLmFjdGl2ZSk6bm90KGEuaG9tZSk6bm90KGEuYmlnLWxpbmspIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAwLjVyZW0gdW5kZXJsaW5lIHZhcigtLWJsdWUpO1xcbn1cXG5cXG5hOmFjdGl2ZSxcXG5idXR0b246YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLyogTGFyZ2UgbGlua3MgaS5lLiAnQ29udGFjdCcgYW5kICdQcm9qZWN0cycgbGlua3MsIGV0YyAqL1xcblxcbi5iaWctbGluayB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHdoaXRlLCAjRjVGMUVEKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWRhcmtibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzLCB0cmFuc2Zvcm0gMC41cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ0NSwgMC4wNSwgMC41NSwgMC45NSk7XFxufVxcblxcbi5iaWctbGluazpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLXdoaXRlKTtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZXJvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVyby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXNob3cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXNob3cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vUmV0dXJucyBzY3JlZW5zaG90cyBmcm9tIHRoZSBkaXN0IGZvbGRlciB3aGljaCBtYXRjaCB0aGUgcHJvamVjdCB2YXJpYWJsZVxuZnVuY3Rpb24gR2V0U2NyZWVuc2hvdHMocHJvamVjdCwgY29udGV4dCkge1xuICAgIGxldCBpbWFnZXMgPSBbXTtcblxuICAgIC8vRm9yIGVhY2ggaXRlbSBpbiB0aGUgaW1hZ2VzL3NjcmVlbnNob3RzIGZvbGRlclxuICAgIC8vSWYgdGhlIGltYWdlIG5hbWUgbWF0Y2hlcyB0aGUgcHJvamVjdCB2YXJpYWJsZSxcbiAgICAvL0FkZCBpdCB0byB0aGUgaW1hZ2VzIGFycmF5XG4gICAgY29udGV4dC5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcyhwcm9qZWN0KSkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBjb250ZXh0KGl0ZW0pO1xuICAgICAgICAgICAgaW1hZ2VzLnB1c2godGVtcCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdldFNjcmVlbnNob3RzOyIsImltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHMnO1xuaW1wb3J0IExvYWRTZWN0aW9uIGZyb20gJy4vTG9hZFNlY3Rpb24nO1xuXG5mdW5jdGlvbiBMb2FkUGFnZSgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBcbiAgICBib2R5LmFwcGVuZChoZWFkZXIpO1xuICAgIGJvZHkuYXBwZW5kKG1haW4pO1xuXG4gICAgaGVhZGVyLmFwcGVuZChOYXYoKSk7XG4gICAgbWFpbi5hcHBlbmQoSGVybygpKTtcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGxpIGEnKTtcblxuICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpbmsudGV4dENvbnRlbnQgIT09ICdHaXRodWInICYmIGxpbmsudGV4dENvbnRlbnQgIT09ICdEb3dubG9hZCBDVicpIHtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rICE9PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgTG9hZFNlY3Rpb24obGluay50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiBhLmhvbWUnKTtcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBMb2FkU2VjdGlvbignSG9tZScpO1xuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRQYWdlOyIsImltcG9ydCBIZXJvIGZyb20gJy4vY29tcG9uZW50cy9IZXJvJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0cyc7XG5cbmZ1bmN0aW9uIExvYWRTZWN0aW9uKHNlY3Rpb24pIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICBpZiAobWFpbi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3dpdGNoKHNlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoQWJvdXQoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJvamVjdHMnOlxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoUHJvamVjdHMoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBtYWluLmFwcGVuZChIZXJvKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtYWluLmFwcGVuZChIZXJvKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkU2VjdGlvbjsiLCJmdW5jdGlvbiB0b2dnbGVBY3RpdmUoZG90cywgaW5kZXgpIHtcblxuICAgIGRvdHMuZm9yRWFjaChkb3QgPT4ge1xuICAgICAgICBpZiAoZG90cy5pbmRleE9mKGRvdCkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoZGlzcGxheSwgaW1hZ2UpIHtcbiAgICBkaXNwbGF5LnNyYyA9IGltYWdlLnNyYztcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycm93cyhhcnJvd3MsIGltYWdlcywgaW5kZXgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBhcnJvd3NbMF07XG4gICAgbGV0IG5leHQgPSBhcnJvd3NbMV07XG5cbiAgICBpZiAoaW5kZXggPT09IGltYWdlcy5sZW5ndGggLTEpIHtcbiAgICAgICAgcHJldmlvdXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHByZXZpb3VzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlvdXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gU2xpZGVzaG93KHBhcmVudHMpIHtcblxuICAgIHBhcmVudHMuZm9yRWFjaChwYXJlbnQgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBjb25zdCBhcnJvd3MgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93Jyk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy5wcmV2aW91cycpO1xuICAgICAgICBjb25zdCBuZXh0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy5uZXh0Jyk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnNsaWRlJyk7XG4gICAgICAgIGNvbnN0IGRvdHMgPSBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuZG90cycpLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpLmNoaWxkcmVuKTtcbiAgICAgICAgXG4gICAgICAgIC8vSGlkZSB0aGUgcHJldmlvdXMgYXJyb3cgb24gaW5pdGlhbCBzbGlkZXNob3cgbG9hZFxuICAgICAgICBwcmV2aW91cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBcbiAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiB7XG4gICAgICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyb3dzKGFycm93cywgaW1hZ2VzLCBkb3RzLmluZGV4T2YoZG90KSk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGRvdHMsIGRvdHMuaW5kZXhPZihkb3QpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KGRpc3BsYXksIGltYWdlc1tkb3RzLmluZGV4T2YoZG90KV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGltYWdlcy5sZW5ndGggLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGRvdHMsIGluZGV4KTtcbiAgICAgICAgICAgIHVwZGF0ZUFycm93cyhhcnJvd3MsIGltYWdlcywgaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheShkaXNwbGF5LCBpbWFnZXNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGRvdHMsIGluZGV4KTtcbiAgICAgICAgICAgIHVwZGF0ZUFycm93cyhhcnJvd3MsIGltYWdlcywgaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheShkaXNwbGF5LCBpbWFnZXNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvdzsiLCJpbXBvcnQgJy4uL3N0eWxlcy9hYm91dC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYWJvdXQuY2xhc3NOYW1lID0gJ2Fib3V0JztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgTWUnO1xuXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gYEknbSBhIHNlbGYtdGF1Z2h0IGRldmVsb3BlciB3aG8gaGFzIGJlZW4gbGVhcm5pbmcgd2ViIGRldmVsb3BtZW50IHNpbmNlIGVhcmx5IDIwMjIuIGBcbiAgICAgICAgKyBgSSdtIG5vdyBsb29raW5nIHRvIGVudGVyIHRoZSBpbmR1c3RyeSBhbmQgZ3JvdyB3aXRoaW4gYSBwcm9mZXNzaW9uYWwgZW52aXJvbm1lbnQuIGBcbiAgICAgICAgKyBgTXkgY3VycmVudCBnb2FsIGlzIHRvIGZpbmQgYSByb2xlIHdoZXJlIEkgY2FuIGJlZ2luIG15IGNhcmVlciBhbmQgY29udGludWUgZGV2ZWxvcGluZyBteSBza2lsbHNldC5gO1xuXG4gICAgY29uc3QgdG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9vbHMudGV4dENvbnRlbnQgPSAnV2hpbGUgSSBhbSBlYWdlciB0byBsZWFybiBuZXcgbGFuZ3VhZ2VzICYgZnJhbWV3b3JrcywgSSBhbSBwcmltYXJpbHkgdXNpbmcgdGhlIGZvbGxvd2luZyBhdCB0aGUgbW9tZW50Oic7XG5cbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBhYm91dC5hcHBlbmQocGFyYSwgaHIsIHRvb2xzKTtcblxuICAgIHJldHVybiBhYm91dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2hlcm8uY3NzJztcbmltcG9ydCBQb3J0cmFpdCBmcm9tICcuLi9pbWFnZXMvaWNvbi5qcGcnO1xuaW1wb3J0IE1haWwgZnJvbSAnLi4vaW1hZ2VzL2ljb25zL2VtYWlsLnBuZyc7XG5pbXBvcnQgTG9hZFNlY3Rpb24gZnJvbSAnLi4vTG9hZFNlY3Rpb24nO1xuXG5mdW5jdGlvbiBIZXJvKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVyby5jbGFzc05hbWUgPSAnaGVybyc7XG5cbiAgICBjb25zdCBwb3J0cmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBvcnRyYWl0LmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0Jyk7XG4gICAgcG9ydHJhaXQuc3JjID0gUG9ydHJhaXQ7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBIaSwgSSdtIEFpZGFuYDtcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9ICdGcm9udC1lbmQgZGV2ZWxvcGVyIGZyb20gR2xhc2dvdywgU2NvdGxhbmQnO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdWaWV3IE15IFByb2plY3RzJztcbiAgICBwcm9qZWN0cy50eXBlID0gJ2J1dHRvbic7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYmlnLWxpbmsnKTtcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGxpIGEucHJvamVjdC1saW5rJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIExvYWRTZWN0aW9uKCdQcm9qZWN0cycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWlsSWNvbi5zcmMgPSBNYWlsO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgTWUnO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYmlnLWxpbmsnLCAnaGVyby1jb250YWN0Jyk7XG4gICAgY29udGFjdC5ocmVmID0gJ21haWx0bzphZG4ubWNrQGdtYWlsLmNvbT9zdWJqZWN0PUhpIEFpZGFuJztcbiAgICBcbiAgICBjb250YWN0LmFwcGVuZChtYWlsSWNvbik7XG4gICAgaGVyby5hcHBlbmQoaGVhZGVyLCBwYXJhLCBwcm9qZWN0cywgY29udGFjdCwgcG9ydHJhaXQpO1xuXG4gICAgcmV0dXJuIGhlcm87XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL25hdi5jc3MnO1xuXG5mdW5jdGlvbiBOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lLmNsYXNzTmFtZSA9ICdob21lJztcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0FNLic7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnRhY3QuaHJlZiA9ICdtYWlsdG86YWRuLm1ja0BnbWFpbC5jb20/c3ViamVjdD1IaSBBaWRhbic7XG4gICAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdiaWctbGluaycpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhYm91dExpbmsudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcHJvamVjdHNMaW5rLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBwcm9qZWN0c0xpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSAnR2l0aHViJzsgICAgXG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY2tlbnNpcyc7XG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBcbiAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY3ZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGN2TGluay50ZXh0Q29udGVudCA9ICdWaWV3IENWJztcbiAgICBjdkxpbmsuaHJlZiA9ICcjJztcbiAgICBjdkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgICBhYm91dC5hcHBlbmQoYWJvdXRMaW5rKTtcbiAgICBwcm9qZWN0cy5hcHBlbmQocHJvamVjdHNMaW5rKTtcbiAgICBnaXRodWIuYXBwZW5kKGdpdGh1YkxpbmspO1xuICAgIGN2LmFwcGVuZChjdkxpbmspO1xuICAgIGxpc3QuYXBwZW5kKGFib3V0LCBwcm9qZWN0cywgZ2l0aHViLCBjdik7XG4gICAgbmF2LmFwcGVuZChob21lLCBsaXN0LCBjb250YWN0KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcHJvamVjdHMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NsaWRlc2hvdy5jc3MnO1xuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi9TbGlkZXNob3cnO1xuaW1wb3J0IHZpZXdMaXZlIGZyb20gJy4uL2ltYWdlcy9pY29ucy9saXZlLnBuZyc7XG5pbXBvcnQgdmlld0dpdGh1YiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvZ2l0aHViLnBuZyc7XG5pbXBvcnQgR2V0U2NyZWVuc2hvdHMgZnJvbSAnLi4vR2V0U2NyZWVuc2hvdHMnO1xuXG5mdW5jdGlvbiBHZXRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0ge1xuICAgICAgICB0aXRsZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICBhbGlhczogJ2JhdHRsZXNoaXAnLFxuICAgICAgICBpbmZvOiBbXG4gICAgICAgICAgICBgQ2xhc3NpYyBCYXR0bGVzaGlwIGJvYXJkIGdhbWVgLCBcbiAgICAgICAgICAgIGBQbGF5IGFnYWluc3QgYW4gQUkgcGxheWVyYCxcbiAgICAgICAgICAgIGBGaXJzdCBwbGF5ZXIgdG8gZGVzdHJveSB0aGUgZW5lbXkncyA1IHNoaXBzIHdpbnNgLFxuICAgICAgICBdLFxuICAgICAgICBkZXZlbG9wbWVudDogJ0kgd3JvdGUgdW5pdCB0ZXN0cyB3aXRoIEplc3QgZHVyaW5nIGRldmVsb3BtZW50IG9mIHRoaXMgcHJvamVjdCBhbmQgcHVycG9zZWZ1bGx5IGJyb2tlIHRoZSBwcm9qZWN0IHdpdGggZWFjaCBuZXcgdGVzdCB1bnRpbCBmdW5jdGlvbmFsaXR5IHdhcyBjb21wbGV0ZS4nLFxuICAgICAgICBsaXZlOiAnYmF0dGxlc2hpcCcsXG4gICAgICAgIGNvZGU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgdGFnczogWyAnSFRNTCcsICdDU1MnLCAnSmF2YVNjcmlwdCcsICdXZWJwYWNrJywgJ0plc3QnLCAnVEREJyBdLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCB3ZWF0aGVyID0ge1xuICAgICAgICB0aXRsZTogJ1dlYXRoZXIgRm9yZWNhc3QnLFxuICAgICAgICBhbGlhczogJ2ZvcmVjYXN0JyxcbiAgICAgICAgaW5mbzogW1xuICAgICAgICAgICAgYEVudGVyIGEgbG9jYXRpb24gdG8gc2VhcmNoIGZvciB0aGUgd2VhdGhlcmAsXG4gICAgICAgICAgICBgQ3VycmVudCB3ZWF0aGVyIHdpbGwgZGlzcGxheSBmb3IgdGhlIGxvY2F0aW9uYCxcbiAgICAgICAgICAgIGBMYXRlciAmIHRvbW9ycm93IGZvcmVjYXN0cyB3aWxsIGFsc28gZGlzcGxheWAsXG4gICAgICAgIF0sXG4gICAgICAgIGRldmVsb3BtZW50OiBgSSB1c2VkIGFzeW5jIGFuZCBhd2FpdCBhbG9uZyB3aXRoIG11bHRpcGxlIEFQSXMgZnJvbSBPcGVuV2VhdGhlciBzdWNoIGFzICdHZW9jb2RpbmcnLCAnQ3VycmVudFdlYXRoZXInLCBhbmQgJzMgSG91ciAvIDUgRGF5IEZvcmVjYXN0Jy5gLFxuICAgICAgICBsaXZlOiAnd2VhdGhlci1mb3JlY2FzdCcsXG4gICAgICAgIGNvZGU6ICd3ZWF0aGVyLWZvcmVjYXN0JyxcbiAgICAgICAgdGFnczogWyAnSFRNTCcsICdDU1MnLCAnSmF2YVNjcmlwdCcsICdXZWJwYWNrJywgJ0FQSScsICdBc3luYyAvIEF3YWl0JyBdLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICB0aXRsZTogJ1RvLURvIExpc3QnLFxuICAgICAgICBhbGlhczogJ3RvLWRvLWxpc3QnLFxuICAgICAgICBpbmZvOiBbXG4gICAgICAgICAgICBgVmlldyBsaXN0cyBvbiB0aGUgbGVmdCAmIHRhc2tzIG9uIHRoZSByaWdodGAsXG4gICAgICAgICAgICBgQWRkIGEgbmV3IGxpc3Qgb3IgdGFzayB3aXRoaW4gZWl0aGVyIHNlY3Rpb25gLFxuICAgICAgICAgICAgYE1hcmsgYSB0YXNrcyBhcyBjb21wbGV0ZSwgb3IgY2hhbmdlIHRhc2sgcHJpb3JpdHlgLFxuICAgICAgICBdLFxuICAgICAgICBkZXZlbG9wbWVudDogYEkgdXNlZCBhc3luYyBhbmQgYXdhaXQgYWxvbmcgd2l0aCBtdWx0aXBsZSBBUElzIGZyb20gT3BlbldlYXRoZXIgc3VjaCBhcyAnR2VvY29kaW5nJywgJ0N1cnJlbnRXZWF0aGVyJywgYW5kICczIEhvdXIgLyA1IERheSBGb3JlY2FzdCcuYCxcbiAgICAgICAgbGl2ZTogJ3RvLWRvLWxpc3QnLFxuICAgICAgICBjb2RlOiAndG8tZG8tbGlzdCcsXG4gICAgICAgIHRhZ3M6IFsgJ0hUTUwnLCAnQ1NTJywgJ0phdmFTY3JpcHQnLCAnV2VicGFjaycsICdMb2NhbFN0b3JhZ2UnIF0sXG4gICAgICAgIGltYWdlczogW10sXG4gICAgfTtcblxuICAgIHJldHVybiBbIGJhdHRsZXNoaXAsIHdlYXRoZXIsIHRvZG8gXTtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlU2xpZGVzaG93KGltYWdlcykge1xuICAgIGNvbnN0IHNsaWRlc2hvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzbGlkZXNob3cuY2xhc3NOYW1lID0gJ3NsaWRlc2hvdyc7XG5cbiAgICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZpb3VzLmNsYXNzTGlzdC5hZGQoJ2Fycm93JywgJ3ByZXZpb3VzJyk7XG4gICAgcHJldmlvdXMuaW5uZXJIVE1MID0gJyZsc2FxdW87JztcblxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2Fycm93JywgJ25leHQnKTtcbiAgICBuZXh0LmlubmVySFRNTCA9IGAmcnNhcXVvO2A7XG5cbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNsaWRlLmNsYXNzTmFtZSA9ICdzbGlkZSc7XG4gICAgc2xpZGUuc3JjID0gaW1hZ2VzWzBdO1xuXG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzRGl2LmNsYXNzTmFtZSA9ICdpbWFnZXMnO1xuICAgIFxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgaW1hZ2VzRGl2LmFwcGVuZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnO1xuICAgICAgICBkb3RzLmFwcGVuZChkb3QpO1xuICAgIH0pO1xuICAgIFxuICAgIGRvdHMuY2xhc3NOYW1lID0gJ2RvdHMnO1xuICAgIFxuICAgIGlmIChkb3RzLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIGRvdHMuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc2xpZGVzaG93LmFwcGVuZChwcmV2aW91cywgc2xpZGUsIG5leHQsIGRvdHMsIGltYWdlc0Rpdik7XG5cbiAgICByZXR1cm4gc2xpZGVzaG93O1xufVxuXG5mdW5jdGlvbiBDcmVhdGVUYWdzKHRhZ3MpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFncycpO1xuICAgIFxuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGFnO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZChzcGFuKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlTGlua3MobGlua3MpIHtcbiAgICBjb25zdCBCQVNFX0dJVEhVQl9VUkwgPSAnaHR0cHM6Ly9naXRodWIuY29tL21ja2Vuc2lzLyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3Byb2plY3QtbGlua3MnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdWaWV3IFByb2plY3QnO1xuXG4gICAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7ICAgIFxuICAgIGNvbnN0IGxpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsaXZlTGluay5ocmVmID0gbGlua3MubGl2ZTtcbiAgICBsaXZlTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaXZlTGluay50aXRsZSA9ICdWaWV3IHByb2plY3QgbGl2ZSc7XG4gICAgbGl2ZS5zcmMgPSB2aWV3TGl2ZTtcbiAgICBcbiAgICBjb25zdCBjb2RlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29kZUxpbmsuaHJlZiA9IEJBU0VfR0lUSFVCX1VSTCArIGxpbmtzLmdpdGh1YjtcbiAgICBjb2RlTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb2RlTGluay50aXRsZSA9ICdWaWV3IG9uIEdpdEh1Yic7XG4gICAgY29kZS5zcmMgPSB2aWV3R2l0aHViO1xuXG4gICAgbGl2ZUxpbmsuYXBwZW5kKGxpdmUpO1xuICAgIGNvZGVMaW5rLmFwcGVuZChjb2RlKTtcblxuICAgIHNlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIGxpdmVMaW5rLCBjb2RlTGluayk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlRGV0YWlsc1NlY3Rpb24oZGV0YWlscykge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRGV0YWlscyc7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGRldGFpbHMuZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gcGllY2U7XG4gICAgICAgIGxpc3QuYXBwZW5kKGl0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChoZWFkaW5nLCBsaXN0KTtcbiAgICBcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlRGV2ZWxvcG1lbnRTZWN0aW9uKGluZm8pIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGV2ZWxvcG1lbnQnKTtcbiAgICBcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0RldmVsb3BtZW50IFByb2Nlc3MnO1xuICAgIFxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBpbmZvO1xuXG4gICAgc2VjdGlvbi5hcHBlbmQoaGVhZGluZywgcGFyYWdyYXBoKTtcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBhcnRpY2xlLmNsYXNzTmFtZSA9ICdpbmRpdmlkdWFsLXByb2plY3QnO1xuICAgIFxuICAgIC8vSGVhZGVyIFNlY3Rpb25cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIC8vSGVhZGluZ1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIC8vTGlua3NcbiAgICBjb25zdCBsaW5rcyA9IENyZWF0ZUxpbmtzKHsgbGl2ZTogcHJvamVjdC5saXZlLCBnaXRodWI6IHByb2plY3QuY29kZSB9KTtcbiAgICAvL1NsaWRlc2hvd1xuICAgIGNvbnN0IHNsaWRlc2hvdyA9IENyZWF0ZVNsaWRlc2hvdyhwcm9qZWN0LmltYWdlcyk7XG4gICAgLy9UYWdzXG4gICAgY29uc3QgdGFncyA9IENyZWF0ZVRhZ3MocHJvamVjdC50YWdzKTtcbiAgICAvL0luZm9cbiAgICBjb25zdCBpbmZvID0gQ3JlYXRlRGV0YWlsc1NlY3Rpb24ocHJvamVjdC5pbmZvKTtcbiAgICAvL0RldmVsb3BtZW50XG4gICAgY29uc3QgZGV2ZWxvcG1lbnQgPSBDcmVhdGVEZXZlbG9wbWVudFNlY3Rpb24ocHJvamVjdC5kZXZlbG9wbWVudCk7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZChoZWFkaW5nLCBsaW5rcyk7XG4gICAgYXJ0aWNsZS5hcHBlbmQoaGVhZGVyLCB0YWdzLCBpbmZvLCBkZXZlbG9wbWVudCwgc2xpZGVzaG93KTtcbiAgICBcbiAgICByZXR1cm4gYXJ0aWNsZTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgcHJvamVjdHMuY2xhc3NOYW1lID0gJ3Byb2plY3RzJztcblxuICAgIGNvbnN0IGxpc3QgPSBHZXRQcm9qZWN0cygpO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBsaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QuaW1hZ2VzID0gR2V0U2NyZWVuc2hvdHMocHJvamVjdC5hbGlhcywgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvc2NyZWVuc2hvdHMvJywgZmFsc2UsIC9cXC5qcGckLykpO1xuICAgICAgICBsZXQgcGFyZW50ID0gQ3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kKHBhcmVudCk7XG4gICAgICAgIGxldCBzbGlkZXNob3cgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdycpXG4gICAgICAgIHBhcmVudHMucHVzaChzbGlkZXNob3cpO1xuICAgIH0pO1xuXG4gICAgU2xpZGVzaG93KHBhcmVudHMpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcDAuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzL2JhdHRsZXNoaXAwLmpwZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcDEuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzL2JhdHRsZXNoaXAxLmpwZ1wiLFxuXHRcIi4vZm9yZWNhc3QwLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy9mb3JlY2FzdDAuanBnXCIsXG5cdFwiLi9mb3JlY2FzdDEuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzL2ZvcmVjYXN0MS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzIHN5bmMgXFxcXC5qcGckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBMb2FkUGFnZSBmcm9tICcuL0xvYWRQYWdlJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBMb2FkUGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9