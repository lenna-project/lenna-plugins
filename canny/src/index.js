const pkg = import('../pkg')
export const processor = pkg;

import Widget from "./Widget";
export const ui = Widget;
export const name = () => "canny";
export const description = () => "Plugin to create canny edges.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { high: 100, low: 50 };
};
