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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/animations.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/animations.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Animations */\n\n@keyframes slideInFromTop {\n    0% {\n        transform: translateY(-10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes slideInFromRight {\n    0% {\n        transform: translateX(1%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes slideInFromLeft {\n    0% {\n        transform: translateX(-1%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes bigLinkWiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(-2deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n/* Animations if reduced motion isn't enabled for user */\n@media (prefers-reduced-motion: no-preference) {\n    nav .contact:hover {\n        animation: .75s ease 0s infinite bigLinkWiggle;\n    }\n    \n    .hero h1,\n    .hero p {\n        animation: 0.25s ease-in 0s 1 slideInFromTop;\n    }\n    \n    .hero img.portrait {\n        animation: 0.75s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero button.big-link {\n        animation: 1.25s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero a.big-link {\n        animation: 1.5s ease-in 0s 1 slideInFromTop;\n    }\n\n    .individual-project:nth-of-type(odd) {\n        animation: 0.25s ease-in 0s 1 slideInFromRight;\n    }\n    \n    .individual-project:nth-of-type(even) {\n        animation: 0.25s ease-in 0s 1 slideInFromLeft;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/animations.css"],"names":[],"mappings":"AAAA,sBAAsB;;AAEtB;IACI;QACI,2BAA2B;QAC3B,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,yBAAyB;QACzB,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,0BAA0B;QAC1B,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA,wDAAwD;AACxD;IACI;QACI,8CAA8C;IAClD;;IAEA;;QAEI,4CAA4C;IAChD;;IAEA;QACI,4CAA4C;IAChD;;IAEA;QACI,4CAA4C;IAChD;;IAEA;QACI,2CAA2C;IAC/C;;IAEA;QACI,8CAA8C;IAClD;;IAEA;QACI,6CAA6C;IACjD;AACJ","sourcesContent":["/* Custom Animations */\n\n@keyframes slideInFromTop {\n    0% {\n        transform: translateY(-10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes slideInFromRight {\n    0% {\n        transform: translateX(1%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes slideInFromLeft {\n    0% {\n        transform: translateX(-1%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes bigLinkWiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(-2deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n/* Animations if reduced motion isn't enabled for user */\n@media (prefers-reduced-motion: no-preference) {\n    nav .contact:hover {\n        animation: .75s ease 0s infinite bigLinkWiggle;\n    }\n    \n    .hero h1,\n    .hero p {\n        animation: 0.25s ease-in 0s 1 slideInFromTop;\n    }\n    \n    .hero img.portrait {\n        animation: 0.75s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero button.big-link {\n        animation: 1.25s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero a.big-link {\n        animation: 1.5s ease-in 0s 1 slideInFromTop;\n    }\n\n    .individual-project:nth-of-type(odd) {\n        animation: 0.25s ease-in 0s 1 slideInFromRight;\n    }\n    \n    .individual-project:nth-of-type(even) {\n        animation: 0.25s ease-in 0s 1 slideInFromLeft;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Hero section styles */\n\n.hero {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(4, max-content);\n    column-gap: 2rem;\n    row-gap: 0rem;\n    max-width: 1000px;\n}\n\n.hero p {\n    grid-column: 1 / -1;\n    font-size: 2.5rem;\n    color: var(--blue);\n}\n\n.hero .big-link {\n    margin-top: 2rem;\n    padding: 2rem;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.hero button:hover {\n    transform: rotate(-2deg);\n}\n\n.hero img.portrait {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    place-self: center;\n    padding: 0.25rem;\n    border: 0.5rem solid var(--white);\n    border-radius: 50%;\n}\n\n.big-link.hero-contact {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: max-content max-content;\n    place-items: center;\n    place-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/hero.css"],"names":[],"mappings":"AAAA,wBAAwB;;AAExB;IACI,8BAA8B;IAC9B,0CAA0C;IAC1C,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8CAA8C;IAC9C,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb","sourcesContent":["/* Hero section styles */\n\n.hero {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(4, max-content);\n    column-gap: 2rem;\n    row-gap: 0rem;\n    max-width: 1000px;\n}\n\n.hero p {\n    grid-column: 1 / -1;\n    font-size: 2.5rem;\n    color: var(--blue);\n}\n\n.hero .big-link {\n    margin-top: 2rem;\n    padding: 2rem;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.hero button:hover {\n    transform: rotate(-2deg);\n}\n\n.hero img.portrait {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    place-self: center;\n    padding: 0.25rem;\n    border: 0.5rem solid var(--white);\n    border-radius: 50%;\n}\n\n.big-link.hero-contact {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: max-content max-content;\n    place-items: center;\n    place-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/external.png */ "./src/images/icons/external.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Navbar */\n\nheader {\n    font-size: 1.5rem;\n    background-color: var(--mid-blue);\n    position: sticky;\n    top: 0;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr max-content max-content;\n    align-items: center;\n    column-gap: 2rem;\n    width: calc(100vw - 1rem);\n}\n\nnav ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 10rem;\n    place-items: center;\n    list-style: none;\n}\n\nnav a {\n    color: var(--white);\n    transition: text-decoration 0.75s;\n    text-decoration: 0.5rem underline transparent;\n}\n\nnav li {\n    display: grid;\n    grid-template-columns: max-content 24px;\n    gap: 0.25rem;\n}\n\nnav li.external:hover::after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 2rem;\n}\n\n.home {\n    font-weight: 800;\n    font-size: 4.5rem;\n    text-decoration: none;\n    margin-left: 2rem;\n    place-self: start;\n    transition: color 0.5s ease-out, text-shadow 0.25s ease-in-out;\n}\n\n\n.home:hover {\n    color: var(--blue);\n    text-shadow: 3px 3px var(--black);\n}\n\n.active {\n    color: var(--white);\n    font-weight: 800;\n}\n\n.active:hover {\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/styles/nav.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,iBAAiB;IACjB,iCAAiC;IACjC,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kDAAkD;IAClD,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;IACjC,6CAA6C;AACjD;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,gDAA4C;IAC5C,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,8DAA8D;AAClE;;;AAGA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* Navbar */\n\nheader {\n    font-size: 1.5rem;\n    background-color: var(--mid-blue);\n    position: sticky;\n    top: 0;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr max-content max-content;\n    align-items: center;\n    column-gap: 2rem;\n    width: calc(100vw - 1rem);\n}\n\nnav ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 10rem;\n    place-items: center;\n    list-style: none;\n}\n\nnav a {\n    color: var(--white);\n    transition: text-decoration 0.75s;\n    text-decoration: 0.5rem underline transparent;\n}\n\nnav li {\n    display: grid;\n    grid-template-columns: max-content 24px;\n    gap: 0.25rem;\n}\n\nnav li.external:hover::after {\n    content: url('../images/icons/external.png');\n    width: 2rem;\n}\n\n.home {\n    font-weight: 800;\n    font-size: 4.5rem;\n    text-decoration: none;\n    margin-left: 2rem;\n    place-self: start;\n    transition: color 0.5s ease-out, text-shadow 0.25s ease-in-out;\n}\n\n\n.home:hover {\n    color: var(--blue);\n    text-shadow: 3px 3px var(--black);\n}\n\n.active {\n    color: var(--white);\n    font-weight: 800;\n}\n\n.active:hover {\n    cursor: default;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Projects section styles */\n\n.projects {\n    scroll-snap-type: y mandatory;\n    scroll-snap-stop: always;\n    scroll-behavior: smooth;\n}\n\n.individual-project {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content repeat(2, max-content);\n    row-gap: 1rem;\n    margin: 1rem 2rem;\n    padding: 2rem;\n    border: 3px solid var(--white);\n    border-radius: 1rem;\n    box-shadow: 1px 1px 5px var(--white);\n    scroll-snap-align: start;\n    transition: background-color 0.25s ease-in-out;\n}\n\n.individual-project:hover {\n    background-color: rgba(0,0,0,0.25);\n}\n\n.individual-project h2 {\n    transition: color 0.5s ease-in-out;\n    text-shadow: 3px 3px var(--black);\n}\n\n.individual-project section.details,\n.individual-project section.development {\n    gap: 1rem;\n    place-self: start;\n}\n\n.project-links {\n    display: grid;\n    grid-column: 2 / -1;\n    justify-content: end;\n    place-self: end;\n    grid-auto-flow: column;\n    place-items: center;\n    gap: 1.5rem;\n}\n\n.project-links img {\n    transition: transform 0.25s ease-in-out;\n}\n\n.project-links img:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.projects-link a:hover::after {\n    content: 'yo';\n    border: 1px solid red;\n    padding: 3rem;\n}\n\n/* Heading with title and links */\n.header {\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    place-content: center;\n    grid-template-columns: max-content 1fr;\n    margin-bottom: 1rem;\n}\n\n.details li {\n    list-style: none;\n}\n\n.details li,\n.development p {\n    font-size: 1.3rem;\n    line-height: 2.25rem;\n}\n\n/* Tag styles */\n\n.tags {\n    display: grid;\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    grid-auto-rows: max-content;\n    grid-auto-columns: max-content;\n    place-items: center;\n    place-self: start;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.tags span {\n    padding: 0.5rem 0.75rem;\n    text-align: center;\n    background-color: var(--darkblue);\n    border-radius: 1rem;\n    font-weight: 400;\n    letter-spacing: 0.75px;\n    outline: 1px solid black;\n    box-shadow: 0 0 5px black;\n}\n\n.tags span:hover {\n    box-shadow: 0 0 10px black;\n    background-color: var(--mid-blue);\n    outline: 2px solid black;\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/styles/projects.css"],"names":[],"mappings":"AAAA,4BAA4B;;AAE5B;IACI,6BAA6B;IAC7B,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kEAAkE;IAClE,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oCAAoC;IACpC,wBAAwB;IACxB,8CAA8C;AAClD;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;;IAEI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,aAAa;AACjB;;AAEA,iCAAiC;AACjC;IACI,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;IACrB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA,eAAe;;AAEf;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,iCAAiC;IACjC,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;IAC1B,iCAAiC;IACjC,wBAAwB;IACxB,eAAe;AACnB","sourcesContent":["/* Projects section styles */\n\n.projects {\n    scroll-snap-type: y mandatory;\n    scroll-snap-stop: always;\n    scroll-behavior: smooth;\n}\n\n.individual-project {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content repeat(2, max-content);\n    row-gap: 1rem;\n    margin: 1rem 2rem;\n    padding: 2rem;\n    border: 3px solid var(--white);\n    border-radius: 1rem;\n    box-shadow: 1px 1px 5px var(--white);\n    scroll-snap-align: start;\n    transition: background-color 0.25s ease-in-out;\n}\n\n.individual-project:hover {\n    background-color: rgba(0,0,0,0.25);\n}\n\n.individual-project h2 {\n    transition: color 0.5s ease-in-out;\n    text-shadow: 3px 3px var(--black);\n}\n\n.individual-project section.details,\n.individual-project section.development {\n    gap: 1rem;\n    place-self: start;\n}\n\n.project-links {\n    display: grid;\n    grid-column: 2 / -1;\n    justify-content: end;\n    place-self: end;\n    grid-auto-flow: column;\n    place-items: center;\n    gap: 1.5rem;\n}\n\n.project-links img {\n    transition: transform 0.25s ease-in-out;\n}\n\n.project-links img:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.projects-link a:hover::after {\n    content: 'yo';\n    border: 1px solid red;\n    padding: 3rem;\n}\n\n/* Heading with title and links */\n.header {\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    place-content: center;\n    grid-template-columns: max-content 1fr;\n    margin-bottom: 1rem;\n}\n\n.details li {\n    list-style: none;\n}\n\n.details li,\n.development p {\n    font-size: 1.3rem;\n    line-height: 2.25rem;\n}\n\n/* Tag styles */\n\n.tags {\n    display: grid;\n    grid-column: 1 / -1;\n    grid-auto-flow: column;\n    grid-auto-rows: max-content;\n    grid-auto-columns: max-content;\n    place-items: center;\n    place-self: start;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.tags span {\n    padding: 0.5rem 0.75rem;\n    text-align: center;\n    background-color: var(--darkblue);\n    border-radius: 1rem;\n    font-weight: 400;\n    letter-spacing: 0.75px;\n    outline: 1px solid black;\n    box-shadow: 0 0 5px black;\n}\n\n.tags span:hover {\n    box-shadow: 0 0 10px black;\n    background-color: var(--mid-blue);\n    outline: 2px solid black;\n    cursor: default;\n}"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/external.png */ "./src/images/icons/external.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Manrope - Google Fonts */\n/* Regular */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n}\n/* ExtraLight */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n    font-weight: 200;\n}\n/* Light */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff');\n    font-weight: 300;\n}\n/* Medium */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff');\n    font-weight: 500;\n}\n/* SemiBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff');\n    font-weight: 600;\n}\n/* ExtraBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('woff');\n    font-weight: 800;\n}\n\n/* Custom variables */\n\n:root {\n    --primary-text-color: #7180AC;\n    --secondary-text-color: #F5F1ED;\n\n    --white: #F5F1ED; /* Isabelline */\n    --black: #030104;\n    \n    --blue: #7180AC; /* Glaucous */\n    --mid-blue: #2C3E50;\n    --darkblue: #201E50;\n}\n\n/* Default page styles */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*:hover {\n    cursor: default;\n}\n\nhtml {\n    font-family: 'Manrope', sans-serif;\n    background: linear-gradient(var(--mid-blue) 15%, var(--black));\n    background-attachment: fixed;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    color: var(--white);\n}\n\nmain {\n    display: grid;\n    margin: 0 auto;\n    max-width: 1000px;\n}\n\nsection {\n    display: grid;\n    place-content: center;\n}\n\n.hero,\n.about,\n.projects {\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n    grid-auto-flow: row;\n    place-content: center;\n    row-gap: 0.5rem;\n}\n\n.burger {\n    display: none;\n}\n\nh1 {\n    grid-column: 1 / -1;\n    font-size: 5rem;\n    place-self: start;\n}\n\nh2 {\n    place-self: center;\n    font-size: 2.3rem;\n    font-weight: 800;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n    border-bottom: 0.5rem solid var(--blue);\n}\n\nh4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nhr {\n    width: 50%;\n    place-self: center;\n    height: 0.5rem;\n    margin: 1rem;\n    border-radius: 2rem;\n    background-color: var(--white);\n    outline: none;\n    border: none;\n}\n\n/* Default links */\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover:not(a.active):not(a.home):not(a.big-link) {\n    text-decoration: 0.5rem underline var(--blue);\n}\n\na:active,\nbutton:active {\n    opacity: 0.75;\n}\n\n/* Large links i.e. 'Contact' and 'Projects' links, etc */\n\n.big-link {\n    padding: 1rem;\n    font-weight: 800;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: var(--darkblue);\n    background-color: var(--white);\n    background: radial-gradient(white, #F5F1ED);\n    outline: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 0 10px var(--darkblue);\n    border-radius: 1.5rem;\n    transition: box-shadow 0.25s, transform 0.5s;\n    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.big-link:hover {\n    box-shadow: 0 0 10px var(--white);\n    outline: 4px solid var(--black);\n    transform: rotate(2deg);\n}\n\n/* Media query for burger nav menu */\n@media (max-width: 950px) {\n    \n        nav ul {\n        display: none;\n        grid-auto-flow: row;\n        grid-auto-rows: max-content;\n        place-content: start;\n        width: 100%;\n        position: absolute;\n        top: 0rem;\n        padding-top: 0.5rem;\n        padding-bottom: 1rem;\n        font-size: 2rem;\n        background-color: var(--mid-blue);\n        transition: all 20s ease;\n    }\n\n    nav ul.open {\n        display: grid;\n    }\n\n    .burger {\n        display: grid;\n        padding: 1rem;\n        grid-auto-flow: row;\n        gap: 5px;\n        width: 100%;\n        z-index: 1;\n        border: none;\n        background-color: transparent;\n        grid-column: 3;\n    }\n\n    .burger span {\n        width: 40px;\n        height: 3px;\n        background-color: var(--white);\n        transition: transform 0.25s ease, background-color 0.25s ease;\n        border-radius: 2rem;\n        pointer-events: none;\n    }\n\n    .burger:hover,\n    .burger span:hover {\n        cursor: pointer;\n    }\n\n    .burger span.open {\n        transition: transform 0.25s ease-in-out;\n    }\n\n    .burger:hover span {\n        background-color: var(--blue);\n    }\n\n    .burger.open :nth-child(1) {\n        transform: rotate(45deg);\n        position: absolute;\n        top: 50%;\n        transform-origin: 50% 50%;\n    }\n\n    .burger.open :nth-child(2) {\n        opacity: 0;\n        transform: rotate(0deg) scale(0.1, 0.1);\n    }\n\n    .burger.open :nth-child(3) {\n        position: absolute;\n        top: 50%;\n        transform: rotate(-45deg);\n        transform-origin: 50% 50%;\n    }\n\n    nav ul li {\n        margin-left: 1rem;\n        place-self: start;\n        padding: 1rem 0;\n        text-transform: uppercase;\n        font-weight: 600;\n        letter-spacing: 0.25rem;\n    }\n\n    /* Remove styling for the Contact nav link */\n    nav ul .contact {\n        padding: 0;\n        margin: 0;\n        border-radius: 0;\n        background: none;\n        color: var(--white);\n        font-weight: unset;\n        outline: none;\n        box-shadow: none;\n        font-size: unset;\n    }\n\n    nav .big-link {\n        text-decoration: 0.5rem underline transparent;\n    }\n    \n    nav .big-link:hover {\n        animation: none;\n        transform: rotate(0);\n        outline: none;\n        box-shadow: none;\n        transition: text-decoration 0.75s;\n        text-decoration: 0.5rem underline var(--blue);\n    }\n\n    nav li.external::after {\n        content: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n        width: 2rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Manrope - Google Fonts */\n/* Regular */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Regular.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Regular.woff') format('woff');\n}\n/* ExtraLight */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-ExtraLight.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-ExtraLight.woff') format('woff');\n    font-weight: 200;\n}\n/* Light */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Light.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Light.woff') format('woff');\n    font-weight: 300;\n}\n/* Medium */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Medium.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Medium.woff') format('woff');\n    font-weight: 500;\n}\n/* SemiBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-SemiBold.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-SemiBold.woff') format('woff');\n    font-weight: 600;\n}\n/* ExtraBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-ExtraBold.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-ExtraBold.woff') format('woff');\n    font-weight: 800;\n}\n\n/* Custom variables */\n\n:root {\n    --primary-text-color: #7180AC;\n    --secondary-text-color: #F5F1ED;\n\n    --white: #F5F1ED; /* Isabelline */\n    --black: #030104;\n    \n    --blue: #7180AC; /* Glaucous */\n    --mid-blue: #2C3E50;\n    --darkblue: #201E50;\n}\n\n/* Default page styles */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*:hover {\n    cursor: default;\n}\n\nhtml {\n    font-family: 'Manrope', sans-serif;\n    background: linear-gradient(var(--mid-blue) 15%, var(--black));\n    background-attachment: fixed;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    color: var(--white);\n}\n\nmain {\n    display: grid;\n    margin: 0 auto;\n    max-width: 1000px;\n}\n\nsection {\n    display: grid;\n    place-content: center;\n}\n\n.hero,\n.about,\n.projects {\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n    grid-auto-flow: row;\n    place-content: center;\n    row-gap: 0.5rem;\n}\n\n.burger {\n    display: none;\n}\n\nh1 {\n    grid-column: 1 / -1;\n    font-size: 5rem;\n    place-self: start;\n}\n\nh2 {\n    place-self: center;\n    font-size: 2.3rem;\n    font-weight: 800;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n    border-bottom: 0.5rem solid var(--blue);\n}\n\nh4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nhr {\n    width: 50%;\n    place-self: center;\n    height: 0.5rem;\n    margin: 1rem;\n    border-radius: 2rem;\n    background-color: var(--white);\n    outline: none;\n    border: none;\n}\n\n/* Default links */\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover:not(a.active):not(a.home):not(a.big-link) {\n    text-decoration: 0.5rem underline var(--blue);\n}\n\na:active,\nbutton:active {\n    opacity: 0.75;\n}\n\n/* Large links i.e. 'Contact' and 'Projects' links, etc */\n\n.big-link {\n    padding: 1rem;\n    font-weight: 800;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: var(--darkblue);\n    background-color: var(--white);\n    background: radial-gradient(white, #F5F1ED);\n    outline: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 0 10px var(--darkblue);\n    border-radius: 1.5rem;\n    transition: box-shadow 0.25s, transform 0.5s;\n    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.big-link:hover {\n    box-shadow: 0 0 10px var(--white);\n    outline: 4px solid var(--black);\n    transform: rotate(2deg);\n}\n\n/* Media query for burger nav menu */\n@media (max-width: 950px) {\n    \n        nav ul {\n        display: none;\n        grid-auto-flow: row;\n        grid-auto-rows: max-content;\n        place-content: start;\n        width: 100%;\n        position: absolute;\n        top: 0rem;\n        padding-top: 0.5rem;\n        padding-bottom: 1rem;\n        font-size: 2rem;\n        background-color: var(--mid-blue);\n        transition: all 20s ease;\n    }\n\n    nav ul.open {\n        display: grid;\n    }\n\n    .burger {\n        display: grid;\n        padding: 1rem;\n        grid-auto-flow: row;\n        gap: 5px;\n        width: 100%;\n        z-index: 1;\n        border: none;\n        background-color: transparent;\n        grid-column: 3;\n    }\n\n    .burger span {\n        width: 40px;\n        height: 3px;\n        background-color: var(--white);\n        transition: transform 0.25s ease, background-color 0.25s ease;\n        border-radius: 2rem;\n        pointer-events: none;\n    }\n\n    .burger:hover,\n    .burger span:hover {\n        cursor: pointer;\n    }\n\n    .burger span.open {\n        transition: transform 0.25s ease-in-out;\n    }\n\n    .burger:hover span {\n        background-color: var(--blue);\n    }\n\n    .burger.open :nth-child(1) {\n        transform: rotate(45deg);\n        position: absolute;\n        top: 50%;\n        transform-origin: 50% 50%;\n    }\n\n    .burger.open :nth-child(2) {\n        opacity: 0;\n        transform: rotate(0deg) scale(0.1, 0.1);\n    }\n\n    .burger.open :nth-child(3) {\n        position: absolute;\n        top: 50%;\n        transform: rotate(-45deg);\n        transform-origin: 50% 50%;\n    }\n\n    nav ul li {\n        margin-left: 1rem;\n        place-self: start;\n        padding: 1rem 0;\n        text-transform: uppercase;\n        font-weight: 600;\n        letter-spacing: 0.25rem;\n    }\n\n    /* Remove styling for the Contact nav link */\n    nav ul .contact {\n        padding: 0;\n        margin: 0;\n        border-radius: 0;\n        background: none;\n        color: var(--white);\n        font-weight: unset;\n        outline: none;\n        box-shadow: none;\n        font-size: unset;\n    }\n\n    nav .big-link {\n        text-decoration: 0.5rem underline transparent;\n    }\n    \n    nav .big-link:hover {\n        animation: none;\n        transform: rotate(0);\n        outline: none;\n        box-shadow: none;\n        transition: text-decoration 0.75s;\n        text-decoration: 0.5rem underline var(--blue);\n    }\n\n    nav li.external::after {\n        content: url('../images/icons/external.png');\n        width: 2rem;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/animations.css":
/*!***********************************!*\
  !*** ./src/styles/animations.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/animations.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
            if (link.parentElement.className !== 'external') {
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
    
    const burger = document.querySelector('.burger');
    const list = document.querySelector('nav ul');

    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        list.classList.remove('open');
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
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");




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
    tools.textContent = 'Some more info here';

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
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");
/* harmony import */ var _styles_hero_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/hero.css */ "./src/styles/hero.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _images_icon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon.jpg */ "./src/images/icon.jpg");
/* harmony import */ var _images_icons_email_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/email.png */ "./src/images/icons/email.png");
/* harmony import */ var _LoadSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadSection */ "./src/LoadSection.js");







function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const portrait = document.createElement('img');
    portrait.classList.add('portrait');
    portrait.src = _images_icon_jpg__WEBPACK_IMPORTED_MODULE_3__;

    const header = document.createElement('h1');
    header.textContent = `Hi, I'm Aidan`;

    const para = document.createElement('p');
    para.textContent = 'Front-end developer from Glasgow, Scotland';

    const projects = document.createElement('button');
    projects.textContent = 'View My Projects';
    projects.type = 'button';
    projects.classList.add('big-link','hero-projects');
    projects.addEventListener('click', () => {
        document.querySelector('nav li a.project-link').classList.add('active');
        (0,_LoadSection__WEBPACK_IMPORTED_MODULE_5__["default"])('Projects');
    });

    const mailIcon = document.createElement('img');
    mailIcon.src = _images_icons_email_png__WEBPACK_IMPORTED_MODULE_4__;

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
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/nav.css */ "./src/styles/nav.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");




function CreateList() {
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.textContent = 'About';
    about.append(aboutLink);
    
    const projects = document.createElement('li');
    const projectsLink = document.createElement('a');
    projectsLink.textContent = 'Projects';
    projectsLink.classList.add('project-link');
    projects.append(projectsLink);

    const github = document.createElement('li');
    const githubLink = document.createElement('a');
    github.className = 'external';
    githubLink.className = 'external';
    githubLink.textContent = 'Github';    
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    github.append(githubLink);
    
    const cv = document.createElement('li');
    const cvLink = document.createElement('a');
    cv.className = 'external';
    cvLink.className = 'external';
    cvLink.textContent = 'View CV';
    cvLink.href = '#';
    cvLink.target = '_blank';
    cv.append(cvLink);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    contactLink.className = 'contact';
    contactLink.classList.add('big-link');
    contactLink.textContent = 'Contact';
    contact.append(contactLink);

    list.append(about, projects, github, cv, contact);

    return list;
}

function CreateHamburger() {
    const burger = document.createElement('button');
    burger.className = 'burger';
    burger.title = 'Toggle Navigation';

    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        burger.append(span);
    }

    return burger;
}

function toggleNav(list) {
    this.classList.toggle('open');
    list.classList.toggle('open');
}

function Nav() {
    const nav = document.createElement('nav');
    
    const home = document.createElement('a');
    home.className = 'home';
    home.textContent = 'AM.';

    const hamburger = CreateHamburger();
    const list = CreateList();

    hamburger.addEventListener('click', toggleNav.bind(hamburger, list));

    nav.append(home, hamburger, list);

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
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");
/* harmony import */ var _styles_projects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/projects.css */ "./src/styles/projects.css");
/* harmony import */ var _styles_slideshow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/slideshow.css */ "./src/styles/slideshow.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Slideshow */ "./src/Slideshow.js");
/* harmony import */ var _images_icons_live_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/live.png */ "./src/images/icons/live.png");
/* harmony import */ var _images_icons_github_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/github.png */ "./src/images/icons/github.png");
/* harmony import */ var _GetScreenshots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GetScreenshots */ "./src/GetScreenshots.js");









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
            `Mark a task as complete, or change task priority`,
        ],
        development: `I used localstorage in this project to keep track of a user's tasks and lists that they create, as well as any tasks that have been completed.`,
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
    live.src = _images_icons_live_png__WEBPACK_IMPORTED_MODULE_5__;
    
    const codeLink = document.createElement('a');
    const code = document.createElement('img');
    codeLink.href = BASE_GITHUB_URL + links.github;
    codeLink.target = '_blank';
    codeLink.title = 'View on GitHub';
    code.src = _images_icons_github_png__WEBPACK_IMPORTED_MODULE_6__;

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
        project.images = (0,_GetScreenshots__WEBPACK_IMPORTED_MODULE_7__["default"])(project.alias, __webpack_require__("./src/images/screenshots sync \\.jpg$"));
        let parent = CreateProject(project);
        projects.append(parent);
        let slideshow = parent.querySelector('.slideshow')
        parents.push(slideshow);
    });

    (0,_Slideshow__WEBPACK_IMPORTED_MODULE_4__["default"])(parents);

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

/***/ "./src/images/icons/external.png":
/*!***************************************!*\
  !*** ./src/images/icons/external.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "071877ee28f2b773dc38.png";

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
document.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target !== document.querySelector('nav ul')
        && e.target !== document.querySelector('.burger') 
        && e.target !== document.querySelector('.burger span')) {
            document.querySelector('nav ul').classList.remove('open');
            document.querySelector('.burger').classList.remove('open');
    };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxhQUFhLE9BQU8sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFX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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBVTs7QUFFekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQTBDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsMkRBQWMsZ0JBQWdCLDREQUEwRDtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxzREFBUzs7QUFFYjtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7QUNqT3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNOOztBQUU1QixnQ0FBZ0MsaURBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9oZXJvLmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL25hdi5jc3MiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9zbGlkZXNob3cuY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2Fib3V0LmNzcz9kMTE3Iiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5jc3M/Y2JhMyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2hlcm8uY3NzPzgxNTgiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9uYXYuY3NzPzIxNzAiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3M/MWFhYSIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL3NsaWRlc2hvdy5jc3M/MWNmZSIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL0dldFNjcmVlbnNob3RzLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9Mb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvTG9hZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL1NsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9IZXJvLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcGckIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQWJvdXQgc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4uYWJvdXQge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEseUJBQXlCOztBQUV6QjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBBYm91dCBzZWN0aW9uIHN0eWxlcyAqL1xcblxcbi5hYm91dCB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5hYm91dCBwIHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDdXN0b20gQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Ub3Age1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21SaWdodCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21MZWZ0IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmlnTGlua1dpZ2dsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgaWYgcmVkdWNlZCBtb3Rpb24gaXNuJ3QgZW5hYmxlZCBmb3IgdXNlciAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xcbiAgICBuYXYgLmNvbnRhY3Q6aG92ZXIge1xcbiAgICAgICAgYW5pbWF0aW9uOiAuNzVzIGVhc2UgMHMgaW5maW5pdGUgYmlnTGlua1dpZ2dsZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlcm8gaDEsXFxuICAgIC5oZXJvIHAge1xcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZXJvIGltZy5wb3J0cmFpdCB7XFxuICAgICAgICBhbmltYXRpb246IDAuNzVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVRvcDtcXG4gICAgfVxcblxcbiAgICAuaGVybyBidXR0b24uYmlnLWxpbmsge1xcbiAgICAgICAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gYS5iaWctbGluayB7XFxuICAgICAgICBhbmltYXRpb246IDEuNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbiAgICB9XFxuXFxuICAgIC5pbmRpdmlkdWFsLXByb2plY3Q6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgICAgICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVJpZ2h0O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaW5kaXZpZHVhbC1wcm9qZWN0Om50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgICAgIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tTGVmdDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjs7QUFFdEI7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0k7UUFDSSw4Q0FBOEM7SUFDbEQ7O0lBRUE7O1FBRUksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksOENBQThDO0lBQ2xEOztJQUVBO1FBQ0ksNkNBQTZDO0lBQ2pEO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tVG9wIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tUmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMSUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMSUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJpZ0xpbmtXaWdnbGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBBbmltYXRpb25zIGlmIHJlZHVjZWQgbW90aW9uIGlzbid0IGVuYWJsZWQgZm9yIHVzZXIgKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gICAgbmF2IC5jb250YWN0OmhvdmVyIHtcXG4gICAgICAgIGFuaW1hdGlvbjogLjc1cyBlYXNlIDBzIGluZmluaXRlIGJpZ0xpbmtXaWdnbGU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZXJvIGgxLFxcbiAgICAuaGVybyBwIHtcXG4gICAgICAgIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICAgICAgYW5pbWF0aW9uOiAwLjc1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gYnV0dG9uLmJpZy1saW5rIHtcXG4gICAgICAgIGFuaW1hdGlvbjogMS4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIGEuYmlnLWxpbmsge1xcbiAgICAgICAgYW5pbWF0aW9uOiAxLjVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVRvcDtcXG4gICAgfVxcblxcbiAgICAuaW5kaXZpZHVhbC1wcm9qZWN0Om50aC1vZi10eXBlKG9kZCkge1xcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21SaWdodDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmluZGl2aWR1YWwtcHJvamVjdDpudGgtb2YtdHlwZShldmVuKSB7XFxuICAgICAgICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbUxlZnQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSGVybyBzZWN0aW9uIHN0eWxlcyAqL1xcblxcbi5oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtYXgtY29udGVudCk7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgIHJvdy1nYXA6IDByZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmhlcm8gLmJpZy1saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcXG59XFxuXFxuLmhlcm8gaW1nLnBvcnRyYWl0IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYm9yZGVyOiAwLjVyZW0gc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5iaWctbGluay5oZXJvLWNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZXJvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7O0FBRXhCO0lBQ0ksOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhDQUE4QztJQUM5QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIZXJvIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLmhlcm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgcm93LWdhcDogMHJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5oZXJvIHAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uaGVybyAuYmlnLWxpbmsge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbn1cXG5cXG4uaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJpZy1saW5rLmhlcm8tY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9pY29ucy9leHRlcm5hbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOYXZiYXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDFyZW0pO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMTByZW07XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiBhIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuNzVzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDAuNXJlbSB1bmRlcmxpbmUgdHJhbnNwYXJlbnQ7XFxufVxcblxcbm5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMjRweDtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG5uYXYgbGkuZXh0ZXJuYWw6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5ob21lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2Utb3V0LCB0ZXh0LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5hY3RpdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXOztBQUVYO0lBQ0ksaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBNEM7SUFDNUMsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw4REFBOEQ7QUFDbEU7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdmJhciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMXJlbSk7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IGEge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC43NXM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMC41cmVtIHVuZGVybGluZSB0cmFuc3BhcmVudDtcXG59XFxuXFxubmF2IGxpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAyNHB4O1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcblxcbm5hdiBsaS5leHRlcm5hbDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoJy4uL2ltYWdlcy9pY29ucy9leHRlcm5hbC5wbmcnKTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5ob21lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2Utb3V0LCB0ZXh0LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5hY3RpdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFByb2plY3RzIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLnByb2plY3RzIHtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuICAgIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgcmVwZWF0KDIsIG1heC1jb250ZW50KTtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0td2hpdGUpO1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMjUpO1xcbn1cXG5cXG4uaW5kaXZpZHVhbC1wcm9qZWN0IGgyIHtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlLWluLW91dDtcXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uaW5kaXZpZHVhbC1wcm9qZWN0IHNlY3Rpb24uZGV0YWlscyxcXG4uaW5kaXZpZHVhbC1wcm9qZWN0IHNlY3Rpb24uZGV2ZWxvcG1lbnQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyBpbWcge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGltZzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtbGluayBhOmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICd5byc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLyogSGVhZGluZyB3aXRoIHRpdGxlIGFuZCBsaW5rcyAqL1xcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlscyBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5kZXRhaWxzIGxpLFxcbi5kZXZlbG9wbWVudCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4vKiBUYWcgc3R5bGVzICovXFxuXFxuLnRhZ3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4udGFncyBzcGFuIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxufVxcblxcbi50YWdzIHNwYW46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQTRCOztBQUU1QjtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0VBQWtFO0lBQ2xFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUHJvamVjdHMgc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4ucHJvamVjdHMge1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS13aGl0ZSk7XFxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3QgaDIge1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3Qgc2VjdGlvbi5kZXRhaWxzLFxcbi5pbmRpdmlkdWFsLXByb2plY3Qgc2VjdGlvbi5kZXZlbG9wbWVudCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGltZyB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3QtbGlua3MgaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1saW5rIGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ3lvJztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4vKiBIZWFkaW5nIHdpdGggdGl0bGUgYW5kIGxpbmtzICovXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5kZXRhaWxzIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHMgbGksXFxuLmRldmVsb3BtZW50IHAge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi8qIFRhZyBzdHlsZXMgKi9cXG5cXG4udGFncyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi50YWdzIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcXG59XFxuXFxuLnRhZ3Mgc3Bhbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTbGlkZXNob3cgc3R5bGVzICovXFxuXFxuLnNsaWRlc2hvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjVyZW0gMzAwcHggMy41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlc2hvdyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyA+IGE6Zm9jdXMsXFxuLnNsaWRlc2hvdyA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zbGlkZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zbGlkZXNob3cgLmRvdCB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXNob3cgLmFycm93IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NsaWRlc2hvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTbGlkZXNob3cgc3R5bGVzICovXFxuXFxuLnNsaWRlc2hvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjVyZW0gMzAwcHggMy41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlc2hvdyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyA+IGE6Zm9jdXMsXFxuLnNsaWRlc2hvdyA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zbGlkZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zbGlkZXNob3cgLmRvdCB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXNob3cgLmFycm93IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhTGlnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLU1lZGl1bS53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1NZWRpdW0ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1TZW1pQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1TZW1pQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9pY29ucy9leHRlcm5hbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYW5yb3BlIC0gR29vZ2xlIEZvbnRzICovXFxuLyogUmVndWxhciAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxufVxcbi8qIEV4dHJhTGlnaHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG4vKiBMaWdodCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi8qIE1lZGl1bSAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi8qIFNlbWlCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLyogRXh0cmFCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4vKiBDdXN0b20gdmFyaWFibGVzICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktdGV4dC1jb2xvcjogIzcxODBBQztcXG4gICAgLS1zZWNvbmRhcnktdGV4dC1jb2xvcjogI0Y1RjFFRDtcXG5cXG4gICAgLS13aGl0ZTogI0Y1RjFFRDsgLyogSXNhYmVsbGluZSAqL1xcbiAgICAtLWJsYWNrOiAjMDMwMTA0O1xcbiAgICBcXG4gICAgLS1ibHVlOiAjNzE4MEFDOyAvKiBHbGF1Y291cyAqL1xcbiAgICAtLW1pZC1ibHVlOiAjMkMzRTUwO1xcbiAgICAtLWRhcmtibHVlOiAjMjAxRTUwO1xcbn1cXG5cXG4vKiBEZWZhdWx0IHBhZ2Ugc3R5bGVzICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKjpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1taWQtYmx1ZSkgMTUlLCB2YXIoLS1ibGFjaykpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvLFxcbi5hYm91dCxcXG4ucHJvamVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuaDIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmhyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogRGVmYXVsdCBsaW5rcyAqL1xcblxcbmE6aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hOmhvdmVyOm5vdChhLmFjdGl2ZSk6bm90KGEuaG9tZSk6bm90KGEuYmlnLWxpbmspIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAwLjVyZW0gdW5kZXJsaW5lIHZhcigtLWJsdWUpO1xcbn1cXG5cXG5hOmFjdGl2ZSxcXG5idXR0b246YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLyogTGFyZ2UgbGlua3MgaS5lLiAnQ29udGFjdCcgYW5kICdQcm9qZWN0cycgbGlua3MsIGV0YyAqL1xcblxcbi5iaWctbGluayB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHdoaXRlLCAjRjVGMUVEKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWRhcmtibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzLCB0cmFuc2Zvcm0gMC41cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ0NSwgMC4wNSwgMC41NSwgMC45NSk7XFxufVxcblxcbi5iaWctbGluazpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLXdoaXRlKTtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJ5IGZvciBidXJnZXIgbmF2IG1lbnUgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgXFxuICAgICAgICBuYXYgdWwge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwcmVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bC5vcGVuIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmdlciBzcGFuIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXI6aG92ZXIsXFxuICAgIC5idXJnZXIgc3Bhbjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmdlciBzcGFuLm9wZW4ge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXI6aG92ZXIgc3BhbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgfVxcblxcbiAgICAuYnVyZ2VyLm9wZW4gOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmdlci5vcGVuIDpudGgtY2hpbGQoMikge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMSwgMC4xKTtcXG4gICAgfVxcblxcbiAgICAuYnVyZ2VyLm9wZW4gOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bCBsaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAvKiBSZW1vdmUgc3R5bGluZyBmb3IgdGhlIENvbnRhY3QgbmF2IGxpbmsgKi9cXG4gICAgbmF2IHVsIC5jb250YWN0IHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBmb250LXdlaWdodDogdW5zZXQ7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XFxuICAgIH1cXG5cXG4gICAgbmF2IC5iaWctbGluayB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IDAuNXJlbSB1bmRlcmxpbmUgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgXFxuICAgIG5hdiAuYmlnLWxpbms6aG92ZXIge1xcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjc1cztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogMC41cmVtIHVuZGVybGluZSB2YXIoLS1ibHVlKTtcXG4gICAgfVxcblxcbiAgICBuYXYgbGkuZXh0ZXJuYWw6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtJQUNJLHNCQUFzQjtJQUN0QjsrREFDZ0U7QUFDcEU7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ21FO0lBQ25FLGdCQUFnQjtBQUNwQjtBQUNBLFVBQVU7QUFDVjtJQUNJLHNCQUFzQjtJQUN0QjsrREFDOEQ7SUFDOUQsZ0JBQWdCO0FB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SUFDM0M7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUix5QkFBeUI7UUFDekIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQix1QkFBdUI7SUFDM0I7O0lBRUEsNENBQTRDO0lBQzVDO1FBQ0ksVUFBVTtRQUNWLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSw2Q0FBNkM7SUFDakQ7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLDZDQUE2QztJQUNqRDs7SUFFQTtRQUNJLGlEQUE0QztRQUM1QyxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNYW5yb3BlIC0gR29vZ2xlIEZvbnRzICovXFxuLyogUmVndWxhciAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcbi8qIEV4dHJhTGlnaHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG4vKiBMaWdodCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLyogTWVkaXVtICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi8qIFNlbWlCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtU2VtaUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtU2VtaUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4vKiBFeHRyYUJvbGQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLyogQ3VzdG9tIHZhcmlhYmxlcyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LXRleHQtY29sb3I6ICM3MTgwQUM7XFxuICAgIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNGNUYxRUQ7XFxuXFxuICAgIC0td2hpdGU6ICNGNUYxRUQ7IC8qIElzYWJlbGxpbmUgKi9cXG4gICAgLS1ibGFjazogIzAzMDEwNDtcXG4gICAgXFxuICAgIC0tYmx1ZTogIzcxODBBQzsgLyogR2xhdWNvdXMgKi9cXG4gICAgLS1taWQtYmx1ZTogIzJDM0U1MDtcXG4gICAgLS1kYXJrYmx1ZTogIzIwMUU1MDtcXG59XFxuXFxuLyogRGVmYXVsdCBwYWdlIHN0eWxlcyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbio6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbWlkLWJsdWUpIDE1JSwgdmFyKC0tYmxhY2spKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVybyxcXG4uYWJvdXQsXFxuLnByb2plY3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxufVxcblxcbi5idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxufVxcblxcbmgyIHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgdmFyKC0tYmx1ZSk7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5ociB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIERlZmF1bHQgbGlua3MgKi9cXG5cXG5hOmhvdmVyLFxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3Zlcjpub3QoYS5hY3RpdmUpOm5vdChhLmhvbWUpOm5vdChhLmJpZy1saW5rKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMC41cmVtIHVuZGVybGluZSB2YXIoLS1ibHVlKTtcXG59XFxuXFxuYTphY3RpdmUsXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi8qIExhcmdlIGxpbmtzIGkuZS4gJ0NvbnRhY3QnIGFuZCAnUHJvamVjdHMnIGxpbmtzLCBldGMgKi9cXG5cXG4uYmlnLWxpbmsge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgI0Y1RjFFRCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cywgdHJhbnNmb3JtIDAuNXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xcbn1cXG5cXG4uYmlnLWxpbms6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS13aGl0ZSk7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyeSBmb3IgYnVyZ2VyIG5hdiBtZW51ICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIFxcbiAgICAgICAgbmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICAgICAgcGxhY2UtY29udGVudDogc3RhcnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMHJlbTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWwub3BlbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIgc3BhbiB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuYnVyZ2VyOmhvdmVyLFxcbiAgICAuYnVyZ2VyIHNwYW46aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIgc3Bhbi5vcGVuIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAuYnVyZ2VyOmhvdmVyIHNwYW4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmdlci5vcGVuIDpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIub3BlbiA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjEsIDAuMSk7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmdlci5vcGVuIDpudGgtY2hpbGQoMykge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWwgbGkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgLyogUmVtb3ZlIHN0eWxpbmcgZm9yIHRoZSBDb250YWN0IG5hdiBsaW5rICovXFxuICAgIG5hdiB1bCAuY29udGFjdCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IHVuc2V0O1xcbiAgICB9XFxuXFxuICAgIG5hdiAuYmlnLWxpbmsge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiAwLjVyZW0gdW5kZXJsaW5lIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIFxcbiAgICBuYXYgLmJpZy1saW5rOmhvdmVyIHtcXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC43NXM7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IDAuNXJlbSB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XFxuICAgIH1cXG5cXG4gICAgbmF2IGxpLmV4dGVybmFsOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiB1cmwoJy4uL2ltYWdlcy9pY29ucy9leHRlcm5hbC5wbmcnKTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVyby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlcm8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVzaG93LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVzaG93LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL1JldHVybnMgc2NyZWVuc2hvdHMgZnJvbSB0aGUgZGlzdCBmb2xkZXIgd2hpY2ggbWF0Y2ggdGhlIHByb2plY3QgdmFyaWFibGVcbmZ1bmN0aW9uIEdldFNjcmVlbnNob3RzKHByb2plY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgaW1hZ2VzID0gW107XG5cbiAgICAvL0ZvciBlYWNoIGl0ZW0gaW4gdGhlIGltYWdlcy9zY3JlZW5zaG90cyBmb2xkZXJcbiAgICAvL0lmIHRoZSBpbWFnZSBuYW1lIG1hdGNoZXMgdGhlIHByb2plY3QgdmFyaWFibGUsXG4gICAgLy9BZGQgaXQgdG8gdGhlIGltYWdlcyBhcnJheVxuICAgIGNvbnRleHQua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gY29udGV4dChpdGVtKTtcbiAgICAgICAgICAgIGltYWdlcy5wdXNoKHRlbXApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHZXRTY3JlZW5zaG90czsiLCJpbXBvcnQgTmF2IGZyb20gJy4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RzJztcbmltcG9ydCBMb2FkU2VjdGlvbiBmcm9tICcuL0xvYWRTZWN0aW9uJztcblxuZnVuY3Rpb24gTG9hZFBhZ2UoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgXG4gICAgYm9keS5hcHBlbmQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZChtYWluKTtcblxuICAgIGhlYWRlci5hcHBlbmQoTmF2KCkpO1xuICAgIG1haW4uYXBwZW5kKEhlcm8oKSk7XG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBsaSBhJyk7XG5cbiAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChsaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICE9PSAnZXh0ZXJuYWwnKSB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluayAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIExvYWRTZWN0aW9uKGxpbmsudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYS5ob21lJyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgTG9hZFNlY3Rpb24oJ0hvbWUnKTtcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkUGFnZTsiLCJpbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdHMnO1xuXG5mdW5jdGlvbiBMb2FkU2VjdGlvbihzZWN0aW9uKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIFxuICAgIGlmIChtYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgdWwnKTtcblxuICAgIGlmIChidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgc3dpdGNoKHNlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoQWJvdXQoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJvamVjdHMnOlxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoUHJvamVjdHMoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBtYWluLmFwcGVuZChIZXJvKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBtYWluLmFwcGVuZChIZXJvKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkU2VjdGlvbjsiLCJmdW5jdGlvbiB0b2dnbGVBY3RpdmUoZG90cywgaW5kZXgpIHtcblxuICAgIGRvdHMuZm9yRWFjaChkb3QgPT4ge1xuICAgICAgICBpZiAoZG90cy5pbmRleE9mKGRvdCkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoZGlzcGxheSwgaW1hZ2UpIHtcbiAgICBkaXNwbGF5LnNyYyA9IGltYWdlLnNyYztcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycm93cyhhcnJvd3MsIGltYWdlcywgaW5kZXgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBhcnJvd3NbMF07XG4gICAgbGV0IG5leHQgPSBhcnJvd3NbMV07XG5cbiAgICBpZiAoaW5kZXggPT09IGltYWdlcy5sZW5ndGggLTEpIHtcbiAgICAgICAgcHJldmlvdXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHByZXZpb3VzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlvdXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gU2xpZGVzaG93KHBhcmVudHMpIHtcblxuICAgIHBhcmVudHMuZm9yRWFjaChwYXJlbnQgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBjb25zdCBhcnJvd3MgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93Jyk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy5wcmV2aW91cycpO1xuICAgICAgICBjb25zdCBuZXh0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy5uZXh0Jyk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnNsaWRlJyk7XG4gICAgICAgIGNvbnN0IGRvdHMgPSBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuZG90cycpLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvcignLmltYWdlcycpLmNoaWxkcmVuKTtcbiAgICAgICAgXG4gICAgICAgIC8vSGlkZSB0aGUgcHJldmlvdXMgYXJyb3cgb24gaW5pdGlhbCBzbGlkZXNob3cgbG9hZFxuICAgICAgICBwcmV2aW91cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBcbiAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiB7XG4gICAgICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyb3dzKGFycm93cywgaW1hZ2VzLCBkb3RzLmluZGV4T2YoZG90KSk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGRvdHMsIGRvdHMuaW5kZXhPZihkb3QpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KGRpc3BsYXksIGltYWdlc1tkb3RzLmluZGV4T2YoZG90KV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGltYWdlcy5sZW5ndGggLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGRvdHMsIGluZGV4KTtcbiAgICAgICAgICAgIHVwZGF0ZUFycm93cyhhcnJvd3MsIGltYWdlcywgaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheShkaXNwbGF5LCBpbWFnZXNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGRvdHMsIGluZGV4KTtcbiAgICAgICAgICAgIHVwZGF0ZUFycm93cyhhcnJvd3MsIGltYWdlcywgaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheShkaXNwbGF5LCBpbWFnZXNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvdzsiLCJpbXBvcnQgJy4uL3N0eWxlcy9hbmltYXRpb25zLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9hYm91dC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYWJvdXQuY2xhc3NOYW1lID0gJ2Fib3V0JztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgTWUnO1xuXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gYEknbSBhIHNlbGYtdGF1Z2h0IGRldmVsb3BlciB3aG8gaGFzIGJlZW4gbGVhcm5pbmcgd2ViIGRldmVsb3BtZW50IHNpbmNlIGVhcmx5IDIwMjIuIGBcbiAgICAgICAgKyBgSSdtIG5vdyBsb29raW5nIHRvIGVudGVyIHRoZSBpbmR1c3RyeSBhbmQgZ3JvdyB3aXRoaW4gYSBwcm9mZXNzaW9uYWwgZW52aXJvbm1lbnQuIGBcbiAgICAgICAgKyBgTXkgY3VycmVudCBnb2FsIGlzIHRvIGZpbmQgYSByb2xlIHdoZXJlIEkgY2FuIGJlZ2luIG15IGNhcmVlciBhbmQgY29udGludWUgZGV2ZWxvcGluZyBteSBza2lsbHNldC5gO1xuXG4gICAgY29uc3QgdG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9vbHMudGV4dENvbnRlbnQgPSAnU29tZSBtb3JlIGluZm8gaGVyZSc7XG5cbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBhYm91dC5hcHBlbmQocGFyYSwgaHIsIHRvb2xzKTtcblxuICAgIHJldHVybiBhYm91dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9ucy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaGVyby5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBQb3J0cmFpdCBmcm9tICcuLi9pbWFnZXMvaWNvbi5qcGcnO1xuaW1wb3J0IE1haWwgZnJvbSAnLi4vaW1hZ2VzL2ljb25zL2VtYWlsLnBuZyc7XG5pbXBvcnQgTG9hZFNlY3Rpb24gZnJvbSAnLi4vTG9hZFNlY3Rpb24nO1xuXG5mdW5jdGlvbiBIZXJvKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVyby5jbGFzc05hbWUgPSAnaGVybyc7XG5cbiAgICBjb25zdCBwb3J0cmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBvcnRyYWl0LmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0Jyk7XG4gICAgcG9ydHJhaXQuc3JjID0gUG9ydHJhaXQ7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBIaSwgSSdtIEFpZGFuYDtcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9ICdGcm9udC1lbmQgZGV2ZWxvcGVyIGZyb20gR2xhc2dvdywgU2NvdGxhbmQnO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdWaWV3IE15IFByb2plY3RzJztcbiAgICBwcm9qZWN0cy50eXBlID0gJ2J1dHRvbic7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnYmlnLWxpbmsnLCdoZXJvLXByb2plY3RzJyk7XG4gICAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiBsaSBhLnByb2plY3QtbGluaycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBMb2FkU2VjdGlvbignUHJvamVjdHMnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbEljb24uc3JjID0gTWFpbDtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0IE1lJztcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2JpZy1saW5rJywgJ2hlcm8tY29udGFjdCcpO1xuICAgIGNvbnRhY3QuaHJlZiA9ICdtYWlsdG86YWRuLm1ja0BnbWFpbC5jb20/c3ViamVjdD1IaSBBaWRhbic7XG4gICAgXG4gICAgY29udGFjdC5hcHBlbmQobWFpbEljb24pO1xuICAgIGhlcm8uYXBwZW5kKGhlYWRlciwgcGFyYSwgcHJvamVjdHMsIGNvbnRhY3QsIHBvcnRyYWl0KTtcblxuICAgIHJldHVybiBoZXJvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvOyIsImltcG9ydCAnLi4vc3R5bGVzL2FuaW1hdGlvbnMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL25hdi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gQ3JlYXRlTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgYWJvdXQuYXBwZW5kKGFib3V0TGluayk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHByb2plY3RzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwcm9qZWN0c0xpbmsudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHByb2plY3RzTGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcbiAgICBwcm9qZWN0cy5hcHBlbmQocHJvamVjdHNMaW5rKTtcblxuICAgIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWIuY2xhc3NOYW1lID0gJ2V4dGVybmFsJztcbiAgICBnaXRodWJMaW5rLmNsYXNzTmFtZSA9ICdleHRlcm5hbCc7XG4gICAgZ2l0aHViTGluay50ZXh0Q29udGVudCA9ICdHaXRodWInOyAgICBcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL21ja2Vuc2lzJztcbiAgICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGdpdGh1Yi5hcHBlbmQoZ2l0aHViTGluayk7XG4gICAgXG4gICAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGN2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjdi5jbGFzc05hbWUgPSAnZXh0ZXJuYWwnO1xuICAgIGN2TGluay5jbGFzc05hbWUgPSAnZXh0ZXJuYWwnO1xuICAgIGN2TGluay50ZXh0Q29udGVudCA9ICdWaWV3IENWJztcbiAgICBjdkxpbmsuaHJlZiA9ICcjJztcbiAgICBjdkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgY3YuYXBwZW5kKGN2TGluayk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0TGluay5ocmVmID0gJ21haWx0bzphZG4ubWNrQGdtYWlsLmNvbT9zdWJqZWN0PUhpIEFpZGFuJztcbiAgICBjb250YWN0TGluay5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZCgnYmlnLWxpbmsnKTtcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0LmFwcGVuZChjb250YWN0TGluayk7XG5cbiAgICBsaXN0LmFwcGVuZChhYm91dCwgcHJvamVjdHMsIGdpdGh1YiwgY3YsIGNvbnRhY3QpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIENyZWF0ZUhhbWJ1cmdlcigpIHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXJnZXIuY2xhc3NOYW1lID0gJ2J1cmdlcic7XG4gICAgYnVyZ2VyLnRpdGxlID0gJ1RvZ2dsZSBOYXZpZ2F0aW9uJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJ1cmdlci5hcHBlbmQoc3Bhbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1cmdlcjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTmF2KGxpc3QpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbn1cblxuZnVuY3Rpb24gTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIFxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZS5jbGFzc05hbWUgPSAnaG9tZSc7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdBTS4nO1xuXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gQ3JlYXRlSGFtYnVyZ2VyKCk7XG4gICAgY29uc3QgbGlzdCA9IENyZWF0ZUxpc3QoKTtcblxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdi5iaW5kKGhhbWJ1cmdlciwgbGlzdCkpO1xuXG4gICAgbmF2LmFwcGVuZChob21lLCBoYW1idXJnZXIsIGxpc3QpO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsImltcG9ydCAnLi4vc3R5bGVzL2FuaW1hdGlvbnMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Byb2plY3RzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zbGlkZXNob3cuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2xpZGVzaG93IGZyb20gJy4uL1NsaWRlc2hvdyc7XG5pbXBvcnQgdmlld0xpdmUgZnJvbSAnLi4vaW1hZ2VzL2ljb25zL2xpdmUucG5nJztcbmltcG9ydCB2aWV3R2l0aHViIGZyb20gJy4uL2ltYWdlcy9pY29ucy9naXRodWIucG5nJztcbmltcG9ydCBHZXRTY3JlZW5zaG90cyBmcm9tICcuLi9HZXRTY3JlZW5zaG90cyc7XG5cbmZ1bmN0aW9uIEdldFByb2plY3RzKCkge1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSB7XG4gICAgICAgIHRpdGxlOiAnQmF0dGxlc2hpcCcsXG4gICAgICAgIGFsaWFzOiAnYmF0dGxlc2hpcCcsXG4gICAgICAgIGluZm86IFtcbiAgICAgICAgICAgIGBDbGFzc2ljIEJhdHRsZXNoaXAgYm9hcmQgZ2FtZWAsIFxuICAgICAgICAgICAgYFBsYXkgYWdhaW5zdCBhbiBBSSBwbGF5ZXJgLFxuICAgICAgICAgICAgYEZpcnN0IHBsYXllciB0byBkZXN0cm95IHRoZSBlbmVteSdzIDUgc2hpcHMgd2luc2AsXG4gICAgICAgIF0sXG4gICAgICAgIGRldmVsb3BtZW50OiAnSSB3cm90ZSB1bml0IHRlc3RzIHdpdGggSmVzdCBkdXJpbmcgZGV2ZWxvcG1lbnQgb2YgdGhpcyBwcm9qZWN0IGFuZCBwdXJwb3NlZnVsbHkgYnJva2UgdGhlIHByb2plY3Qgd2l0aCBlYWNoIG5ldyB0ZXN0IHVudGlsIGZ1bmN0aW9uYWxpdHkgd2FzIGNvbXBsZXRlLicsXG4gICAgICAgIGxpdmU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgY29kZTogJ2JhdHRsZXNoaXAnLFxuICAgICAgICB0YWdzOiBbICdIVE1MJywgJ0NTUycsICdKYXZhU2NyaXB0JywgJ1dlYnBhY2snLCAnSmVzdCcsICdUREQnIF0sXG4gICAgICAgIGltYWdlczogW10sXG4gICAgfTtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgICAgIHRpdGxlOiAnV2VhdGhlciBGb3JlY2FzdCcsXG4gICAgICAgIGFsaWFzOiAnZm9yZWNhc3QnLFxuICAgICAgICBpbmZvOiBbXG4gICAgICAgICAgICBgRW50ZXIgYSBsb2NhdGlvbiB0byBzZWFyY2ggZm9yIHRoZSB3ZWF0aGVyYCxcbiAgICAgICAgICAgIGBDdXJyZW50IHdlYXRoZXIgd2lsbCBkaXNwbGF5IGZvciB0aGUgbG9jYXRpb25gLFxuICAgICAgICAgICAgYExhdGVyICYgdG9tb3Jyb3cgZm9yZWNhc3RzIHdpbGwgYWxzbyBkaXNwbGF5YCxcbiAgICAgICAgXSxcbiAgICAgICAgZGV2ZWxvcG1lbnQ6IGBJIHVzZWQgYXN5bmMgYW5kIGF3YWl0IGFsb25nIHdpdGggbXVsdGlwbGUgQVBJcyBmcm9tIE9wZW5XZWF0aGVyIHN1Y2ggYXMgJ0dlb2NvZGluZycsICdDdXJyZW50V2VhdGhlcicsIGFuZCAnMyBIb3VyIC8gNSBEYXkgRm9yZWNhc3QnLmAsXG4gICAgICAgIGxpdmU6ICd3ZWF0aGVyLWZvcmVjYXN0JyxcbiAgICAgICAgY29kZTogJ3dlYXRoZXItZm9yZWNhc3QnLFxuICAgICAgICB0YWdzOiBbICdIVE1MJywgJ0NTUycsICdKYXZhU2NyaXB0JywgJ1dlYnBhY2snLCAnQVBJJywgJ0FzeW5jIC8gQXdhaXQnIF0sXG4gICAgICAgIGltYWdlczogW10sXG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICAgIHRpdGxlOiAnVG8tRG8gTGlzdCcsXG4gICAgICAgIGFsaWFzOiAndG8tZG8tbGlzdCcsXG4gICAgICAgIGluZm86IFtcbiAgICAgICAgICAgIGBWaWV3IGxpc3RzIG9uIHRoZSBsZWZ0ICYgdGFza3Mgb24gdGhlIHJpZ2h0YCxcbiAgICAgICAgICAgIGBBZGQgYSBuZXcgbGlzdCBvciB0YXNrIHdpdGhpbiBlaXRoZXIgc2VjdGlvbmAsXG4gICAgICAgICAgICBgTWFyayBhIHRhc2sgYXMgY29tcGxldGUsIG9yIGNoYW5nZSB0YXNrIHByaW9yaXR5YCxcbiAgICAgICAgXSxcbiAgICAgICAgZGV2ZWxvcG1lbnQ6IGBJIHVzZWQgbG9jYWxzdG9yYWdlIGluIHRoaXMgcHJvamVjdCB0byBrZWVwIHRyYWNrIG9mIGEgdXNlcidzIHRhc2tzIGFuZCBsaXN0cyB0aGF0IHRoZXkgY3JlYXRlLCBhcyB3ZWxsIGFzIGFueSB0YXNrcyB0aGF0IGhhdmUgYmVlbiBjb21wbGV0ZWQuYCxcbiAgICAgICAgbGl2ZTogJ3RvLWRvLWxpc3QnLFxuICAgICAgICBjb2RlOiAndG8tZG8tbGlzdCcsXG4gICAgICAgIHRhZ3M6IFsgJ0hUTUwnLCAnQ1NTJywgJ0phdmFTY3JpcHQnLCAnV2VicGFjaycsICdMb2NhbFN0b3JhZ2UnIF0sXG4gICAgICAgIGltYWdlczogW10sXG4gICAgfTtcblxuICAgIHJldHVybiBbIGJhdHRsZXNoaXAsIHdlYXRoZXIsIHRvZG8gXTtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlU2xpZGVzaG93KGltYWdlcykge1xuICAgIGNvbnN0IHNsaWRlc2hvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzbGlkZXNob3cuY2xhc3NOYW1lID0gJ3NsaWRlc2hvdyc7XG5cbiAgICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZpb3VzLmNsYXNzTGlzdC5hZGQoJ2Fycm93JywgJ3ByZXZpb3VzJyk7XG4gICAgcHJldmlvdXMuaW5uZXJIVE1MID0gJyZsc2FxdW87JztcblxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2Fycm93JywgJ25leHQnKTtcbiAgICBuZXh0LmlubmVySFRNTCA9IGAmcnNhcXVvO2A7XG5cbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNsaWRlLmNsYXNzTmFtZSA9ICdzbGlkZSc7XG4gICAgc2xpZGUuc3JjID0gaW1hZ2VzWzBdO1xuXG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzRGl2LmNsYXNzTmFtZSA9ICdpbWFnZXMnO1xuICAgIFxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgaW1hZ2VzRGl2LmFwcGVuZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnO1xuICAgICAgICBkb3RzLmFwcGVuZChkb3QpO1xuICAgIH0pO1xuICAgIFxuICAgIGRvdHMuY2xhc3NOYW1lID0gJ2RvdHMnO1xuICAgIFxuICAgIGlmIChkb3RzLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIGRvdHMuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc2xpZGVzaG93LmFwcGVuZChwcmV2aW91cywgc2xpZGUsIG5leHQsIGRvdHMsIGltYWdlc0Rpdik7XG5cbiAgICByZXR1cm4gc2xpZGVzaG93O1xufVxuXG5mdW5jdGlvbiBDcmVhdGVUYWdzKHRhZ3MpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFncycpO1xuICAgIFxuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGFnO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZChzcGFuKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlTGlua3MobGlua3MpIHtcbiAgICBjb25zdCBCQVNFX0dJVEhVQl9VUkwgPSAnaHR0cHM6Ly9naXRodWIuY29tL21ja2Vuc2lzLyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3Byb2plY3QtbGlua3MnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdWaWV3IFByb2plY3QnO1xuXG4gICAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7ICAgIFxuICAgIGNvbnN0IGxpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsaXZlTGluay5ocmVmID0gbGlua3MubGl2ZTtcbiAgICBsaXZlTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaXZlTGluay50aXRsZSA9ICdWaWV3IHByb2plY3QgbGl2ZSc7XG4gICAgbGl2ZS5zcmMgPSB2aWV3TGl2ZTtcbiAgICBcbiAgICBjb25zdCBjb2RlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29kZUxpbmsuaHJlZiA9IEJBU0VfR0lUSFVCX1VSTCArIGxpbmtzLmdpdGh1YjtcbiAgICBjb2RlTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb2RlTGluay50aXRsZSA9ICdWaWV3IG9uIEdpdEh1Yic7XG4gICAgY29kZS5zcmMgPSB2aWV3R2l0aHViO1xuXG4gICAgbGl2ZUxpbmsuYXBwZW5kKGxpdmUpO1xuICAgIGNvZGVMaW5rLmFwcGVuZChjb2RlKTtcblxuICAgIHNlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIGxpdmVMaW5rLCBjb2RlTGluayk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlRGV0YWlsc1NlY3Rpb24oZGV0YWlscykge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRGV0YWlscyc7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGRldGFpbHMuZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gcGllY2U7XG4gICAgICAgIGxpc3QuYXBwZW5kKGl0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChoZWFkaW5nLCBsaXN0KTtcbiAgICBcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlRGV2ZWxvcG1lbnRTZWN0aW9uKGluZm8pIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGV2ZWxvcG1lbnQnKTtcbiAgICBcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0RldmVsb3BtZW50IFByb2Nlc3MnO1xuICAgIFxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBpbmZvO1xuXG4gICAgc2VjdGlvbi5hcHBlbmQoaGVhZGluZywgcGFyYWdyYXBoKTtcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBhcnRpY2xlLmNsYXNzTmFtZSA9ICdpbmRpdmlkdWFsLXByb2plY3QnO1xuICAgIFxuICAgIC8vSGVhZGVyIFNlY3Rpb25cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIC8vSGVhZGluZ1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIC8vTGlua3NcbiAgICBjb25zdCBsaW5rcyA9IENyZWF0ZUxpbmtzKHsgbGl2ZTogcHJvamVjdC5saXZlLCBnaXRodWI6IHByb2plY3QuY29kZSB9KTtcbiAgICAvL1NsaWRlc2hvd1xuICAgIGNvbnN0IHNsaWRlc2hvdyA9IENyZWF0ZVNsaWRlc2hvdyhwcm9qZWN0LmltYWdlcyk7XG4gICAgLy9UYWdzXG4gICAgY29uc3QgdGFncyA9IENyZWF0ZVRhZ3MocHJvamVjdC50YWdzKTtcbiAgICAvL0luZm9cbiAgICBjb25zdCBpbmZvID0gQ3JlYXRlRGV0YWlsc1NlY3Rpb24ocHJvamVjdC5pbmZvKTtcbiAgICAvL0RldmVsb3BtZW50XG4gICAgY29uc3QgZGV2ZWxvcG1lbnQgPSBDcmVhdGVEZXZlbG9wbWVudFNlY3Rpb24ocHJvamVjdC5kZXZlbG9wbWVudCk7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZChoZWFkaW5nLCBsaW5rcyk7XG4gICAgYXJ0aWNsZS5hcHBlbmQoaGVhZGVyLCB0YWdzLCBpbmZvLCBkZXZlbG9wbWVudCwgc2xpZGVzaG93KTtcbiAgICBcbiAgICByZXR1cm4gYXJ0aWNsZTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgcHJvamVjdHMuY2xhc3NOYW1lID0gJ3Byb2plY3RzJztcblxuICAgIGNvbnN0IGxpc3QgPSBHZXRQcm9qZWN0cygpO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBsaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QuaW1hZ2VzID0gR2V0U2NyZWVuc2hvdHMocHJvamVjdC5hbGlhcywgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvc2NyZWVuc2hvdHMvJywgZmFsc2UsIC9cXC5qcGckLykpO1xuICAgICAgICBsZXQgcGFyZW50ID0gQ3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kKHBhcmVudCk7XG4gICAgICAgIGxldCBzbGlkZXNob3cgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdycpXG4gICAgICAgIHBhcmVudHMucHVzaChzbGlkZXNob3cpO1xuICAgIH0pO1xuXG4gICAgU2xpZGVzaG93KHBhcmVudHMpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcDAuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzL2JhdHRsZXNoaXAwLmpwZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcDEuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzL2JhdHRsZXNoaXAxLmpwZ1wiLFxuXHRcIi4vZm9yZWNhc3QwLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy9mb3JlY2FzdDAuanBnXCIsXG5cdFwiLi9mb3JlY2FzdDEuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzL2ZvcmVjYXN0MS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3NjcmVlbnNob3RzIHN5bmMgXFxcXC5qcGckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBMb2FkUGFnZSBmcm9tICcuL0xvYWRQYWdlJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBMb2FkUGFnZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGlmIChlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IHVsJylcbiAgICAgICAgJiYgZS50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKSBcbiAgICAgICAgJiYgZS50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXIgc3BhbicpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgdWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=