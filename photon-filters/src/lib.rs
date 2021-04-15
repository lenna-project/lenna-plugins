use image::{DynamicImage, GenericImageView};
use photon_rs::{filters::filter, helpers::dyn_image_from_raw, PhotonImage};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::Processor;
use lenna_core::ProcessorConfig;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(PhotonFilters));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct PhotonFilters;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    filter: String,
}

impl Default for Config {
    fn default() -> Self {
        Config {
            filter: "dramatic".into(),
        }
    }
}

impl Processor for PhotonFilters {
    fn name(&self) -> String {
        "photon-filters".into()
    }

    fn title(&self) -> String {
        "Photon Filters".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin for multiple filters by photon.".into()
    }

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let config: Config = serde_json::from_value(config.config).unwrap();
        let image = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut image: PhotonImage =
            PhotonImage::new(image.to_bytes(), image.width(), image.height());
        filter(&mut image, config.filter.as_str());
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
lenna_core::export_wasm_plugin!(PhotonFilters);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let photon_filters = PhotonFilters::default();
        assert_eq!(photon_filters.name(), "photon-filters");
    }
}
