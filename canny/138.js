"use strict";
(self["webpackChunk_lenna_project_canny"] = self["webpackChunk_lenna_project_canny"] || []).push([[138,280],{

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2OS42MiA2OS41NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkZDY1NjQ7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgaWQ9IkxheWVyXzItMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMS0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Mi4yNywwSDY2LjYyYzIuMTYsMCwzLC44NywzLDMuMDdWMTcuNDVjMCwyLjI0LS43OCwzLTMsM0gyMS44OWMtMS4xNywwLTEuNDYuMy0xLjQ2LDEuNDVxLjA2LDIyLjIzLDAsNDQuNDVjMCwyLjUyLS42OCwzLjIxLTMuMTcsMy4yMUgzYy0yLjI2LDAtMy0uNzgtMy0zVjE5QTE4LjUxLDE4LjUxLDAsMCwxLDEyLjMzLDEuMSwxNy41OCwxNy41OCwwLDAsMSwxOC42NCwwQzI2LjUyLDAsMzQuNDIsMCw0Mi4yNywwWiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=");

/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.2.6 (strict) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js)
var runtime_dom_esm_bundler_js_ = __webpack_require__(855);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=42c45143&scoped=true


(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-42c45143")
const _hoisted_1 = {
  key: 0,
  class: "plugin-config"
}
const _hoisted_2 = ["placeholder", "onUpdate:modelValue"]
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.config)
    ? ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createElementBlock)("div", _hoisted_1, [
        ((0,runtime_dom_esm_bundler_js_.openBlock)(true), (0,runtime_dom_esm_bundler_js_.createElementBlock)(runtime_dom_esm_bundler_js_.Fragment, null, (0,runtime_dom_esm_bundler_js_.renderList)(_ctx.config, (c) => {
          return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createElementBlock)("div", {
            key: c.key
          }, [
            (0,runtime_dom_esm_bundler_js_.createElementVNode)("div", null, [
              (0,runtime_dom_esm_bundler_js_.createElementVNode)("label", null, (0,runtime_dom_esm_bundler_js_.toDisplayString)(c.key), 1),
              (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createElementVNode)("input", {
                type: "number",
                placeholder: c.key,
                "onUpdate:modelValue": $event => (c.value = $event),
                onChange: _cache[0] || (_cache[0] = $event => (_ctx.updateConfig()))
              }, null, 40, _hoisted_2), [
                [
                  runtime_dom_esm_bundler_js_.vModelText,
                  c.value,
                  void 0,
                  { number: true }
                ]
              ])
            ])
          ]))
        }), 128))
      ]))
    : (0,runtime_dom_esm_bundler_js_.createCommentVNode)("", true)
}
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=42c45143&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "CannyWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      config: [],
    };
  },
  methods: {
    async updateConfig() {
      let config = {};
      for (let c of this.config) {
        config[c.key] = c.value;
      }
      this.$emit("changeConfig", config);
    },
  },
  created() {
    for (let key in this.defaultConfig) {
      let config = { key: key, value: this.defaultConfig[key] };
      this.config.push(config);
    }
    this.updateConfig();
  },
}));

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-42c45143"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processor": () => (/* binding */ processor),
/* harmony export */   "ui": () => (/* binding */ ui),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "process": () => (/* binding */ process),
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig),
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var _assets_canny_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(288);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
const pkg = __webpack_require__.e(/* import() */ 915).then(__webpack_require__.bind(__webpack_require__, 915))
const processor = pkg;



const ui = _Widget__WEBPACK_IMPORTED_MODULE_0__.default;
const name = () => "canny";
const description = () => "Detects edges in images.";
const process = async (config, image) => {
  return __webpack_require__.e(/* import() */ 915).then(__webpack_require__.bind(__webpack_require__, 915)).then(processor => processor.process(config, image));
};
const defaultConfig = async () => {
  return { high: 100, low: 50 };
};
const icon = () => {
  return _assets_canny_svg__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z;
}


/***/ })

}]);
//# sourceMappingURL=138.js.map