"use strict";
(self["webpackChunk_lenna_project_canny"] = self["webpackChunk_lenna_project_canny"] || []).push([[280],{

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

/***/ })

}]);
//# sourceMappingURL=280.js.map