const pkg = import('../pkg');
import exifIcon from '../assets/exif.svg';
import Widget from "./Widget";

export const ui = Widget;
export const processor = pkg;
export const name = () => "exif";
export const description = () => "Manipulates exif data of images.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { clear: false };
};
export const icon = () => {
  return exifIcon;
}
