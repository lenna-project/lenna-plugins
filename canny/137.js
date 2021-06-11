(self["webpackChunk_lenna_project_canny"] = self["webpackChunk_lenna_project_canny"] || []).push([[137,280],{

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

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "defaultConfig": () => (/* binding */ defaultConfig),
  "description": () => (/* binding */ description),
  "icon": () => (/* binding */ icon),
  "name": () => (/* binding */ src_name),
  "process": () => (/* binding */ process),
  "processor": () => (/* binding */ processor),
  "ui": () => (/* binding */ ui)
});

;// CONCATENATED MODULE: ./assets/canny.png
/* harmony default export */ const canny = (__webpack_require__.p + "51c46403f8b0f89d9fc7127f7e2c98ea.png");
// EXTERNAL MODULE: ./src/Widget.vue + 4 modules
var Widget = __webpack_require__(280);
;// CONCATENATED MODULE: ./src/index.js
const pkg = __webpack_require__.e(/* import() */ 915).then(__webpack_require__.bind(__webpack_require__, 915))
const processor = pkg;



const ui = Widget.default;
const src_name = () => "canny";
const description = () => "Detects edges in images.";
const process = async (config, image) => {
  return __webpack_require__.e(/* import() */ 915).then(__webpack_require__.bind(__webpack_require__, 915)).then(processor => processor.process(config, image));
};
const defaultConfig = async () => {
  return { high: 100, low: 50 };
};
const icon = () => {
  return canny;
}


/***/ })

}]);
//# sourceMappingURL=137.js.map