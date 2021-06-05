/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhospital_reservation_app"] = self["webpackChunkhospital_reservation_app"] || []).push([["frontend_src_components_common_PrivateRoute_js-frontend_src_components_doctorMode_images_doct-e707f4"],{

/***/ "./frontend/src/components/common/PrivateRoute.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/common/PrivateRoute.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _excluded = [\"component\", \"auth\"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      auth = _ref.auth,\n      rest = _objectWithoutProperties(_ref, _excluded);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, _extends({}, rest, {\n    render: function render(props) {\n      if (auth.isLoading) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n          className: \"mt-5 ml-5\"\n        }, \" Loading...\");\n      } else if (!auth.isAuthenticated) {} else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props);\n      }\n    }\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PrivateRoute));\n\n//# sourceURL=webpack://hospital_reservation_app/./frontend/src/components/common/PrivateRoute.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/patientMode/css/patientMode.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/patientMode/css/patientMode.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _guestUserMode_images_Homebackground_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guestUserMode/images/Homebackground.jpg */ \"./frontend/src/components/guestUserMode/images/Homebackground.jpg\");\n/* harmony import */ var _layout_images_logo5_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/images/logo5.png */ \"./frontend/src/components/layout/images/logo5.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_guestUserMode_images_Homebackground_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_layout_images_logo5_png__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*--------------------------------------------------------- styles for NavTab.js------------------------------------------------------------------*/\\n\\n.registered-patient-heading {\\n  width: 100%;\\n  height: 90px !important;\\n  overflow: hidden;\\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@media (min-width: 768px) {\\n  .MuiTabs-flexContainer {\\n    justify-content: center;\\n  }\\n}\\n\\n.sticky {\\n  position: -webkit-sticky;\\n  position: sticky !important;\\n  top: 0 !important;\\n  z-index: 130 !important;\\n}\\n\\n/*--------------------------------------------------------- styles for patientProfile.js------------------------------------------------------------------*/\\n\\n/* ==========================================================================\\n   #FONT\\n   ========================================================================== */\\n.font-robo {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n\\n.font-poppins {\\n  font-family: \\\"Poppins\\\", \\\"Arial\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n\\n/* ==========================================================================\\n     #GRID\\n     ========================================================================== */\\n.row {\\n  display: -webkit-box;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-flex-wrap: wrap;\\n  -ms-flex-wrap: wrap;\\n  flex-wrap: wrap;\\n}\\n\\n.row-space {\\n  -webkit-box-pack: justify;\\n  -webkit-justify-content: space-between;\\n  -moz-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n}\\n\\n.col-2 {\\n  width: -webkit-calc((100% - 30px) / 2);\\n  width: -moz-calc((100% - 30px) / 2);\\n  width: calc((100% - 30px) / 2);\\n}\\n\\n@media (max-width: 767px) {\\n  .col-2 {\\n    width: 100%;\\n  }\\n}\\n\\n/* ==========================================================================\\n     #BOX-SIZING\\n     ========================================================================== */\\n\\nhtml {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n}\\n\\n/* ==========================================================================\\n     #RESET\\n     ========================================================================== */\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nblockquote,\\np,\\npre,\\ndl,\\ndd,\\nol,\\nul,\\nfigure,\\nhr,\\nfieldset,\\nlegend {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nli > ol,\\nli > ul {\\n  margin-bottom: 0;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nfieldset {\\n  min-width: 0;\\n\\n  border: 0;\\n}\\n\\nbutton {\\n  outline: none;\\n  background: none;\\n  border: none;\\n}\\n\\n/* ==========================================================================\\n     #PAGE WRAPPER\\n     ========================================================================== */\\n.page-wrapper {\\n  min-height: 100vh;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", \\\"Arial\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 14px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-weight: 400;\\n}\\n\\nh1 {\\n  font-size: 36px;\\n}\\n\\nh2 {\\n  font-size: 30px;\\n}\\n\\nh3 {\\n  font-size: 24px;\\n}\\n\\nh4 {\\n  font-size: 18px;\\n}\\n\\nh5 {\\n  font-size: 15px;\\n}\\n\\nh6 {\\n  font-size: 13px;\\n}\\n\\n/* ==========================================================================\\n     #SPACING\\n     ========================================================================== */\\n.p-t-100 {\\n  padding-top: 100px;\\n}\\n\\n.p-t-130 {\\n  padding-top: 130px;\\n}\\n\\n.p-t-180 {\\n  padding-top: 180px;\\n}\\n\\n.p-t-20 {\\n  padding-top: 20px;\\n}\\n\\n.p-t-15 {\\n  padding-top: 15px;\\n}\\n\\n.p-t-10 {\\n  padding-top: 10px;\\n}\\n\\n.p-t-30 {\\n  padding-top: 30px;\\n}\\n\\n.p-t-50 {\\n  padding-top: 50px;\\n}\\n\\n.p-b-50 {\\n  padding-bottom: 50px;\\n}\\n\\n.p-b-100 {\\n  padding-bottom: 100px;\\n}\\n\\n.m-r-45 {\\n  margin-right: 45px;\\n}\\n\\n/* ==========================================================================\\n     #WRAPPER\\n     ========================================================================== */\\n.wrapper {\\n  margin: 0 auto;\\n}\\n\\n.wrapper--w960 {\\n  max-width: 960px;\\n}\\n\\n.wrapper--w780 {\\n  max-width: 780px;\\n}\\n\\n.wrapper--w680 {\\n  max-width: 680px;\\n}\\n\\n/* ==========================================================================\\n     #BUTTON\\n     ========================================================================== */\\n\\n.btn--green {\\n  background: #57b846;\\n}\\n\\n.btn--green:hover {\\n  background: #4dae3c;\\n}\\n\\n.btn--blue {\\n  background: #3f51b5;\\n}\\n\\n.btn--blue:hover {\\n  background: #3868cd;\\n}\\n\\n/* ==========================================================================\\n     #FORM\\n     ========================================================================== */\\n\\nlabel {\\n  font-size: 13px;\\n  color: #555;\\n  text-transform: capitalize;\\n  display: block;\\n  margin-bottom: 5px;\\n}\\n\\n.radio-container {\\n  display: inline-block;\\n  position: relative;\\n  padding-left: 30px;\\n  cursor: pointer;\\n  font-size: 16px;\\n  color: #666;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\n.radio-container input {\\n  position: absolute;\\n  opacity: 0;\\n  cursor: pointer;\\n}\\n\\n.radio-container input:checked ~ .checkmark {\\n  background-color: #e5e5e5;\\n}\\n\\n.radio-container input:checked ~ .checkmark:after {\\n  display: block;\\n}\\n\\n.radio-container .checkmark:after {\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n  -moz-transform: translate(-50%, -50%);\\n  -ms-transform: translate(-50%, -50%);\\n  -o-transform: translate(-50%, -50%);\\n  transform: translate(-50%, -50%);\\n  width: 12px;\\n  height: 12px;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  border-radius: 50%;\\n  background: #3f51b5;\\n}\\n\\n.checkmark {\\n  position: absolute;\\n  top: 50%;\\n  -webkit-transform: translateY(-50%);\\n  -moz-transform: translateY(-50%);\\n  -ms-transform: translateY(-50%);\\n  -o-transform: translateY(-50%);\\n  transform: translateY(-50%);\\n  left: 0;\\n  height: 20px;\\n  width: 20px;\\n  background-color: #e5e5e5;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  border-radius: 50%;\\n  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\\n  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\\n  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\\n}\\n\\n.checkmark:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  display: none;\\n}\\n\\n.input-group {\\n  position: relative;\\n  margin-bottom: 22px;\\n}\\n\\n.input-group-icon {\\n  position: relative;\\n}\\n\\n.input-icon {\\n  position: absolute;\\n  font-size: 18px;\\n  color: #999;\\n  right: 18px;\\n  top: 50%;\\n  -webkit-transform: translateY(-50%);\\n  -moz-transform: translateY(-50%);\\n  -ms-transform: translateY(-50%);\\n  -o-transform: translateY(-50%);\\n  transform: translateY(-50%);\\n  cursor: pointer;\\n}\\n\\n/* ==========================================================================\\n     #TITLE\\n     ========================================================================== */\\n.title {\\n  font-size: 24px;\\n  color: #525252;\\n  font-weight: 400;\\n  margin-bottom: 40px;\\n}\\n\\n/* ==========================================================================\\n     #CARD\\n     ========================================================================== */\\n.card {\\n  -webkit-border-radius: 3px;\\n  -moz-border-radius: 3px;\\n  border-radius: 3px;\\n  background: #fff;\\n}\\n\\n.card-4 {\\n  background: #fff;\\n  -webkit-border-radius: 10px;\\n  -moz-border-radius: 10px;\\n  border-radius: 10px;\\n  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\\n  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\\n}\\n\\n.card-4 .card-body {\\n  padding: 57px 65px;\\n  padding-bottom: 65px;\\n}\\n\\n@media (max-width: 767px) {\\n  .card-4 .card-body {\\n    padding: 50px 40px;\\n  }\\n}\\n\\n/* ==========================================================================\\n     #Telephone number hide arrows\\n     ========================================================================== */\\n\\n/* Chrome, Safari, Edge, Opera */\\ninput::-webkit-outer-spin-button,\\ninput::-webkit-inner-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0;\\n}\\n\\n/* Firefox */\\ninput[type=\\\"number\\\"] {\\n  -moz-appearance: textfield;\\n}\\n\\n.change-password-button {\\n  background-color: #3f51b5;\\n  border-color: #3f51b5;\\n}\\n\\n.change-password-button:focus,\\n.change-password-button:active,\\n.change-password-button:hover {\\n  background-color: #404e9e;\\n  outline: none !important;\\n  box-shadow: none !important;\\n}\\n\\n/*---------------------------------Profile Pic Start---------------------------------------*/\\n.picture-container {\\n  position: relative;\\n  cursor: pointer;\\n  text-align: center;\\n}\\n.picture {\\n  width: 106px;\\n  height: 106px;\\n  background-color: #999999;\\n  border: 4px solid #cccccc;\\n  color: #ffffff;\\n  border-radius: 50%;\\n  margin: 0px auto;\\n  overflow: hidden;\\n  transition: all 0.2s;\\n  -webkit-transition: all 0.2s;\\n}\\n.picture:hover {\\n  border-color: #3f51b5;\\n}\\n.content.ct-wizard-green .picture:hover {\\n  border-color: #05ae0e;\\n}\\n.content.ct-wizard-blue .picture:hover {\\n  border-color: #3f51b5;\\n}\\n.content.ct-wizard-orange .picture:hover {\\n  border-color: #ff9500;\\n}\\n.content.ct-wizard-red .picture:hover {\\n  border-color: #ff3b30;\\n}\\n.picture input[type=\\\"file\\\"] {\\n  cursor: pointer;\\n  display: block;\\n  height: 100%;\\n  left: 0;\\n  opacity: 0 !important;\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n}\\n\\n.picture-src {\\n  width: 100%;\\n}\\n/*-----------------------------------------------Profile Pic End------------------------------------------*/\\n\\n/*--------------------------------------------------------- styles for NewAppointment.js------------------------------------------------------------------*/\\n\\n.backgroundContainer {\\n  background-color: #fff;\\n}\\n\\n.search-results {\\n  font-size: 14px;\\n  margin: 0 auto;\\n  justify-content: space-around;\\n  margin-top: 15px;\\n  margin-bottom: 15px;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}\\n\\n.search-results-card {\\n  max-width: 850px;\\n  display: flex;\\n  margin: 0 auto;\\n  margin-top: 20px;\\n  margin-bottom: 10px;\\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\\n}\\n\\n.search-results-hr {\\n  width: 850px;\\n}\\n\\n.card-data {\\n  padding: 0px 20px;\\n}\\n\\n.book-btn {\\n  width: 100px !important;\\n  padding: 7px 20px !important;\\n}\\n\\n@media (max-width: 767px) {\\n  .search-results {\\n    font-size: 11px;\\n  }\\n  .search-results-card {\\n    min-width: 98%;\\n    max-width: 98%;\\n  }\\n  .search-results-hr {\\n    width: 75%;\\n  }\\n  .card-data {\\n    width: 65px;\\n    padding: 0px 0px;\\n  }\\n\\n  .book-btn {\\n    padding-top: 3px !important;\\n    padding-bottom: 3px !important;\\n  }\\n\\n  .book-btn-div {\\n    padding-top: 12px !important;\\n  }\\n}\\n\\n.book-btn-disabled {\\n  pointer-events: none !important;\\n}\\n\\n.glowing {\\n  animation: glow 1s infinite alternate;\\n}\\n\\n@keyframes glow {\\n  from {\\n    box-shadow: 0 0 10px -10px #5b9ed4;\\n  }\\n  to {\\n    box-shadow: 0 0 10px 10px #5b9ed4;\\n  }\\n}\\n\\n.card-columns {\\n  columns: 2 auto !important;\\n}\\n\\n/*--------------------------------------------------------- styles for UpcomingAppointments.js------------------------------------------------------------------*/\\n\\n.number-pending-appointment-card {\\n  width: 610px;\\n  margin: 0 auto;\\n}\\n\\n.pending-appointment-card {\\n  width: 610px;\\n  margin: 0 auto;\\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\\n}\\n\\n.pending-appointment-card-text {\\n  font-size: 13px;\\n}\\n\\n.changeDates-cancel-buttons {\\n  text-align: right;\\n}\\n\\n.patient-detail-label-div {\\n  margin: 0 auto;\\n  padding-left: 408px;\\n}\\n\\n.patient-detail-label {\\n  width: 200px;\\n  margin: 0 auto;\\n  border-style: none;\\n  border-radius: 0;\\n  font-size: 11px;\\n  padding-right: 8px;\\n}\\n\\n@media (max-width: 767px) {\\n  .pending-appointment-card {\\n    width: 97%;\\n  }\\n  .number-pending-appointment-card {\\n    width: 97%;\\n  }\\n  .changeDates-cancel-buttons {\\n    text-align: center;\\n  }\\n  .patient-detail-label-div {\\n    margin: 0 auto;\\n    padding-left: 43%;\\n  }\\n}\\n\\n@media (width: 320px) {\\n  /*------iPhone 5S, SE------*/\\n  .patient-detail-label-div {\\n    margin: 0 auto;\\n    padding-left: 34%;\\n  }\\n}\\n\\n@media (width: 414px) {\\n  /*------iPhone 6/7/8 PLUS------*/\\n  .patient-detail-label-div {\\n    margin: 0 auto;\\n    padding-left: 49%;\\n  }\\n}\\n\\n/*--------------------------------------------------------- styles for TreatmentDetails.js------------------------------------------------------------------*/\\n\\n.watermark::after {\\n  content: \\\"\\\";\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\n  background-size: 420px 276px;\\n  background-position: center;\\n  opacity: 0.035;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  position: absolute;\\n  z-index: 1;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n/*--------------------------------------------------------- styles for PatientOverview.js------------------------------------------------------------------*/\\n\\n.overview-appointment-count-patient {\\n  font: small-caps lighter 43px/150% \\\"Segoe UI\\\", Frutiger, \\\"Frutiger Linotype\\\",\\n    \\\"Dejavu Sans\\\", \\\"Helvetica Neue\\\", Arial, sans-serif;\\n  font-size: 20px;\\n  background-color: black !important;\\n  color: white;\\n  margin: 0 auto;\\n  width: 600px;\\n  text-align: center;\\n  opacity: 0.7;\\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\\n}\\n\\n.overview-notifications-patient {\\n  font: small-caps lighter 43px/150% \\\"Segoe UI\\\", Frutiger, \\\"Frutiger Linotype\\\",\\n    \\\"Dejavu Sans\\\", \\\"Helvetica Neue\\\", Arial, sans-serif;\\n  font-size: 20px;\\n\\n  margin: 0 auto;\\n  width: 800px;\\n\\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\\n  background: linear-gradient(\\n    90deg,\\n    rgba(65, 130, 129, 1) 6%,\\n    rgba(148, 187, 233, 1) 100%,\\n    rgba(0, 212, 255, 1) 100%\\n  );\\n\\n  font-size: 15px;\\n}\\n\\n.slider-container-patient {\\n  width: 1200px;\\n  height: 460px;\\n  margin: 30px auto 0;\\n  margin-top: 0px;\\n  position: relative;\\n  text-align: center;\\n  overflow: hidden;\\n\\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\\n  /*background-color: rgba(0, 0, 0, 0.6);*/\\n}\\n\\n.image-container-patient {\\n  width: 3600px;\\n  height: 600px;\\n  clear: both;\\n  position: absolute;\\n  animation-name: slider;\\n  animation-duration: 12s;\\n  animation-timing-function: ease-in-out;\\n  animation-delay: 2s;\\n  animation-iteration-count: infinite;\\n  animation-direction: normal;\\n  animation-fill-mode: backwards;\\n  animation-play-state: running;\\n\\n  opacity: 0.6;\\n}\\n\\n.slider-image-patient {\\n  width: 1200px;\\n  height: 600px;\\n  float: left;\\n  position: relative;\\n}\\n\\n@keyframes slider {\\n  0% {\\n    transform: translate(0, 0);\\n  }\\n  50% {\\n    transform: translate(-1200px, 0);\\n  }\\n  100% {\\n    transform: translate(-2400px, 0);\\n  }\\n}\\n\\n.overview-basic-info-patient {\\n  position: absolute;\\n  left: 50%;\\n  top: 75%;\\n  -webkit-transform: translate(-50%, -50%);\\n  -moz-transform: translate(-50%, -50%);\\n  transform: translate(-50%, -50%);\\n}\\n\\n.services-card-patient {\\n  position: relative;\\n  margin-top: 30px;\\n  width: 180px;\\n  height: 200px;\\n  background: white;\\n  /*background: #000*/\\n  clear: both;\\n}\\n.services-card-patient .image {\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  opacity: 0.84;\\n}\\n.services-card-patient .image img {\\n  width: 100%;\\n  transition: 0.5s;\\n}\\n.services-card-patient:hover .image img {\\n  opacity: 0.5;\\n  transform: translateX(30%); /*100%*/\\n}\\n.services-card-patient .details {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 70%; /*100%*/\\n  height: 100%;\\n  /*background: #ffc107;*/\\n  background: black;\\n  transition: 0.5s;\\n  transform-origin: left;\\n  transform: perspective(2000px) rotateY(-90deg);\\n}\\n.services-card-patient:hover .details {\\n  transform: perspective(2000px) rotateY(0deg);\\n}\\n.services-card-patient .details .center {\\n  padding: 20px;\\n  text-align: center;\\n  background: #fff;\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n.services-card-patient .details .center h1 {\\n  margin: 0;\\n  padding: 0;\\n  color: #ff3636;\\n  line-height: 20px;\\n  font-size: 8px;\\n  text-transform: uppercase;\\n}\\n.services-card-patient .details .center h1 span {\\n  font-size: 8px;\\n  color: #262626;\\n}\\n.services-card-patient .details .center p {\\n  padding: 0;\\n  color: #262626;\\n}\\n\\n.services-wrap-patient {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.services-wrap-patient div {\\n  float: left;\\n}\\n\\n#services-wrap-patient:after {\\n  display: block;\\n  height: 0px;\\n  clear: both;\\n  float: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hospital_reservation_app/./frontend/src/components/patientMode/css/patientMode.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./frontend/src/components/doctorMode/images/doctorImages/profilePictureMale.jpg":
/*!***************************************************************************************!*\
  !*** ./frontend/src/components/doctorMode/images/doctorImages/profilePictureMale.jpg ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9024f1e89bc87dde14b116836abcc591.jpg\");\n\n//# sourceURL=webpack://hospital_reservation_app/./frontend/src/components/doctorMode/images/doctorImages/profilePictureMale.jpg?");

/***/ }),

/***/ "./frontend/src/components/patientMode/css/patientMode.css":
/*!*****************************************************************!*\
  !*** ./frontend/src/components/patientMode/css/patientMode.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./patientMode.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/patientMode/css/patientMode.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!./patientMode.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/patientMode/css/patientMode.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./patientMode.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/patientMode/css/patientMode.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_patientMode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://hospital_reservation_app/./frontend/src/components/patientMode/css/patientMode.css?");

/***/ })

}]);