const pkg = import("../pkg");
export const processor = pkg;

export const name = () => "cartoonify";
export const description = () => "Plugin to create a cartoon style.";
export const process = async (config, image) => {
  return import("../pkg").then((processor) => processor.process(config, image));
};
export const defaultConfig = async () => {
  return { };
};
