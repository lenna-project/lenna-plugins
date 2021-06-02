(self["webpackChunk_lenna_project_exif"] = self["webpackChunk_lenna_project_exif"] || []).push([[800],{

/***/ 548:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 800:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=410b172e&scoped=true

const _withId = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.withScopeId)("data-v-410b172e")

;(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-410b172e")
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
    _hoisted_2,
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createVNode)("input", {
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.author = $event)),
      placeholder: "author"
    }, null, 512), [
      [runtime_dom_esm_bundler_js_.vModelText, _ctx.author]
    ]),
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createVNode)("input", {
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (_ctx.description = $event)),
      placeholder: "description"
    }, null, 512), [
      [runtime_dom_esm_bundler_js_.vModelText, _ctx.description]
    ])
  ]))
})
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=410b172e&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "ExifWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      clear: false,
      author: null,
      description: null,
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        clear: this.clear,
        author: this.author,
        description: this.description,
      };
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.updateConfig();
  },
}));

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=style&index=0&id=410b172e&scoped=true&lang=css
var Widgetvue_type_style_index_0_id_410b172e_scoped_true_lang_css = __webpack_require__(548);
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=style&index=0&id=410b172e&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-410b172e"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=800.js.map