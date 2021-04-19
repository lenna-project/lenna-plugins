(self["webpackChunk_lenna_project_canny"] = self["webpackChunk_lenna_project_canny"] || []).push([[837],{

/***/ 988:
/***/ (() => {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 837:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=c1eab2de&scoped=true

const _withId = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.withScopeId)("data-v-c1eab2de")

;(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-c1eab2de")
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
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=c1eab2de&scoped=true

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
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=style&index=0&id=c1eab2de&scoped=true&lang=css
var Widgetvue_type_style_index_0_id_c1eab2de_scoped_true_lang_css = __webpack_require__(988);
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=style&index=0&id=c1eab2de&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-c1eab2de"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=837.js.map