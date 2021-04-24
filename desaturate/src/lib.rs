use image::{DynamicImage, GenericImageView};
use photon_rs::{helpers::dyn_image_from_raw, monochrome, PhotonImage};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::Processor;
use lenna_core::ProcessorConfig;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Desaturate));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Desaturate;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {}

impl Default for Config {
    fn default() -> Self {
        Config {}
    }
}

impl Processor for Desaturate {
    fn name(&self) -> String {
        "desaturate".into()
    }

    fn title(&self) -> String {
        "Desaturate".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to desaturate by photon.".into()
    }

    fn process(&self, _config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let image = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut image: PhotonImage =
            PhotonImage::new(image.to_bytes(), image.width(), image.height());
        monochrome::desaturate(&mut image);
        let img = dyn_image_from_raw(&image);
        img
    }

    fn default_config(&self) -> serde_json::Value {
        serde_json::to_value(Config::default()).unwrap()
    }
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(Desaturate);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let desaturate = Desaturate::default();
        assert_eq!(desaturate.name(), "desaturate");
    }
}
