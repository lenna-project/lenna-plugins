import "systemjs-webpack-interop/auto-public-path";

const pkg = import('../pkg')
export const processor = pkg;
export const name = () => "resize";
export const description = () => "Plugin to resize image.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return pkg.then(mod => mod.defaultConfig());
};
