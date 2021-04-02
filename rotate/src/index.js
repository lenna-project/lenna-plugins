import "systemjs-webpack-interop/auto-public-path";

const pkg = import('../pkg')
export const processor = pkg;
export const name = () => "rotate";
export const description = () => "Plugin to rotate image.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { theta: 0.0 };
};
