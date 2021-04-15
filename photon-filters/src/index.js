import "systemjs-webpack-interop/auto-public-path";

const pkg = import("../pkg");
export const processor = pkg;

import App from "./App.vue";
export const ui = App;
export const name = () => "photon-filters";
export const description = () => "Plugin for multiple filters by photon.";
export const process = async (config, image) => {
  return import("../pkg").then((processor) => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { filters: "dramatic" };
};
