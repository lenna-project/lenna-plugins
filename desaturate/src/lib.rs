use image::{DynamicImage, GenericImageView};
use photon_rs::{helpers::dyn_image_from_raw, monochrome, PhotonImage};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};

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

impl ImageProcessor for Desaturate {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let img = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut img: PhotonImage = PhotonImage::new(img.to_bytes(), image.width(), image.height());
        monochrome::desaturate(&mut img);
        let img = dyn_image_from_raw(&img);
        *image = Box::new(img);
        Ok(())
    }
}

impl ExifProcessor for Desaturate {}

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

    fn process(
        &mut self,
        _config: ProcessorConfig,
        image: &mut Box<lenna_core::LennaImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
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
