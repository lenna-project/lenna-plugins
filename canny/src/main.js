import App from "./App.vue";
const canny = import("canny");

export const processor = canny;
export const ui = App;
export const name = () => "canny";
export const description = () => "Plugin to create canny edges.";
export const process = async (config, image) => {
  console.log(config);
  return canny.then(processor => processor.process(image));
};
export const defaultConfig = async () => {
  return import("canny").then(mod => mod.defaultConfig());
};
