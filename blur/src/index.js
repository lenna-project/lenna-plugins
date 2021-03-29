import "systemjs-webpack-interop/auto-public-path";

const pkg = import('../pkg')
export const processor = pkg;
export const name = () => "blur";
export const description = () => "Plugin to blur image.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(image));
};
export const defaultConfig = async () => {
  return { sigma: 1.5 };
};
