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
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Animations */\n\n@keyframes slideInFromTop {\n    0% {\n        transform: translateY(-10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes slideInFromRight {\n    0% {\n        transform: translateX(10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes slideInFromLeft {\n    0% {\n        transform: translateX(-10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes bigLinkWiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(-2deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n/* Animations if reduced motion isn't enabled for user */\n@media (prefers-reduced-motion: no-preference) {\n    nav .contact:hover {\n        animation: .75s ease 0s infinite bigLinkWiggle;\n    }\n    \n    .hero h1,\n    .hero p {\n        animation: 0.25s ease-in 0s 1 slideInFromTop;\n    }\n    \n    .hero img.portrait {\n        animation: 0.75s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero button.big-link {\n        animation: 1.25s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero a.big-link {\n        animation: 1.5s ease-in 0s 1 slideInFromTop;\n    }\n\n    .individual-project:nth-of-type(odd) {\n        animation: 0.25s ease-in 0s 1 slideInFromRight;\n    }\n    \n    .individual-project:nth-of-type(even) {\n        animation: 0.25s ease-in 0s 1 slideInFromLeft;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/animations.css"],"names":[],"mappings":"AAAA,sBAAsB;;AAEtB;IACI;QACI,2BAA2B;QAC3B,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,0BAA0B;QAC1B,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,2BAA2B;QAC3B,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA,wDAAwD;AACxD;IACI;QACI,8CAA8C;IAClD;;IAEA;;QAEI,4CAA4C;IAChD;;IAEA;QACI,4CAA4C;IAChD;;IAEA;QACI,4CAA4C;IAChD;;IAEA;QACI,2CAA2C;IAC/C;;IAEA;QACI,8CAA8C;IAClD;;IAEA;QACI,6CAA6C;IACjD;AACJ","sourcesContent":["/* Custom Animations */\n\n@keyframes slideInFromTop {\n    0% {\n        transform: translateY(-10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes slideInFromRight {\n    0% {\n        transform: translateX(10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes slideInFromLeft {\n    0% {\n        transform: translateX(-10%);\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n    }\n}\n\n@keyframes bigLinkWiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(-2deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n/* Animations if reduced motion isn't enabled for user */\n@media (prefers-reduced-motion: no-preference) {\n    nav .contact:hover {\n        animation: .75s ease 0s infinite bigLinkWiggle;\n    }\n    \n    .hero h1,\n    .hero p {\n        animation: 0.25s ease-in 0s 1 slideInFromTop;\n    }\n    \n    .hero img.portrait {\n        animation: 0.75s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero button.big-link {\n        animation: 1.25s ease-in 0s 1 slideInFromTop;\n    }\n\n    .hero a.big-link {\n        animation: 1.5s ease-in 0s 1 slideInFromTop;\n    }\n\n    .individual-project:nth-of-type(odd) {\n        animation: 0.25s ease-in 0s 1 slideInFromRight;\n    }\n    \n    .individual-project:nth-of-type(even) {\n        animation: 0.25s ease-in 0s 1 slideInFromLeft;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Navbar */\n\nheader {\n    font-size: 1.5rem;\n    background-color: var(--mid-blue);\n    position: sticky;\n    top: 0;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr max-content max-content;\n    align-items: center;\n    column-gap: 2rem;\n    width: calc(100vw - 3rem);\n}\n\nnav ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 10rem;\n    place-items: center;\n    list-style: none;\n}\n\nnav a {\n    color: var(--white);\n    transition: text-decoration 0.75s;\n    text-decoration: 0.5rem underline transparent;\n}\n\nnav li {\n    display: grid;\n    grid-template-columns: max-content 24px;\n    gap: 0.25rem;\n}\n\nnav li.external:hover::after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 2rem;\n}\n\n.home {\n    font-weight: 800;\n    font-size: 4.5rem;\n    text-decoration: none;\n    margin-left: 2rem;\n    place-self: start;\n    transition: color 0.5s ease-out, text-shadow 0.25s ease-in-out;\n}\n\n\n.home:hover {\n    color: var(--blue);\n    text-shadow: 3px 3px var(--black);\n}\n\n.active {\n    color: var(--white);\n    font-weight: 800;\n}\n\n.active:hover {\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/styles/nav.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,iBAAiB;IACjB,iCAAiC;IACjC,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kDAAkD;IAClD,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;IACjC,6CAA6C;AACjD;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,gDAA4C;IAC5C,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,8DAA8D;AAClE;;;AAGA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* Navbar */\n\nheader {\n    font-size: 1.5rem;\n    background-color: var(--mid-blue);\n    position: sticky;\n    top: 0;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr max-content max-content;\n    align-items: center;\n    column-gap: 2rem;\n    width: calc(100vw - 3rem);\n}\n\nnav ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 10rem;\n    place-items: center;\n    list-style: none;\n}\n\nnav a {\n    color: var(--white);\n    transition: text-decoration 0.75s;\n    text-decoration: 0.5rem underline transparent;\n}\n\nnav li {\n    display: grid;\n    grid-template-columns: max-content 24px;\n    gap: 0.25rem;\n}\n\nnav li.external:hover::after {\n    content: url('../images/icons/external.png');\n    width: 2rem;\n}\n\n.home {\n    font-weight: 800;\n    font-size: 4.5rem;\n    text-decoration: none;\n    margin-left: 2rem;\n    place-self: start;\n    transition: color 0.5s ease-out, text-shadow 0.25s ease-in-out;\n}\n\n\n.home:hover {\n    color: var(--blue);\n    text-shadow: 3px 3px var(--black);\n}\n\n.active {\n    color: var(--white);\n    font-weight: 800;\n}\n\n.active:hover {\n    cursor: default;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Manrope - Google Fonts */\n/* Regular */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n}\n/* ExtraLight */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n    font-weight: 200;\n}\n/* Light */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff');\n    font-weight: 300;\n}\n/* Medium */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff');\n    font-weight: 500;\n}\n/* SemiBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff');\n    font-weight: 600;\n}\n/* ExtraBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('woff');\n    font-weight: 800;\n}\n\n/* Custom variables */\n\n:root {\n    --primary-text-color: #7180AC;\n    --secondary-text-color: #F5F1ED;\n\n    --white: #F5F1ED; /* Isabelline */\n    --black: #030104;\n    \n    --blue: #7180AC; /* Glaucous */\n    --mid-blue: #2C3E50;\n    --darkblue: #201E50;\n}\n\n/* Default page styles */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*:hover {\n    cursor: default;\n}\n\nhtml {\n    font-family: 'Manrope', sans-serif;\n    background: linear-gradient(var(--mid-blue) 15%, var(--black));\n    background-attachment: fixed;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    color: var(--white);\n}\n\nmain {\n    display: grid;\n    margin: 0 auto;\n    max-width: 1000px;\n}\n\nsection {\n    display: grid;\n    place-content: center;\n}\n\n.hero,\n.about,\n.projects {\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n    grid-auto-flow: row;\n    place-content: center;\n    row-gap: 0.5rem;\n}\n\nh1 {\n    grid-column: 1 / -1;\n    font-size: 5rem;\n    place-self: start;\n}\n\nh2 {\n    place-self: center;\n    font-size: 2.3rem;\n    font-weight: 800;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n    border-bottom: 0.5rem solid var(--blue);\n}\n\nh4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nhr {\n    width: 50%;\n    place-self: center;\n    height: 0.5rem;\n    margin: 1rem;\n    border-radius: 2rem;\n    background-color: var(--white);\n    outline: none;\n    border: none;\n}\n\n/* Default links */\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover:not(a.active):not(a.home):not(a.big-link) {\n    text-decoration: 0.5rem underline var(--blue);\n}\n\na:active,\nbutton:active {\n    opacity: 0.75;\n}\n\n/* Large links i.e. 'Contact' and 'Projects' links, etc */\n\n.big-link {\n    padding: 1rem;\n    font-weight: 800;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: var(--darkblue);\n    background-color: var(--white);\n    background: radial-gradient(white, #F5F1ED);\n    outline: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 0 10px var(--darkblue);\n    border-radius: 1.5rem;\n    transition: box-shadow 0.25s, transform 0.5s;\n    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.big-link:hover {\n    box-shadow: 0 0 10px var(--white);\n    outline: 4px solid var(--black);\n    transform: rotate(2deg);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B,YAAY;AACZ;IACI,sBAAsB;IACtB;+DACgE;AACpE;AACA,eAAe;AACf;IACI,sBAAsB;IACtB;+DACmE;IACnE,gBAAgB;AACpB;AACA,UAAU;AACV;IACI,sBAAsB;IACtB;+DAC8D;IAC9D,gBAAgB;AACpB;AACA,WAAW;AACX;IACI,sBAAsB;IACtB;+DAC+D;IAC/D,gBAAgB;AACpB;AACA,aAAa;AACb;IACI,sBAAsB;IACtB;+DACiE;IACjE,gBAAgB;AACpB;AACA,cAAc;AACd;IACI,sBAAsB;IACtB;gEACkE;IAClE,gBAAgB;AACpB;;AAEA,qBAAqB;;AAErB;IACI,6BAA6B;IAC7B,+BAA+B;;IAE/B,gBAAgB,EAAE,eAAe;IACjC,gBAAgB;;IAEhB,eAAe,EAAE,aAAa;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA,wBAAwB;;AAExB;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,8DAA8D;IAC9D,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;;;IAGI,0BAA0B;IAC1B,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;IACzB,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA,kBAAkB;;AAElB;;IAEI,eAAe;AACnB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;;IAEI,aAAa;AACjB;;AAEA,yDAAyD;;AAEzD;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;IACtB,8BAA8B;IAC9B,2CAA2C;IAC3C,aAAa;IACb,YAAY;IACZ,eAAe;IACf,oCAAoC;IACpC,qBAAqB;IACrB,4CAA4C;IAC5C,iEAAiE;AACrE;;AAEA;IACI,iCAAiC;IACjC,+BAA+B;IAC/B,uBAAuB;AAC3B","sourcesContent":["/* Manrope - Google Fonts */\n/* Regular */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Regular.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Regular.woff') format('woff');\n}\n/* ExtraLight */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-ExtraLight.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-ExtraLight.woff') format('woff');\n    font-weight: 200;\n}\n/* Light */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Light.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Light.woff') format('woff');\n    font-weight: 300;\n}\n/* Medium */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-Medium.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-Medium.woff') format('woff');\n    font-weight: 500;\n}\n/* SemiBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-SemiBold.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-SemiBold.woff') format('woff');\n    font-weight: 600;\n}\n/* ExtraBold */\n@font-face {\n    font-family: 'Manrope';\n    src: url('../fonts/manrope/Manrope-ExtraBold.woff2') format('woff2'),\n         url('../fonts/manrope/Manrope-ExtraBold.woff') format('woff');\n    font-weight: 800;\n}\n\n/* Custom variables */\n\n:root {\n    --primary-text-color: #7180AC;\n    --secondary-text-color: #F5F1ED;\n\n    --white: #F5F1ED; /* Isabelline */\n    --black: #030104;\n    \n    --blue: #7180AC; /* Glaucous */\n    --mid-blue: #2C3E50;\n    --darkblue: #201E50;\n}\n\n/* Default page styles */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*:hover {\n    cursor: default;\n}\n\nhtml {\n    font-family: 'Manrope', sans-serif;\n    background: linear-gradient(var(--mid-blue) 15%, var(--black));\n    background-attachment: fixed;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    color: var(--white);\n}\n\nmain {\n    display: grid;\n    margin: 0 auto;\n    max-width: 1000px;\n}\n\nsection {\n    display: grid;\n    place-content: center;\n}\n\n.hero,\n.about,\n.projects {\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n    grid-auto-flow: row;\n    place-content: center;\n    row-gap: 0.5rem;\n}\n\nh1 {\n    grid-column: 1 / -1;\n    font-size: 5rem;\n    place-self: start;\n}\n\nh2 {\n    place-self: center;\n    font-size: 2.3rem;\n    font-weight: 800;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n    border-bottom: 0.5rem solid var(--blue);\n}\n\nh4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.25rem;\n    text-transform: uppercase;\n}\n\nhr {\n    width: 50%;\n    place-self: center;\n    height: 0.5rem;\n    margin: 1rem;\n    border-radius: 2rem;\n    background-color: var(--white);\n    outline: none;\n    border: none;\n}\n\n/* Default links */\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover:not(a.active):not(a.home):not(a.big-link) {\n    text-decoration: 0.5rem underline var(--blue);\n}\n\na:active,\nbutton:active {\n    opacity: 0.75;\n}\n\n/* Large links i.e. 'Contact' and 'Projects' links, etc */\n\n.big-link {\n    padding: 1rem;\n    font-weight: 800;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: var(--darkblue);\n    background-color: var(--white);\n    background: radial-gradient(white, #F5F1ED);\n    outline: none;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 0 10px var(--darkblue);\n    border-radius: 1.5rem;\n    transition: box-shadow 0.25s, transform 0.5s;\n    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n.big-link:hover {\n    box-shadow: 0 0 10px var(--white);\n    outline: 4px solid var(--black);\n    transform: rotate(2deg);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");




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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_hero_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/hero.css */ "./src/styles/hero.css");
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/nav.css */ "./src/styles/nav.css");
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");




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
    github.className = 'external';
    githubLink.className = 'external';
    githubLink.textContent = 'Github';    
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    
    const cv = document.createElement('li');
    const cvLink = document.createElement('a');
    cv.className = 'external';
    cvLink.className = 'external';
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
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/animations.css */ "./src/styles/animations.css");
/* harmony import */ var _styles_slideshow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/slideshow.css */ "./src/styles/slideshow.css");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVE7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQSxtQkFBbUIsb0RBQUk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNVO0FBQ0Y7QUFDTzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RFc7QUFDRztBQUNFO0FBQ0Q7QUFDSTtBQUNXO0FBQ0k7QUFDTDs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVU7O0FBRXpCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBDQUEwQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDJEQUFjLGdCQUFnQiw0REFBMEQ7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksc0RBQVM7O0FBRWI7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7O0FDak92QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDTjs7QUFFNUIsZ0NBQWdDLGlEQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvaGVyby5jc3MiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9uYXYuY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvc2xpZGVzaG93LmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9hYm91dC5jc3M/ZDExNyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuY3NzP2NiYTMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9oZXJvLmNzcz84MTU4Iiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvbmF2LmNzcz8yMTcwIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzPzFhYWEiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9zbGlkZXNob3cuY3NzPzFjZmUiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9HZXRTY3JlZW5zaG90cy5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvTG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL0xvYWRTZWN0aW9uLmpzIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9TbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvSGVyby5qcyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvLy4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy8gc3luYyBub25yZWN1cnNpdmUgXFwuanBnJCIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWNrZW5zaXMuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tY2tlbnNpcy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21ja2Vuc2lzLmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEFib3V0IHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLmFib3V0IHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmFib3V0IHAge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5Qjs7QUFFekI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQWJvdXQgc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4uYWJvdXQge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ3VzdG9tIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tVG9wIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tUmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmlnTGlua1dpZ2dsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgaWYgcmVkdWNlZCBtb3Rpb24gaXNuJ3QgZW5hYmxlZCBmb3IgdXNlciAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xcbiAgICBuYXYgLmNvbnRhY3Q6aG92ZXIge1xcbiAgICAgICAgYW5pbWF0aW9uOiAuNzVzIGVhc2UgMHMgaW5maW5pdGUgYmlnTGlua1dpZ2dsZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlcm8gaDEsXFxuICAgIC5oZXJvIHAge1xcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZXJvIGltZy5wb3J0cmFpdCB7XFxuICAgICAgICBhbmltYXRpb246IDAuNzVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVRvcDtcXG4gICAgfVxcblxcbiAgICAuaGVybyBidXR0b24uYmlnLWxpbmsge1xcbiAgICAgICAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gYS5iaWctbGluayB7XFxuICAgICAgICBhbmltYXRpb246IDEuNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbiAgICB9XFxuXFxuICAgIC5pbmRpdmlkdWFsLXByb2plY3Q6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgICAgICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVJpZ2h0O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaW5kaXZpZHVhbC1wcm9qZWN0Om50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgICAgIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tTGVmdDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjs7QUFFdEI7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0k7UUFDSSw4Q0FBOEM7SUFDbEQ7O0lBRUE7O1FBRUksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksOENBQThDO0lBQ2xEOztJQUVBO1FBQ0ksNkNBQTZDO0lBQ2pEO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ3VzdG9tIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tVG9wIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tUmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmlnTGlua1dpZ2dsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgaWYgcmVkdWNlZCBtb3Rpb24gaXNuJ3QgZW5hYmxlZCBmb3IgdXNlciAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xcbiAgICBuYXYgLmNvbnRhY3Q6aG92ZXIge1xcbiAgICAgICAgYW5pbWF0aW9uOiAuNzVzIGVhc2UgMHMgaW5maW5pdGUgYmlnTGlua1dpZ2dsZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlcm8gaDEsXFxuICAgIC5oZXJvIHAge1xcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZXJvIGltZy5wb3J0cmFpdCB7XFxuICAgICAgICBhbmltYXRpb246IDAuNzVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVRvcDtcXG4gICAgfVxcblxcbiAgICAuaGVybyBidXR0b24uYmlnLWxpbmsge1xcbiAgICAgICAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLWluIDBzIDEgc2xpZGVJbkZyb21Ub3A7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gYS5iaWctbGluayB7XFxuICAgICAgICBhbmltYXRpb246IDEuNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tVG9wO1xcbiAgICB9XFxuXFxuICAgIC5pbmRpdmlkdWFsLXByb2plY3Q6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgICAgICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4gMHMgMSBzbGlkZUluRnJvbVJpZ2h0O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaW5kaXZpZHVhbC1wcm9qZWN0Om50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgICAgIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbiAwcyAxIHNsaWRlSW5Gcm9tTGVmdDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIZXJvIHNlY3Rpb24gc3R5bGVzICovXFxuXFxuLmhlcm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgcm93LWdhcDogMHJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5oZXJvIHAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uaGVybyAuYmlnLWxpbmsge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbn1cXG5cXG4uaGVybyBpbWcucG9ydHJhaXQge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJpZy1saW5rLmhlcm8tY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlcm8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3Qjs7QUFFeEI7SUFDSSw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhlcm8gc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4uaGVybyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICByb3ctZ2FwOiAwcmVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLmhlcm8gcCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5oZXJvIC5iaWctbGluayB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVybyBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxufVxcblxcbi5oZXJvIGltZy5wb3J0cmFpdCB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlcjogMC41cmVtIHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYmlnLWxpbmsuaGVyby1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ljb25zL2V4dGVybmFsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5hdmJhciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gM3JlbSk7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IGEge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC43NXM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMC41cmVtIHVuZGVybGluZSB0cmFuc3BhcmVudDtcXG59XFxuXFxubmF2IGxpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAyNHB4O1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcblxcbm5hdiBsaS5leHRlcm5hbDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZS1vdXQsIHRleHQtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFjdGl2ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7O0FBRVg7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtEQUFrRDtJQUNsRCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdEQUE0QztJQUM1QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDhEQUE4RDtBQUNsRTs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2YmFyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzcmVtKTtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjc1cztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAwLjVyZW0gdW5kZXJsaW5lIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDI0cHg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxubmF2IGxpLmV4dGVybmFsOmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IHVybCgnLi4vaW1hZ2VzL2ljb25zL2V4dGVybmFsLnBuZycpO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZS1vdXQsIHRleHQtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG4uaG9tZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFjdGl2ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUHJvamVjdHMgc2VjdGlvbiBzdHlsZXMgKi9cXG5cXG4ucHJvamVjdHMge1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS13aGl0ZSk7XFxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3QgaDIge1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5pbmRpdmlkdWFsLXByb2plY3Qgc2VjdGlvbi5kZXRhaWxzLFxcbi5pbmRpdmlkdWFsLXByb2plY3Qgc2VjdGlvbi5kZXZlbG9wbWVudCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGltZyB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3QtbGlua3MgaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1saW5rIGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ3lvJztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4vKiBIZWFkaW5nIHdpdGggdGl0bGUgYW5kIGxpbmtzICovXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5kZXRhaWxzIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHMgbGksXFxuLmRldmVsb3BtZW50IHAge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi8qIFRhZyBzdHlsZXMgKi9cXG5cXG4udGFncyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi50YWdzIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcXG59XFxuXFxuLnRhZ3Mgc3Bhbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7O0FBRTVCO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixrRUFBa0U7SUFDbEUsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBLGlDQUFpQztBQUNqQztJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBQcm9qZWN0cyBzZWN0aW9uIHN0eWxlcyAqL1xcblxcbi5wcm9qZWN0cyB7XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcbiAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4uaW5kaXZpZHVhbC1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLXdoaXRlKTtcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5kaXZpZHVhbC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCBoMiB7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmluZGl2aWR1YWwtcHJvamVjdCBzZWN0aW9uLmRldGFpbHMsXFxuLmluZGl2aWR1YWwtcHJvamVjdCBzZWN0aW9uLmRldmVsb3BtZW50IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3QtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGxhY2Utc2VsZjogZW5kO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtbGlua3MgaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWxpbmsgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAneW8nO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi8qIEhlYWRpbmcgd2l0aCB0aXRsZSBhbmQgbGlua3MgKi9cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZGV0YWlscyBsaSxcXG4uZGV2ZWxvcG1lbnQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLyogVGFnIHN0eWxlcyAqL1xcblxcbi50YWdzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLnRhZ3Mgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcbn1cXG5cXG4udGFncyBzcGFuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFNsaWRlc2hvdyBzdHlsZXMgKi9cXG5cXG4uc2xpZGVzaG93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA1O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNXJlbSAzMDBweCAzLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzUwcHggbWF4LWNvbnRlbnQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5pbWFnZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2xpZGVzaG93IGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4uc2xpZGVzaG93ID4gYTpmb2N1cyxcXG4uc2xpZGVzaG93ID4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNsaWRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5zbGlkZXNob3cgLmRvdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90IHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlc2hvdyAuYXJyb3cge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2xpZGVzaG93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFNsaWRlc2hvdyBzdHlsZXMgKi9cXG5cXG4uc2xpZGVzaG93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA1O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNXJlbSAzMDBweCAzLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzUwcHggbWF4LWNvbnRlbnQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5pbWFnZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2xpZGVzaG93IGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4uc2xpZGVzaG93ID4gYTpmb2N1cyxcXG4uc2xpZGVzaG93ID4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3QuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbn1cXG5cXG4uc2xpZGVzaG93IC5kb3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNsaWRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5zbGlkZXNob3cgLmRvdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNsaWRlc2hvdyAuZG90IHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlc2hvdyAuYXJyb3cge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFMaWdodC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUxpZ2h0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtTWVkaXVtLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLU1lZGl1bS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVNlbWlCb2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVNlbWlCb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFCb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYW5yb3BlIC0gR29vZ2xlIEZvbnRzICovXFxuLyogUmVndWxhciAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxufVxcbi8qIEV4dHJhTGlnaHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG4vKiBMaWdodCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi8qIE1lZGl1bSAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi8qIFNlbWlCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLyogRXh0cmFCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4vKiBDdXN0b20gdmFyaWFibGVzICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktdGV4dC1jb2xvcjogIzcxODBBQztcXG4gICAgLS1zZWNvbmRhcnktdGV4dC1jb2xvcjogI0Y1RjFFRDtcXG5cXG4gICAgLS13aGl0ZTogI0Y1RjFFRDsgLyogSXNhYmVsbGluZSAqL1xcbiAgICAtLWJsYWNrOiAjMDMwMTA0O1xcbiAgICBcXG4gICAgLS1ibHVlOiAjNzE4MEFDOyAvKiBHbGF1Y291cyAqL1xcbiAgICAtLW1pZC1ibHVlOiAjMkMzRTUwO1xcbiAgICAtLWRhcmtibHVlOiAjMjAxRTUwO1xcbn1cXG5cXG4vKiBEZWZhdWx0IHBhZ2Ugc3R5bGVzICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKjpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1taWQtYmx1ZSkgMTUlLCB2YXIoLS1ibGFjaykpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvLFxcbi5hYm91dCxcXG4ucHJvamVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG5oMiB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkIHZhcigtLWJsdWUpO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuaHIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBEZWZhdWx0IGxpbmtzICovXFxuXFxuYTpob3ZlcixcXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmE6aG92ZXI6bm90KGEuYWN0aXZlKTpub3QoYS5ob21lKTpub3QoYS5iaWctbGluaykge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDAuNXJlbSB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XFxufVxcblxcbmE6YWN0aXZlLFxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4vKiBMYXJnZSBsaW5rcyBpLmUuICdDb250YWN0JyBhbmQgJ1Byb2plY3RzJyBsaW5rcywgZXRjICovXFxuXFxuLmJpZy1saW5rIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQod2hpdGUsICNGNUYxRUQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZGFya2JsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMsIHRyYW5zZm9ybSAwLjVzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcXG59XFxuXFxuLmJpZy1saW5rOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2hpdGUpO1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtJQUNJLHNCQUFzQjtJQUN0QjsrREFDZ0U7QUFDcEU7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ21FO0lBQ25FLGdCQUFnQjtBQUNwQjtBQUNBLFVBQVU7QUFDVjtJQUNJLHNCQUFzQjtJQUN0QjsrREFDOEQ7SUFDOUQsZ0JBQWdCO0FBQ3BCO0FBQ0EsV0FBVztBQUNYO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUMrRDtJQUMvRCxnQkFBZ0I7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ2lFO0lBQ2pFLGdCQUFnQjtBQUNwQjtBQUNBLGNBQWM7QUFDZDtJQUNJLHNCQUFzQjtJQUN0QjtnRUFDa0U7SUFDbEUsZ0JBQWdCO0FBQ3BCOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCOztJQUUvQixnQkFBZ0IsRUFBRSxlQUFlO0lBQ2pDLGdCQUFnQjs7SUFFaEIsZUFBZSxFQUFFLGFBQWE7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQSx3QkFBd0I7O0FBRXhCO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDhEQUE4RDtJQUM5RCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLGtCQUFrQjs7QUFFbEI7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBLHlEQUF5RDs7QUFFekQ7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFucm9wZSAtIEdvb2dsZSBGb250cyAqL1xcbi8qIFJlZ3VsYXIgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG4vKiBFeHRyYUxpZ2h0ICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFMaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1FeHRyYUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuLyogTGlnaHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi8qIE1lZGl1bSAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL21hbnJvcGUvTWFucm9wZS1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4vKiBTZW1pQm9sZCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLVNlbWlCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLyogRXh0cmFCb2xkICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlL01hbnJvcGUtRXh0cmFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvbWFucm9wZS9NYW5yb3BlLUV4dHJhQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi8qIEN1c3RvbSB2YXJpYWJsZXMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS10ZXh0LWNvbG9yOiAjNzE4MEFDO1xcbiAgICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yOiAjRjVGMUVEO1xcblxcbiAgICAtLXdoaXRlOiAjRjVGMUVEOyAvKiBJc2FiZWxsaW5lICovXFxuICAgIC0tYmxhY2s6ICMwMzAxMDQ7XFxuICAgIFxcbiAgICAtLWJsdWU6ICM3MTgwQUM7IC8qIEdsYXVjb3VzICovXFxuICAgIC0tbWlkLWJsdWU6ICMyQzNFNTA7XFxuICAgIC0tZGFya2JsdWU6ICMyMDFFNTA7XFxufVxcblxcbi8qIERlZmF1bHQgcGFnZSBzdHlsZXMgKi9cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLW1pZC1ibHVlKSAxNSUsIHZhcigtLWJsYWNrKSk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8sXFxuLmFib3V0LFxcbi5wcm9qZWN0cyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMC41cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxufVxcblxcbmgyIHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgdmFyKC0tYmx1ZSk7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5ociB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIERlZmF1bHQgbGlua3MgKi9cXG5cXG5hOmhvdmVyLFxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3Zlcjpub3QoYS5hY3RpdmUpOm5vdChhLmhvbWUpOm5vdChhLmJpZy1saW5rKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMC41cmVtIHVuZGVybGluZSB2YXIoLS1ibHVlKTtcXG59XFxuXFxuYTphY3RpdmUsXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi8qIExhcmdlIGxpbmtzIGkuZS4gJ0NvbnRhY3QnIGFuZCAnUHJvamVjdHMnIGxpbmtzLCBldGMgKi9cXG5cXG4uYmlnLWxpbmsge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgI0Y1RjFFRCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cywgdHJhbnNmb3JtIDAuNXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xcbn1cXG5cXG4uYmlnLWxpbms6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS13aGl0ZSk7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlcm8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZXJvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlc2hvdy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlc2hvdy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9SZXR1cm5zIHNjcmVlbnNob3RzIGZyb20gdGhlIGRpc3QgZm9sZGVyIHdoaWNoIG1hdGNoIHRoZSBwcm9qZWN0IHZhcmlhYmxlXG5mdW5jdGlvbiBHZXRTY3JlZW5zaG90cyhwcm9qZWN0LCBjb250ZXh0KSB7XG4gICAgbGV0IGltYWdlcyA9IFtdO1xuXG4gICAgLy9Gb3IgZWFjaCBpdGVtIGluIHRoZSBpbWFnZXMvc2NyZWVuc2hvdHMgZm9sZGVyXG4gICAgLy9JZiB0aGUgaW1hZ2UgbmFtZSBtYXRjaGVzIHRoZSBwcm9qZWN0IHZhcmlhYmxlLFxuICAgIC8vQWRkIGl0IHRvIHRoZSBpbWFnZXMgYXJyYXlcbiAgICBjb250ZXh0LmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKHByb2plY3QpKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IGNvbnRleHQoaXRlbSk7XG4gICAgICAgICAgICBpbWFnZXMucHVzaCh0ZW1wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbWFnZXM7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2V0U2NyZWVuc2hvdHM7IiwiaW1wb3J0IE5hdiBmcm9tICcuL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBIZXJvIGZyb20gJy4vY29tcG9uZW50cy9IZXJvJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0cyc7XG5pbXBvcnQgTG9hZFNlY3Rpb24gZnJvbSAnLi9Mb2FkU2VjdGlvbic7XG5cbmZ1bmN0aW9uIExvYWRQYWdlKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIFxuICAgIGJvZHkuYXBwZW5kKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmQobWFpbik7XG5cbiAgICBoZWFkZXIuYXBwZW5kKE5hdigpKTtcbiAgICBtYWluLmFwcGVuZChIZXJvKCkpO1xuXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgbGkgYScpO1xuXG4gICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAobGluay5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSAhPT0gJ2V4dGVybmFsJykge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBMb2FkU2VjdGlvbihsaW5rLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGEuaG9tZScpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIExvYWRTZWN0aW9uKCdIb21lJyk7XG4gICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZFBhZ2U7IiwiaW1wb3J0IEhlcm8gZnJvbSAnLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RzJztcblxuZnVuY3Rpb24gTG9hZFNlY3Rpb24oc2VjdGlvbikge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGlmIChtYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzd2l0Y2goc2VjdGlvbikge1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBtYWluLmFwcGVuZChBYm91dCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQcm9qZWN0cyc6XG4gICAgICAgICAgICBtYWluLmFwcGVuZChQcm9qZWN0cygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKEhlcm8oKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKEhlcm8oKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRTZWN0aW9uOyIsImZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShkb3RzLCBpbmRleCkge1xuXG4gICAgZG90cy5mb3JFYWNoKGRvdCA9PiB7XG4gICAgICAgIGlmIChkb3RzLmluZGV4T2YoZG90KSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheShkaXNwbGF5LCBpbWFnZSkge1xuICAgIGRpc3BsYXkuc3JjID0gaW1hZ2Uuc3JjO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlQXJyb3dzKGFycm93cywgaW1hZ2VzLCBpbmRleCkge1xuICAgIGxldCBwcmV2aW91cyA9IGFycm93c1swXTtcbiAgICBsZXQgbmV4dCA9IGFycm93c1sxXTtcblxuICAgIGlmIChpbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtMSkge1xuICAgICAgICBwcmV2aW91cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbmV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcHJldmlvdXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbmV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2aW91cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbmV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBTbGlkZXNob3cocGFyZW50cykge1xuXG4gICAgcGFyZW50cy5mb3JFYWNoKHBhcmVudCA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGFycm93cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3cnKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmFycm93LnByZXZpb3VzJyk7XG4gICAgICAgIGNvbnN0IG5leHQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmFycm93Lm5leHQnKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUnKTtcbiAgICAgICAgY29uc3QgZG90cyA9IEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJykuY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2VzJykuY2hpbGRyZW4pO1xuICAgICAgICBcbiAgICAgICAgLy9IaWRlIHRoZSBwcmV2aW91cyBhcnJvdyBvbiBpbml0aWFsIHNsaWRlc2hvdyBsb2FkXG4gICAgICAgIHByZXZpb3VzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIFxuICAgICAgICBkb3RzLmZvckVhY2goZG90ID0+IHtcbiAgICAgICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJvd3MoYXJyb3dzLCBpbWFnZXMsIGRvdHMuaW5kZXhPZihkb3QpKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmUoZG90cywgZG90cy5pbmRleE9mKGRvdCkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoZGlzcGxheSwgaW1hZ2VzW2RvdHMuaW5kZXhPZihkb3QpXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gaW1hZ2VzLmxlbmd0aCAtMSkge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVBY3RpdmUoZG90cywgaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlQXJyb3dzKGFycm93cywgaW1hZ2VzLCBpbmRleCk7XG4gICAgICAgICAgICB1cGRhdGVEaXNwbGF5KGRpc3BsYXksIGltYWdlc1tpbmRleF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVBY3RpdmUoZG90cywgaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlQXJyb3dzKGFycm93cywgaW1hZ2VzLCBpbmRleCk7XG4gICAgICAgICAgICB1cGRhdGVEaXNwbGF5KGRpc3BsYXksIGltYWdlc1tpbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93OyIsImltcG9ydCAnLi4vc3R5bGVzL2Fib3V0LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9ucy5jc3MnO1xuXG5mdW5jdGlvbiBBYm91dCgpIHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdBYm91dCBNZSc7XG5cbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBgSSdtIGEgc2VsZi10YXVnaHQgZGV2ZWxvcGVyIHdobyBoYXMgYmVlbiBsZWFybmluZyB3ZWIgZGV2ZWxvcG1lbnQgc2luY2UgZWFybHkgMjAyMi4gYFxuICAgICAgICArIGBJJ20gbm93IGxvb2tpbmcgdG8gZW50ZXIgdGhlIGluZHVzdHJ5IGFuZCBncm93IHdpdGhpbiBhIHByb2Zlc3Npb25hbCBlbnZpcm9ubWVudC4gYFxuICAgICAgICArIGBNeSBjdXJyZW50IGdvYWwgaXMgdG8gZmluZCBhIHJvbGUgd2hlcmUgSSBjYW4gYmVnaW4gbXkgY2FyZWVyIGFuZCBjb250aW51ZSBkZXZlbG9waW5nIG15IHNraWxsc2V0LmA7XG5cbiAgICBjb25zdCB0b29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b29scy50ZXh0Q29udGVudCA9ICdTb21lIG1vcmUgaW5mbyBoZXJlJztcblxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgIGFib3V0LmFwcGVuZChwYXJhLCBociwgdG9vbHMpO1xuXG4gICAgcmV0dXJuIGFib3V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaGVyby5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9ucy5jc3MnO1xuaW1wb3J0IFBvcnRyYWl0IGZyb20gJy4uL2ltYWdlcy9pY29uLmpwZyc7XG5pbXBvcnQgTWFpbCBmcm9tICcuLi9pbWFnZXMvaWNvbnMvZW1haWwucG5nJztcbmltcG9ydCBMb2FkU2VjdGlvbiBmcm9tICcuLi9Mb2FkU2VjdGlvbic7XG5cbmZ1bmN0aW9uIEhlcm8oKSB7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBoZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcblxuICAgIGNvbnN0IHBvcnRyYWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKTtcbiAgICBwb3J0cmFpdC5zcmMgPSBQb3J0cmFpdDtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYEhpLCBJJ20gQWlkYW5gO1xuXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gJ0Zyb250LWVuZCBkZXZlbG9wZXIgZnJvbSBHbGFzZ293LCBTY290bGFuZCc7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1ZpZXcgTXkgUHJvamVjdHMnO1xuICAgIHByb2plY3RzLnR5cGUgPSAnYnV0dG9uJztcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdiaWctbGluaycsJ2hlcm8tcHJvamVjdHMnKTtcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGxpIGEucHJvamVjdC1saW5rJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIExvYWRTZWN0aW9uKCdQcm9qZWN0cycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWlsSWNvbi5zcmMgPSBNYWlsO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgTWUnO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYmlnLWxpbmsnLCAnaGVyby1jb250YWN0Jyk7XG4gICAgY29udGFjdC5ocmVmID0gJ21haWx0bzphZG4ubWNrQGdtYWlsLmNvbT9zdWJqZWN0PUhpIEFpZGFuJztcbiAgICBcbiAgICBjb250YWN0LmFwcGVuZChtYWlsSWNvbik7XG4gICAgaGVyby5hcHBlbmQoaGVhZGVyLCBwYXJhLCBwcm9qZWN0cywgY29udGFjdCwgcG9ydHJhaXQpO1xuXG4gICAgcmV0dXJuIGhlcm87XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL25hdi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9ucy5jc3MnO1xuXG5mdW5jdGlvbiBOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lLmNsYXNzTmFtZSA9ICdob21lJztcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0FNLic7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnRhY3QuaHJlZiA9ICdtYWlsdG86YWRuLm1ja0BnbWFpbC5jb20/c3ViamVjdD1IaSBBaWRhbic7XG4gICAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdiaWctbGluaycpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhYm91dExpbmsudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcHJvamVjdHNMaW5rLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBwcm9qZWN0c0xpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saW5rJyk7XG4gICAgXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1Yi5jbGFzc05hbWUgPSAnZXh0ZXJuYWwnO1xuICAgIGdpdGh1YkxpbmsuY2xhc3NOYW1lID0gJ2V4dGVybmFsJztcbiAgICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdGh1Yic7ICAgIFxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbWNrZW5zaXMnO1xuICAgIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgXG4gICAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGN2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjdi5jbGFzc05hbWUgPSAnZXh0ZXJuYWwnO1xuICAgIGN2TGluay5jbGFzc05hbWUgPSAnZXh0ZXJuYWwnO1xuICAgIGN2TGluay50ZXh0Q29udGVudCA9ICdWaWV3IENWJztcbiAgICBjdkxpbmsuaHJlZiA9ICcjJztcbiAgICBjdkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgICBhYm91dC5hcHBlbmQoYWJvdXRMaW5rKTtcbiAgICBwcm9qZWN0cy5hcHBlbmQocHJvamVjdHNMaW5rKTtcbiAgICBnaXRodWIuYXBwZW5kKGdpdGh1YkxpbmspO1xuICAgIGN2LmFwcGVuZChjdkxpbmspO1xuICAgIGxpc3QuYXBwZW5kKGFib3V0LCBwcm9qZWN0cywgZ2l0aHViLCBjdik7XG4gICAgbmF2LmFwcGVuZChob21lLCBsaXN0LCBjb250YWN0KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcHJvamVjdHMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2FuaW1hdGlvbnMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NsaWRlc2hvdy5jc3MnO1xuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi9TbGlkZXNob3cnO1xuaW1wb3J0IHZpZXdMaXZlIGZyb20gJy4uL2ltYWdlcy9pY29ucy9saXZlLnBuZyc7XG5pbXBvcnQgdmlld0dpdGh1YiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvZ2l0aHViLnBuZyc7XG5pbXBvcnQgR2V0U2NyZWVuc2hvdHMgZnJvbSAnLi4vR2V0U2NyZWVuc2hvdHMnO1xuXG5mdW5jdGlvbiBHZXRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0ge1xuICAgICAgICB0aXRsZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICBhbGlhczogJ2JhdHRsZXNoaXAnLFxuICAgICAgICBpbmZvOiBbXG4gICAgICAgICAgICBgQ2xhc3NpYyBCYXR0bGVzaGlwIGJvYXJkIGdhbWVgLCBcbiAgICAgICAgICAgIGBQbGF5IGFnYWluc3QgYW4gQUkgcGxheWVyYCxcbiAgICAgICAgICAgIGBGaXJzdCBwbGF5ZXIgdG8gZGVzdHJveSB0aGUgZW5lbXkncyA1IHNoaXBzIHdpbnNgLFxuICAgICAgICBdLFxuICAgICAgICBkZXZlbG9wbWVudDogJ0kgd3JvdGUgdW5pdCB0ZXN0cyB3aXRoIEplc3QgZHVyaW5nIGRldmVsb3BtZW50IG9mIHRoaXMgcHJvamVjdCBhbmQgcHVycG9zZWZ1bGx5IGJyb2tlIHRoZSBwcm9qZWN0IHdpdGggZWFjaCBuZXcgdGVzdCB1bnRpbCBmdW5jdGlvbmFsaXR5IHdhcyBjb21wbGV0ZS4nLFxuICAgICAgICBsaXZlOiAnYmF0dGxlc2hpcCcsXG4gICAgICAgIGNvZGU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgdGFnczogWyAnSFRNTCcsICdDU1MnLCAnSmF2YVNjcmlwdCcsICdXZWJwYWNrJywgJ0plc3QnLCAnVEREJyBdLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCB3ZWF0aGVyID0ge1xuICAgICAgICB0aXRsZTogJ1dlYXRoZXIgRm9yZWNhc3QnLFxuICAgICAgICBhbGlhczogJ2ZvcmVjYXN0JyxcbiAgICAgICAgaW5mbzogW1xuICAgICAgICAgICAgYEVudGVyIGEgbG9jYXRpb24gdG8gc2VhcmNoIGZvciB0aGUgd2VhdGhlcmAsXG4gICAgICAgICAgICBgQ3VycmVudCB3ZWF0aGVyIHdpbGwgZGlzcGxheSBmb3IgdGhlIGxvY2F0aW9uYCxcbiAgICAgICAgICAgIGBMYXRlciAmIHRvbW9ycm93IGZvcmVjYXN0cyB3aWxsIGFsc28gZGlzcGxheWAsXG4gICAgICAgIF0sXG4gICAgICAgIGRldmVsb3BtZW50OiBgSSB1c2VkIGFzeW5jIGFuZCBhd2FpdCBhbG9uZyB3aXRoIG11bHRpcGxlIEFQSXMgZnJvbSBPcGVuV2VhdGhlciBzdWNoIGFzICdHZW9jb2RpbmcnLCAnQ3VycmVudFdlYXRoZXInLCBhbmQgJzMgSG91ciAvIDUgRGF5IEZvcmVjYXN0Jy5gLFxuICAgICAgICBsaXZlOiAnd2VhdGhlci1mb3JlY2FzdCcsXG4gICAgICAgIGNvZGU6ICd3ZWF0aGVyLWZvcmVjYXN0JyxcbiAgICAgICAgdGFnczogWyAnSFRNTCcsICdDU1MnLCAnSmF2YVNjcmlwdCcsICdXZWJwYWNrJywgJ0FQSScsICdBc3luYyAvIEF3YWl0JyBdLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICB0aXRsZTogJ1RvLURvIExpc3QnLFxuICAgICAgICBhbGlhczogJ3RvLWRvLWxpc3QnLFxuICAgICAgICBpbmZvOiBbXG4gICAgICAgICAgICBgVmlldyBsaXN0cyBvbiB0aGUgbGVmdCAmIHRhc2tzIG9uIHRoZSByaWdodGAsXG4gICAgICAgICAgICBgQWRkIGEgbmV3IGxpc3Qgb3IgdGFzayB3aXRoaW4gZWl0aGVyIHNlY3Rpb25gLFxuICAgICAgICAgICAgYE1hcmsgYSB0YXNrIGFzIGNvbXBsZXRlLCBvciBjaGFuZ2UgdGFzayBwcmlvcml0eWAsXG4gICAgICAgIF0sXG4gICAgICAgIGRldmVsb3BtZW50OiBgSSB1c2VkIGxvY2Fsc3RvcmFnZSBpbiB0aGlzIHByb2plY3QgdG8ga2VlcCB0cmFjayBvZiBhIHVzZXIncyB0YXNrcyBhbmQgbGlzdHMgdGhhdCB0aGV5IGNyZWF0ZSwgYXMgd2VsbCBhcyBhbnkgdGFza3MgdGhhdCBoYXZlIGJlZW4gY29tcGxldGVkLmAsXG4gICAgICAgIGxpdmU6ICd0by1kby1saXN0JyxcbiAgICAgICAgY29kZTogJ3RvLWRvLWxpc3QnLFxuICAgICAgICB0YWdzOiBbICdIVE1MJywgJ0NTUycsICdKYXZhU2NyaXB0JywgJ1dlYnBhY2snLCAnTG9jYWxTdG9yYWdlJyBdLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgIH07XG5cbiAgICByZXR1cm4gWyBiYXR0bGVzaGlwLCB3ZWF0aGVyLCB0b2RvIF07XG59XG5cbmZ1bmN0aW9uIENyZWF0ZVNsaWRlc2hvdyhpbWFnZXMpIHtcbiAgICBjb25zdCBzbGlkZXNob3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2xpZGVzaG93LmNsYXNzTmFtZSA9ICdzbGlkZXNob3cnO1xuXG4gICAgY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2aW91cy5jbGFzc0xpc3QuYWRkKCdhcnJvdycsICdwcmV2aW91cycpO1xuICAgIHByZXZpb3VzLmlubmVySFRNTCA9ICcmbHNhcXVvOyc7XG5cbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV4dC5jbGFzc0xpc3QuYWRkKCdhcnJvdycsICduZXh0Jyk7XG4gICAgbmV4dC5pbm5lckhUTUwgPSBgJnJzYXF1bztgO1xuXG4gICAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzbGlkZS5jbGFzc05hbWUgPSAnc2xpZGUnO1xuICAgIHNsaWRlLnNyYyA9IGltYWdlc1swXTtcblxuICAgIGNvbnN0IGltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlc0Rpdi5jbGFzc05hbWUgPSAnaW1hZ2VzJztcbiAgICBcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgICAgIGltYWdlc0Rpdi5hcHBlbmQoaW1nKTtcblxuICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICAgICAgZG90cy5hcHBlbmQoZG90KTtcbiAgICB9KTtcbiAgICBcbiAgICBkb3RzLmNsYXNzTmFtZSA9ICdkb3RzJztcbiAgICBcbiAgICBpZiAoZG90cy5jaGlsZHJlblswXSkge1xuICAgICAgICBkb3RzLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHNsaWRlc2hvdy5hcHBlbmQocHJldmlvdXMsIHNsaWRlLCBuZXh0LCBkb3RzLCBpbWFnZXNEaXYpO1xuXG4gICAgcmV0dXJuIHNsaWRlc2hvdztcbn1cblxuZnVuY3Rpb24gQ3JlYXRlVGFncyh0YWdzKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RhZ3MnKTtcbiAgICBcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRhZztcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQoc3Bhbik7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIENyZWF0ZUxpbmtzKGxpbmtzKSB7XG4gICAgY29uc3QgQkFTRV9HSVRIVUJfVVJMID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY2tlbnNpcy8nO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWxpbmtzJztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnVmlldyBQcm9qZWN0JztcblxuICAgIGNvbnN0IGxpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpOyAgICBcbiAgICBjb25zdCBsaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGl2ZUxpbmsuaHJlZiA9IGxpbmtzLmxpdmU7XG4gICAgbGl2ZUxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgbGl2ZUxpbmsudGl0bGUgPSAnVmlldyBwcm9qZWN0IGxpdmUnO1xuICAgIGxpdmUuc3JjID0gdmlld0xpdmU7XG4gICAgXG4gICAgY29uc3QgY29kZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvZGVMaW5rLmhyZWYgPSBCQVNFX0dJVEhVQl9VUkwgKyBsaW5rcy5naXRodWI7XG4gICAgY29kZUxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgY29kZUxpbmsudGl0bGUgPSAnVmlldyBvbiBHaXRIdWInO1xuICAgIGNvZGUuc3JjID0gdmlld0dpdGh1YjtcblxuICAgIGxpdmVMaW5rLmFwcGVuZChsaXZlKTtcbiAgICBjb2RlTGluay5hcHBlbmQoY29kZSk7XG5cbiAgICBzZWN0aW9uLmFwcGVuZChoZWFkaW5nLCBsaXZlTGluaywgY29kZUxpbmspO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIENyZWF0ZURldGFpbHNTZWN0aW9uKGRldGFpbHMpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0IERldGFpbHMnO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBkZXRhaWxzLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHBpZWNlO1xuICAgICAgICBsaXN0LmFwcGVuZChpdGVtKTtcbiAgICB9KVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoaGVhZGluZywgbGlzdCk7XG4gICAgXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIENyZWF0ZURldmVsb3BtZW50U2VjdGlvbihpbmZvKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2RldmVsb3BtZW50Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdEZXZlbG9wbWVudCBQcm9jZXNzJztcbiAgICBcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gaW5mbztcblxuICAgIHNlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIHBhcmFncmFwaCk7XG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIENyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgYXJ0aWNsZS5jbGFzc05hbWUgPSAnaW5kaXZpZHVhbC1wcm9qZWN0JztcbiAgICBcbiAgICAvL0hlYWRlciBTZWN0aW9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAvL0hlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAvL0xpbmtzXG4gICAgY29uc3QgbGlua3MgPSBDcmVhdGVMaW5rcyh7IGxpdmU6IHByb2plY3QubGl2ZSwgZ2l0aHViOiBwcm9qZWN0LmNvZGUgfSk7XG4gICAgLy9TbGlkZXNob3dcbiAgICBjb25zdCBzbGlkZXNob3cgPSBDcmVhdGVTbGlkZXNob3cocHJvamVjdC5pbWFnZXMpO1xuICAgIC8vVGFnc1xuICAgIGNvbnN0IHRhZ3MgPSBDcmVhdGVUYWdzKHByb2plY3QudGFncyk7XG4gICAgLy9JbmZvXG4gICAgY29uc3QgaW5mbyA9IENyZWF0ZURldGFpbHNTZWN0aW9uKHByb2plY3QuaW5mbyk7XG4gICAgLy9EZXZlbG9wbWVudFxuICAgIGNvbnN0IGRldmVsb3BtZW50ID0gQ3JlYXRlRGV2ZWxvcG1lbnRTZWN0aW9uKHByb2plY3QuZGV2ZWxvcG1lbnQpO1xuICAgIFxuICAgIGhlYWRlci5hcHBlbmQoaGVhZGluZywgbGlua3MpO1xuICAgIGFydGljbGUuYXBwZW5kKGhlYWRlciwgdGFncywgaW5mbywgZGV2ZWxvcG1lbnQsIHNsaWRlc2hvdyk7XG4gICAgXG4gICAgcmV0dXJuIGFydGljbGU7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHByb2plY3RzLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XG5cbiAgICBjb25zdCBsaXN0ID0gR2V0UHJvamVjdHMoKTtcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgbGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LmltYWdlcyA9IEdldFNjcmVlbnNob3RzKHByb2plY3QuYWxpYXMsIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL3NjcmVlbnNob3RzLycsIGZhbHNlLCAvXFwuanBnJC8pKTtcbiAgICAgICAgbGV0IHBhcmVudCA9IENyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzLmFwcGVuZChwYXJlbnQpO1xuICAgICAgICBsZXQgc2xpZGVzaG93ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXNob3cnKVxuICAgICAgICBwYXJlbnRzLnB1c2goc2xpZGVzaG93KTtcbiAgICB9KTtcblxuICAgIFNsaWRlc2hvdyhwYXJlbnRzKTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhdHRsZXNoaXAwLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy9iYXR0bGVzaGlwMC5qcGdcIixcblx0XCIuL2JhdHRsZXNoaXAxLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy9iYXR0bGVzaGlwMS5qcGdcIixcblx0XCIuL2ZvcmVjYXN0MC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvc2NyZWVuc2hvdHMvZm9yZWNhc3QwLmpwZ1wiLFxuXHRcIi4vZm9yZWNhc3QxLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cy9mb3JlY2FzdDEuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9zY3JlZW5zaG90cyBzeW5jIFxcXFwuanBnJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTG9hZFBhZ2UgZnJvbSAnLi9Mb2FkUGFnZSc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgTG9hZFBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==