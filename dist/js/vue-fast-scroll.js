(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueFastScroll", [], factory);
	else if(typeof exports === 'object')
		exports["VueFastScroll"] = factory();
	else
		root["VueFastScroll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/FastScroll.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/FastScroll.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'fastScroll',\n  props: {\n    keyList: {\n      type: Array,\n      \"default\": function _default() {\n        return [{\n          key: 'ㄱ',\n          text: 'ㄱ'\n        }, {\n          key: 'ㄴ',\n          text: 'ㄴ'\n        }, {\n          key: 'ㄷ',\n          text: 'ㄷ'\n        }, {\n          key: 'ㄹ',\n          text: 'ㄹ'\n        }, {\n          key: 'ㅁ',\n          text: 'ㅁ'\n        }, {\n          key: 'ㅂ',\n          text: 'ㅂ'\n        }, {\n          key: 'ㅅ',\n          text: 'ㅅ'\n        }, {\n          key: 'ㅇ',\n          text: 'ㅇ'\n        }, {\n          key: 'ㅈ',\n          text: 'ㅈ'\n        }, {\n          key: 'ㅊ',\n          text: 'ㅊ'\n        }, {\n          key: 'ㅋ',\n          text: 'ㅋ'\n        }, {\n          key: 'ㅌ',\n          text: 'ㅌ'\n        }, {\n          key: 'ㅍ',\n          text: 'ㅍ'\n        }, {\n          key: 'ㅎ',\n          text: 'ㅎ'\n        }];\n      }\n    }\n  },\n  data: function data() {\n    return {\n      findKey: '',\n      fastScrollToggle: false,\n      fastScrollToggleId: null,\n      fastScrollIndex: {}\n    };\n  },\n  watch: {\n    findKey: function findKey() {\n      var _this = this;\n\n      clearTimeout(this.fastScrollToggleId);\n      this.fastScrollToggle = true;\n      this.fastScrollToggleId = setTimeout(function (x) {\n        _this.fastScrollToggle = false;\n      }, 500);\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    this.$nextTick(function () {\n      _this2.setFastScrollIndex();\n    });\n  },\n  methods: {\n    scrollToSearch: function scrollToSearch(e) {\n      this.setFastScrollIndex();\n      var clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;\n\n      for (var key in this.fastScrollIndex) {\n        var value = this.fastScrollIndex[key];\n\n        if (value > clientY) {\n          this.findKey = key;\n          break;\n        }\n      }\n\n      if (this.findKey !== '') {\n        try {\n          var dom = this.$refs.fastWrapper.querySelector(\"[fast-key=\".concat(this.findKey, \"]\"));\n\n          if (dom) {\n            dom.scrollIntoView();\n          }\n        } catch (e) {\n          console.error(e);\n        }\n      }\n    },\n    setFastScrollIndex: function setFastScrollIndex() {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.keyList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n          var index = this.keyList.indexOf(item);\n          var clientReact = this.$refs.keyList.querySelector(\"[fast-scroll-index=\\\"\".concat(index, \"\\\"]\")).getBoundingClientRect();\n          this.fastScrollIndex[item.key] = clientReact.y + clientReact.height;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://VueFastScroll/./src/FastScroll.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/FastScroll.vue?vue&type=template&id=003fa282&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/FastScroll.vue?vue&type=template&id=003fa282& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { ref: \"fastWrapper\" },\n    [\n      _vm._t(\"fastScrollItems\"),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"side-indexer\" }, [\n        _c(\n          \"ul\",\n          {\n            ref: \"keyList\",\n            on: {\n              touchmove: function($event) {\n                $event.preventDefault()\n                $event.stopPropagation()\n                return _vm.scrollToSearch($event)\n              }\n            }\n          },\n          _vm._l(_vm.keyList, function(item, i) {\n            return _c(\n              \"li\",\n              {\n                key: i,\n                attrs: { \"fast-scroll-index\": i },\n                on: { click: _vm.scrollToSearch }\n              },\n              [_vm._v(_vm._s(item.text))]\n            )\n          }),\n          0\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"transition\", { attrs: { name: \"fade\" } }, [\n        _vm.fastScrollToggle\n          ? _c(\"div\", { staticClass: \"fast-scroll-toggle\" }, [\n              _vm._v(_vm._s(_vm.findKey))\n            ])\n          : _vm._e()\n      ])\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueFastScroll/./src/FastScroll.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueFastScroll/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/FastScroll.vue":
/*!****************************!*\
  !*** ./src/FastScroll.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FastScroll_vue_vue_type_template_id_003fa282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FastScroll.vue?vue&type=template&id=003fa282& */ \"./src/FastScroll.vue?vue&type=template&id=003fa282&\");\n/* harmony import */ var _FastScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FastScroll.vue?vue&type=script&lang=js& */ \"./src/FastScroll.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _FastScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FastScroll_vue_vue_type_template_id_003fa282___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _FastScroll_vue_vue_type_template_id_003fa282___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/FastScroll.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueFastScroll/./src/FastScroll.vue?");

/***/ }),

/***/ "./src/FastScroll.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/FastScroll.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FastScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./FastScroll.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/FastScroll.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FastScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueFastScroll/./src/FastScroll.vue?");

/***/ }),

/***/ "./src/FastScroll.vue?vue&type=template&id=003fa282&":
/*!***********************************************************!*\
  !*** ./src/FastScroll.vue?vue&type=template&id=003fa282& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FastScroll_vue_vue_type_template_id_003fa282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./FastScroll.vue?vue&type=template&id=003fa282& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/FastScroll.vue?vue&type=template&id=003fa282&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FastScroll_vue_vue_type_template_id_003fa282___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FastScroll_vue_vue_type_template_id_003fa282___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueFastScroll/./src/FastScroll.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony import */ var _FastScroll_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FastScroll.vue */ \"./src/FastScroll.vue\");\n\n\nvar install = function install(Vue, globalOptions) {\n  Vue.component(_FastScroll_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _FastScroll_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\nvar VueFastScroll = {\n  install: install\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VueFastScroll);\n\n\n//# sourceURL=webpack://VueFastScroll/./src/index.js?");

/***/ })

/******/ });
});