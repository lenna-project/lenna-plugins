(self["webpackChunk_lenna_project_exif"] = self["webpackChunk_lenna_project_exif"] || []).push([[156],{

/***/ 187:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 156:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=4e603578&scoped=true

const _withId = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.withScopeId)("data-v-4e603578")

;(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-4e603578")
const _hoisted_1 = { class: "plugin-config" }
const _hoisted_2 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.createVNode)("label", { for: "clear" }, "clear exif data", -1)
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createBlock)("div", _hoisted_1, [
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createVNode)("input", {
      type: "checkbox",
      id: "clear",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.clear = $event)),
      onChange: _cache[2] || (_cache[2] = $event => (_ctx.updateConfig()))
    }, null, 544), [
      [runtime_dom_esm_bundler_js_.vModelCheckbox, _ctx.clear]
    ]),
    _hoisted_2
  ]))
})
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=4e603578&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "ExifWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      clear: false,
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        clear: this.clear,
      };
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.updateConfig();
  },
}));

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=style&index=0&id=4e603578&scoped=true&lang=css
var Widgetvue_type_style_index_0_id_4e603578_scoped_true_lang_css = __webpack_require__(187);
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=style&index=0&id=4e603578&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-4e603578"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=156.js.map