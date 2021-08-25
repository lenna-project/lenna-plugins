"use strict";
(self["webpackChunk_lenna_project_exif"] = self["webpackChunk_lenna_project_exif"] || []).push([[981],{

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Widget)
});

// EXTERNAL MODULE: consume shared module (default) vue@^3.2.6 (strict) (fallback: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js)
var runtime_dom_esm_bundler_js_ = __webpack_require__(855);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Widget.vue?vue&type=template&id=32e66a3a&scoped=true


(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-32e66a3a")
const _hoisted_1 = { class: "plugin-config" }
const _hoisted_2 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.createElementVNode)("label", { for: "clear" }, "clear exif data", -1)
const _hoisted_3 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.createElementVNode)("br", null, null, -1)
const _hoisted_4 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.createElementVNode)("br", null, null, -1)
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createElementBlock)("div", _hoisted_1, [
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createElementVNode)("input", {
      type: "checkbox",
      id: "clear",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (_ctx.clear = $event)),
      onChange: _cache[1] || (_cache[1] = $event => (_ctx.updateConfig()))
    }, null, 544), [
      [runtime_dom_esm_bundler_js_.vModelCheckbox, _ctx.clear]
    ]),
    _hoisted_2,
    _hoisted_3,
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (_ctx.author = $event)),
      placeholder: "author"
    }, null, 512), [
      [runtime_dom_esm_bundler_js_.vModelText, _ctx.author]
    ]),
    _hoisted_4,
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.description = $event)),
      placeholder: "description"
    }, null, 512), [
      [runtime_dom_esm_bundler_js_.vModelText, _ctx.description]
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=32e66a3a&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Widget.vue?vue&type=script&lang=js


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
 
;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-32e66a3a"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=981.js.map