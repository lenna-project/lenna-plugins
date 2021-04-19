const pkg = import("../pkg");
export const processor = pkg;

import Widget from "./Widget";
export const ui = Widget;
export const name = () => "photon-filters";
export const description = () => "Plugin for multiple filters by photon.";
export const process = async (config, image) => {
  return import("../pkg").then((processor) => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { filters: "dramatic" };
};
