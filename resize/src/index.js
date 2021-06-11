import 'systemjs-webpack-interop/auto-public-path';

const pkg = import('../pkg')
import resizeIcon from '../assets/resize.png';

export const processor = pkg;
export const name = () => "resize";
export const description = () => "Resizes images.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return pkg.then(mod => mod.defaultConfig());
};
export const icon = () => {
  return resizeIcon;
}