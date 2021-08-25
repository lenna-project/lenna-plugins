"use strict";
(self["webpackChunk_lenna_project_rotate"] = self["webpackChunk_lenna_project_rotate"] || []).push([[124],{

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.2.6 (strict) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js)
var runtime_dom_esm_bundler_js_ = __webpack_require__(855);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Widget.vue?vue&type=template&id=e2e01304&scoped=true


(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-e2e01304")
const _hoisted_1 = { class: "plugin-config" }
const _hoisted_2 = { id: "v-model-select-dynamic" }
const _hoisted_3 = ["value"]
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createElementBlock)("div", _hoisted_1, [
    (0,runtime_dom_esm_bundler_js_.createElementVNode)("div", _hoisted_2, [
      (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (_ctx.selected = $event)),
        onChange: _cache[1] || (_cache[1] = $event => (_ctx.updateConfig()))
      }, [
        ((0,runtime_dom_esm_bundler_js_.openBlock)(true), (0,runtime_dom_esm_bundler_js_.createElementBlock)(runtime_dom_esm_bundler_js_.Fragment, null, (0,runtime_dom_esm_bundler_js_.renderList)(_ctx.options, (option) => {
          return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createElementBlock)("option", {
            value: option.value,
            key: option.text
          }, (0,runtime_dom_esm_bundler_js_.toDisplayString)(option.text) + " Clockwise ", 9, _hoisted_3))
        }), 128))
      ], 544), [
        [runtime_dom_esm_bundler_js_.vModelSelect, _ctx.selected]
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=e2e01304&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "RotateWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      selected: "90",
      options: [
        { text: "90°", value: "90" },
        { text: "180°", value: "180" },
        { text: "270°", value: "270" },
      ],
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        theta: 0.0,
      };
      if (this.selected === "90") {
        config.theta = 90.0;
      } else if (this.selected === "180") {
        config.theta = 180.0;
      } else if (this.selected === "270") {
        config.theta = 270.0;
      }
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
Widgetvue_type_script_lang_js.__scopeId = "data-v-e2e01304"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=124.js.map