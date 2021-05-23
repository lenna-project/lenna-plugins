use image::{DynamicImage, GenericImageView};
use photon_rs::{filters::filter, helpers::dyn_image_from_raw, PhotonImage};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(PhotonFilters::default()));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct PhotonFilters {
    config: Config,
}

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

impl ImageProcessor for PhotonFilters {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let img = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut img: PhotonImage = PhotonImage::new(img.to_bytes(), image.width(), image.height());
        filter(&mut img, self.config.filter.as_str());
        let img = dyn_image_from_raw(&img);
        *image = Box::new(img);
        Ok(())
    }
}

impl ExifProcessor for PhotonFilters {}

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

    fn process(
        &mut self,
        config: ProcessorConfig,
        image: &mut Box<lenna_core::LennaImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        self.config = serde_json::from_value(config.config).unwrap();
        self.process_exif(&mut image.exif).unwrap();
        self.process_image(&mut image.image).unwrap();
        Ok(())
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
