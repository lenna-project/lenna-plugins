"use strict";
(self["webpackChunk_lenna_project_exif_thumbnail"] = self["webpackChunk_lenna_project_exif_thumbnail"] || []).push([[138,418],{

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ny4yNiA1OS45OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkYzY0NjM7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgaWQ9IkxheWVyXzItMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMS0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zOC42NSwwaDMzLjFjMy42LDAsNS41LDEuOTIsNS41LDUuNTN2NDlhNS4yNCw1LjI0LDAsMCwxLTUsNS40NmgtLjMyUTM4LjQ3LDU5LjkzLDUsNjBhNS4xNSw1LjE1LDAsMCwxLTUtNS4yOHYwQy4wNyw0NC4xNCwwLDMzLjYsMCwyMy4wNlY1LjM0QTUuMTUsNS4xNSwwLDAsMSwyLjU1LjUzYTMuOCwzLjgsMCwwLDEsMi0uNTFoMzQuMVpNNSwzOWMuNDUsMCwuNjYtLjM5LjkxLS42OSwzLTMuNDgsNS44OC03LDguODUtMTAuNDMsMi41OC0zLDUuMjMtNS45NSw3Ljc5LTksMS44Ny0yLjE5LDQuNC0yLjIxLDYuMjIsMEMzMi4xNSwyMi45NCwzNS41NSwyNywzOC45MywzMWMyLjcyLDMuMjUsNS40NCw2LjUsOC4xMyw5Ljc3LjUyLjY0LjgzLjcyLDEuNDcuMDcsMy0zLDYuMDYtNiw5LjEyLTlhMy40NSwzLjQ1LDAsMCwxLDQuODgtLjE4bC4xMi4xMmMyLjgsMi41Myw1LjU3LDUuMDgsOC4zNiw3LjYyLjMyLjI5LjY3Ljc1LDEuMDkuNjFzLjI3LS43Ny4yNy0xLjE3VjYuMzhjMC0xLjU3LDAtMS41Ny0xLjUzLTEuNTdINi40MmMtMS41OCwwLTEuNTgsMC0xLjU4LDEuNTdWMzcuODljMCwuMzgtLjEzLjguMTgsMS4xNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01OC4yNywxMWE2LjUsNi41LDAsMCwxLDYuNjMsNi4zOXYuMTlhNi41Miw2LjUyLDAsMCwxLTYuMjQsNi43OWgtLjM5QTYuNjksNi42OSwwLDAsMSw1Ny43NiwxMVoiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+");

/***/ }),

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.2.6 (strict) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js)
var runtime_dom_esm_bundler_js_ = __webpack_require__(855);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Widget.vue?vue&type=template&id=486ac75a&scoped=true


(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-486ac75a")
const _hoisted_1 = { class: "plugin-config" }
const _hoisted_2 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.createElementVNode)("label", { for: "thumbnail" }, "add thumbnail to exif data", -1)
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createElementBlock)("div", _hoisted_1, [
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createElementVNode)("input", {
      type: "checkbox",
      id: "thumbnail",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (_ctx.clear = $event)),
      onChange: _cache[1] || (_cache[1] = $event => (_ctx.updateConfig()))
    }, null, 544), [
      [runtime_dom_esm_bundler_js_.vModelCheckbox, _ctx.clear]
    ]),
    _hoisted_2
  ]))
}
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=486ac75a&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "ExifWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      thumbnail: false,
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        thumbnail: this.thumbnail,
      };
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.updateConfig();
  },
}));

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-486ac75a"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui),
/* harmony export */   "processor": () => (/* binding */ processor),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "process": () => (/* binding */ process),
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig),
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var _assets_exif_thumbnail_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(418);
const pkg = __webpack_require__.e(/* import() */ 376).then(__webpack_require__.bind(__webpack_require__, 376));



const ui = _Widget__WEBPACK_IMPORTED_MODULE_0__.default;
const processor = pkg;
const name = () => "exif-thumbnail";
const description = () => "Updates exif thumbnail data of images.";
const process = async (config, image) => {
  return __webpack_require__.e(/* import() */ 376).then(__webpack_require__.bind(__webpack_require__, 376)).then(processor => processor.process(config, image));
};
const defaultConfig = async () => {
  return { thumbnail: false };
};
const icon = () => {
  return _assets_exif_thumbnail_svg__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z;
}


/***/ })

}]);
//# sourceMappingURL=138.js.map