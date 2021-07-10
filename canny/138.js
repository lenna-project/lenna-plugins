(self["webpackChunk_lenna_project_canny"] = self["webpackChunk_lenna_project_canny"] || []).push([[138,280],{

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 222.96 219.84\"><defs><style>.cls-1{fill:#fefefe;}.cls-2{fill:#dd6564;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M111.48,219.82q-55.19,0-110.38,0c-.9,0-1.1-.2-1.1-1.1Q0,109.92,0,1.1C0,.2.2,0,1.1,0Q111.49,0,221.86,0c.9,0,1.1.2,1.1,1.1q0,108.83,0,217.64c0,.9-.2,1.1-1.1,1.1Q166.68,219.8,111.48,219.82ZM43.85.56C36,.56,28.1.58,20.22.55a17.65,17.65,0,0,0-6.31,1.1A18.51,18.51,0,0,0,1.54,19.54q0,23.79,0,47.56c0,2.22.79,3,3.05,3H18.86c2.49,0,3.17-.69,3.17-3.21q0-22.23,0-44.45c0-1.15.29-1.45,1.46-1.45q22.36.06,44.73,0c2.24,0,3-.77,3-3V3.63c0-2.2-.85-3.07-3-3.07Z\"/><path class=\"cls-2\" d=\"M43.85.56H68.2c2.16,0,3,.87,3,3.07V18c0,2.24-.78,3-3,3q-22.36,0-44.73,0c-1.17,0-1.46.3-1.46,1.45q.06,22.23,0,44.45c0,2.52-.68,3.21-3.17,3.21H4.59c-2.26,0-3-.78-3-3q0-23.77,0-47.56A18.51,18.51,0,0,1,13.91,1.65,17.65,17.65,0,0,1,20.22.55C28.1.58,36,.56,43.85.56Z\"/></g></g></svg>");

/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.0.11 (strict) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js)
var runtime_dom_esm_bundler_js_ = __webpack_require__(748);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=42c45143&scoped=true

const _withId = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.withScopeId)("data-v-42c45143")

;(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-42c45143")
const _hoisted_1 = {
  key: 0,
  class: "plugin-config"
}
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (_ctx.config)
    ? ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createBlock)("div", _hoisted_1, [
        ((0,runtime_dom_esm_bundler_js_.openBlock)(true), (0,runtime_dom_esm_bundler_js_.createBlock)(runtime_dom_esm_bundler_js_.Fragment, null, (0,runtime_dom_esm_bundler_js_.renderList)(_ctx.config, (c) => {
          return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createBlock)("div", {
            key: c.key
          }, [
            (0,runtime_dom_esm_bundler_js_.createVNode)("div", null, [
              (0,runtime_dom_esm_bundler_js_.createVNode)("label", null, (0,runtime_dom_esm_bundler_js_.toDisplayString)(c.key), 1),
              (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createVNode)("input", {
                type: "number",
                placeholder: c.key,
                "onUpdate:modelValue": $event => (c.value = $event),
                onChange: _cache[1] || (_cache[1] = $event => (_ctx.updateConfig()))
              }, null, 40, ["placeholder", "onUpdate:modelValue"]), [
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
})
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

"use strict";
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
  console.log(_assets_canny_svg__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  return _assets_canny_svg__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z;
}


/***/ })

}]);
//# sourceMappingURL=138.js.map