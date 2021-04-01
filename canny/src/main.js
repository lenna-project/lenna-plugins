import App from "./App.vue";
const canny = import("canny");

export const processor = canny;
export const ui = App;
export const name = () => "canny";
export const description = () => "Plugin to create canny edges.";
export const process = async (config, image) => {
  return canny.then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return import("canny").then(mod => mod.defaultConfig());
};
