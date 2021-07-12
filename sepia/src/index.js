import "systemjs-webpack-interop/auto-public-path";

const pkg = import('../pkg');
import sepiaIcon from '../assets/sepia.svg';

export const processor = pkg;
export const name = () => "sepia";
export const description = () => "Toning images in sepia colors.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return {};
};
export const icon = () => {
  return sepiaIcon;
}
