const pkg = import("../pkg");
import rotateIcon from "../assets/rotate.png";

import Widget from "./Widget";
export const ui = Widget;
export const processor = pkg;
export const name = () => "rotate";
export const description = () => "Plugin to rotate image.";
export const process = async (config, image) => {
  return import("../pkg").then((processor) => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { theta: 90.0 };
};
export const icon = () => {
  return rotateIcon;
};
