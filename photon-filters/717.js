(self["webpackChunk_lenna_project_photon_filters"] = self["webpackChunk_lenna_project_photon_filters"] || []).push([[717],{

/***/ 833:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.2.6 (strict) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js)
var runtime_dom_esm_bundler_js_ = __webpack_require__(855);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=7e18df90&scoped=true


(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-7e18df90")
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
          }, (0,runtime_dom_esm_bundler_js_.toDisplayString)(option.text), 9, _hoisted_3))
        }), 128))
      ], 544), [
        [runtime_dom_esm_bundler_js_.vModelSelect, _ctx.selected]
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=7e18df90&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "PhotonFiltersWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      selected: "dramatic",
      options: [
        { text: "oceanic", value: "oceanic" },
        { text: "islands", value: "islands" },
        { text: "marine", value: "marine" },
        { text: "seagreen", value: "seagreen" },
        { text: "flagblue", value: "flagblue" },
        { text: "diamante", value: "diamante" },
        { text: "liquid", value: "liquid" },
        { text: "radio", value: "radio" },
        { text: "twenties", value: "twenties" },
        { text: "rosetint", value: "rosetint" },
        { text: "mauve", value: "mauve" },
        { text: "bluechrome", value: "bluechrome" },
        { text: "vintage", value: "vintage" },
        { text: "perfume", value: "perfume" },
        { text: "serenity", value: "serenity" },
        { text: "golden", value: "golden" },
        { text: "pastel_pink", value: "pastel_pink" },
        { text: "cali", value: "cali" },
        { text: "dramatic", value: "dramatic" },
        { text: "firenze", value: "firenze" },
        { text: "obsidian", value: "obsidian" },
        { text: "lofi", value: "lofi" }
      ],
    };
  },
  methods: {
    async updateConfig() {
      const config = {
        filter: this.selected,
      };
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.selected = this.defaultConfig.filter;
    this.updateConfig();
  }
}));

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=style&index=0&id=7e18df90&scoped=true&lang=css
var Widgetvue_type_style_index_0_id_7e18df90_scoped_true_lang_css = __webpack_require__(833);
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=style&index=0&id=7e18df90&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-7e18df90"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=717.js.map