(self["webpackChunk_lenna_project_exif_thumbnail"] = self["webpackChunk_lenna_project_exif_thumbnail"] || []).push([[138,787],{

/***/ 904:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 787:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=template&id=486ac75a&scoped=true

const _withId = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.withScopeId)("data-v-486ac75a")

;(0,runtime_dom_esm_bundler_js_.pushScopeId)("data-v-486ac75a")
const _hoisted_1 = { class: "plugin-config" }
const _hoisted_2 = /*#__PURE__*/(0,runtime_dom_esm_bundler_js_.createVNode)("label", { for: "thumbnail" }, "add thumbnail to exif data", -1)
;(0,runtime_dom_esm_bundler_js_.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,runtime_dom_esm_bundler_js_.openBlock)(), (0,runtime_dom_esm_bundler_js_.createBlock)("div", _hoisted_1, [
    (0,runtime_dom_esm_bundler_js_.withDirectives)((0,runtime_dom_esm_bundler_js_.createVNode)("input", {
      type: "checkbox",
      id: "thumbnail",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.clear = $event)),
      onChange: _cache[2] || (_cache[2] = $event => (_ctx.updateConfig()))
    }, null, 544), [
      [runtime_dom_esm_bundler_js_.vModelCheckbox, _ctx.clear]
    ]),
    _hoisted_2
  ]))
})
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=template&id=486ac75a&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=script&lang=js


/* harmony default export */ const Widgetvue_type_script_lang_js = ((0,runtime_dom_esm_bundler_js_.defineComponent)({
  name: "ExifWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      thumbnail: false,
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        thumbnail: this.thumbnail,
      };
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.updateConfig();
  },
}));

;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Widget.vue?vue&type=style&index=0&id=486ac75a&scoped=true&lang=css
var Widgetvue_type_style_index_0_id_486ac75a_scoped_true_lang_css = __webpack_require__(904);
;// CONCATENATED MODULE: ./src/Widget.vue?vue&type=style&index=0&id=486ac75a&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/Widget.vue




;
Widgetvue_type_script_lang_js.render = render
Widgetvue_type_script_lang_js.__scopeId = "data-v-486ac75a"

/* harmony default export */ const Widget = (Widgetvue_type_script_lang_js);

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui),
/* harmony export */   "processor": () => (/* binding */ processor),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "process": () => (/* binding */ process),
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig)
/* harmony export */ });
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
const pkg = __webpack_require__.e(/* import() */ 376).then(__webpack_require__.bind(__webpack_require__, 376));


const ui = _Widget__WEBPACK_IMPORTED_MODULE_0__.default;
const processor = pkg;
const name = () => "exif-thumbnail";
const description = () => "Plugin to change exif thumbnail data of images.";
const process = async (config, image) => {
  return __webpack_require__.e(/* import() */ 376).then(__webpack_require__.bind(__webpack_require__, 376)).then(processor => processor.process(config, image));
};
const defaultConfig = async () => {
  return { thumbnail: false };
};


/***/ })

}]);
//# sourceMappingURL=138.js.map