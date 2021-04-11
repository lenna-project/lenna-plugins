import "systemjs-webpack-interop/auto-public-path";

const pkg = import('../pkg')
export const processor = pkg;

import App from "./App.vue";
export const ui = App;
export const name = () => "canny";
export const description = () => "Plugin to create canny edges.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { high: 100, low: 50 };
};
