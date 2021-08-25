"use strict";
(self["webpackChunk_lenna_project_rotate"] = self["webpackChunk_lenna_project_rotate"] || []).push([[138,124],{

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NS4xOCA2Mi44MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkYzY0NjM7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgaWQ9IkxheWVyXzItMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMS0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMi45LDUzLjdDNDIuNjMsNTMuMTgsNTAsNDguNTEsNTQsMzkuNTFjMy4wOS02Ljk0LDIuNTktMTQtMS4xMy0yMC43My0uMTEtLjIxLS4yNi0uNDEtLjM4LS42MS0uNDUtLjcxLS44My0uNjYtMS4xNC4xcy0uNjMsMS40Ni0uOTEsMi4yMWMtLjg2LDIuMzEtMy4wOSwxLjgyLTQuMTkuNDktMS41OS0xLjk0LTMtNC00LjUyLTYtMi0yLjY3LTMuODYtNS4zNi01Ljc5LThhNy4zOSw3LjM5LDAsMCwxLS42NC0xYy0xLTEuOTEtLjMtMy41MSwxLjc5LTRhNTEuNDEsNTEuNDEsMCwwLDEsNi42NS0uODNDNDcuMTUuNzgsNTAuNTQuNjIsNTMuOS4xNGE0Ljg0LDQuODQsMCwwLDEsMy4xNi4yOUEyLjEsMi4xLDAsMCwxLDU4LjEyLDNhMjAuMzYsMjAuMzYsMCwwLDEtMS42NywzLjksMS4xOCwxLjE4LDAsMCwwLC4xOSwxLjUyQTI5LjY5LDI5LjY5LDAsMCwxLDYzLjQ1LDIwYTMwLjM3LDMwLjM3LDAsMCwxLDEuMywxNS4yMSwzNSwzNSwwLDAsMS0zLjg2LDExLjFBMzIuNTcsMzIuNTcsMCwwLDEsNTAuNDUsNTcuNDJhMzEuODIsMzEuODIsMCwwLDEtMjAuNTcsNS4yNywzMC44NiwzMC44NiwwLDAsMS0xMS4xMy0zQTMyLjUxLDMyLjUxLDAsMCwxLDEuMDYsMzguMzIsMzEuNTcsMzEuNTcsMCwwLDEsLjUyLDI0LjUxYTMwLjU4LDMwLjU4LDAsMCwxLDQtMTAuNjgsNC43Niw0Ljc2LDAsMCwxLDYtMS40Miw0LjYzLDQuNjMsMCwwLDEsMS44OCw1Ljk0LDI4LjYsMjguNiwwLDAsMC0yLjQ3LDYuMzJBMjIuNjYsMjIuNjYsMCwwLDAsMTQsNDQuMzRDMTguNjUsNTAuNTEsMjUsNTMuNCwzMi45LDUzLjdaIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==");

/***/ }),

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

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui),
/* harmony export */   "processor": () => (/* binding */ processor),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "process": () => (/* binding */ process),
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig),
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(548);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
const pkg = __webpack_require__.e(/* import() */ 844).then(__webpack_require__.bind(__webpack_require__, 844));



const ui = _Widget__WEBPACK_IMPORTED_MODULE_0__.default;
const processor = pkg;
const name = () => "rotate";
const description = () => "Rotates images.";
const process = async (config, image) => {
  return __webpack_require__.e(/* import() */ 844).then(__webpack_require__.bind(__webpack_require__, 844)).then((processor) => processor.process(config, image));
};
const defaultConfig = async () => {
  return { theta: 90.0 };
};
const icon = () => {
  return _assets_rotate_svg__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z;
};


/***/ })

}]);
//# sourceMappingURL=138.js.map