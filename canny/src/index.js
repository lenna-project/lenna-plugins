const pkg = import('../pkg')
export const processor = pkg;
import cannyIcon from '../assets/canny.png';
import Widget from "./Widget";

export const ui = Widget;
export const name = () => "canny";
export const description = () => "Detects edges in images.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { high: 100, low: 50 };
};
export const icon = () => {
  return cannyIcon;
}
