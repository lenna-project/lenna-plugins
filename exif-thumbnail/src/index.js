const pkg = import('../pkg');

import Widget from "./Widget";
export const ui = Widget;
export const processor = pkg;
export const name = () => "exif-thumbnail";
export const description = () => "Plugin to change exif thumbnail data of images.";
export const process = async (config, image) => {
  return import('../pkg').then(processor => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { thumbnail: false };
};
