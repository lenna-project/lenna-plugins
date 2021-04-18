(self["webpackChunk_lenna_project_canny"] = self["webpackChunk_lenna_project_canny"] || []).push([[138,71],{

/***/ 274:
/***/ (() => {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.0.11 (singleton) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js) (eager)
var runtime_dom_esm_bundler_js_eager_ = __webpack_require__(979);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=118711bc&scoped=true

const _withId = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_eager_.withScopeId)("data-v-118711bc")

;(0,runtime_dom_esm_bundler_js_eager_.pushScopeId)("data-v-118711bc")
const _hoisted_1 = {
  key: 0,
  class: "plugin-config"
}
const _hoisted_2 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_eager_.createVNode)("h2", null, "canny", -1)
;(0,runtime_dom_esm_bundler_js_eager_.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ($data.config)
    ? ((0,runtime_dom_esm_bundler_js_eager_.openBlock)(), (0,runtime_dom_esm_bundler_js_eager_.createBlock)("div", _hoisted_1, [
        ((0,runtime_dom_esm_bundler_js_eager_.openBlock)(true), (0,runtime_dom_esm_bundler_js_eager_.createBlock)(runtime_dom_esm_bundler_js_eager_.Fragment, null, (0,runtime_dom_esm_bundler_js_eager_.renderList)($data.config, (c) => {
          return ((0,runtime_dom_esm_bundler_js_eager_.openBlock)(), (0,runtime_dom_esm_bundler_js_eager_.createBlock)("div", {
            key: c.key
          }, [
            _hoisted_2,
            (0,runtime_dom_esm_bundler_js_eager_.createVNode)("div", null, [
              (0,runtime_dom_esm_bundler_js_eager_.createVNode)("label", null, (0,runtime_dom_esm_bundler_js_eager_.toDisplayString)(c.key) + ": ", 1),
              (0,runtime_dom_esm_bundler_js_eager_.withDirectives)((0,runtime_dom_esm_bundler_js_eager_.createVNode)("input", {
                type: "number",
                placeholder: c.key,
                "onUpdate:modelValue": $event => (c.value = $event),
                onChange: _cache[1] || (_cache[1] = $event => ($options.updateConfig()))
              }, null, 40, ["placeholder", "onUpdate:modelValue"]), [
                [
                  runtime_dom_esm_bundler_js_eager_.vModelText,
                  c.value,
                  void 0,
                  { number: true }
                ]
              ])
            ])
          ]))
        }), 128))
      ]))
    : (0,runtime_dom_esm_bundler_js_eager_.createCommentVNode)("", true)
})
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=118711bc&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=script&lang=js

/* harmony default export */ const Widgetvue_type_script_lang_js = ({
  name: "CannyConfig",
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
      console.log(config);
      this.$emit("changeConfig", config);
    },
  },
  created() {
    console.log('created', this.defaultConfig, this.config)
    for (let key in this.defaultConfig) {
      let config = { key: key, value: this.defaultConfig[key] };
      this.config.push(config);
    }
    this.updateConfig();
  },
});

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=style&index=0&id=118711bc&scoped=true&lang=css
var Widgetvue_type_style_index_0_id_118711bc_scoped_true_lang_css = __webpack_require__(274);
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=style&index=0&id=118711bc&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-118711bc"

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
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig)
/* harmony export */ });
/* harmony import */ var _Widget_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
const pkg = __webpack_require__.e(/* import() */ 915).then(__webpack_require__.bind(__webpack_require__, 915))
const processor = pkg;


const ui = _Widget_vue__WEBPACK_IMPORTED_MODULE_0__.default;
const name = () => "canny";
const description = () => "Plugin to create canny edges.";
const process = async (config, image) => {
  return __webpack_require__.e(/* import() */ 915).then(__webpack_require__.bind(__webpack_require__, 915)).then(processor => processor.process(config, image));
};
const defaultConfig = async () => {
  return { high: 100, low: 50 };
};


/***/ })

}]);
//# sourceMappingURL=138.js.map