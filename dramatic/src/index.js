import "systemjs-webpack-interop/auto-public-path";

const pkg = import('../pkg');
import dramaticIcon from '../assets/dramatic.png';

export const processor = pkg;
export const name = () => "dramatic";
export const description = () => "Gives images a dramatic style.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return {};
};
export const icon = () => {
  return dramaticIcon;
}
