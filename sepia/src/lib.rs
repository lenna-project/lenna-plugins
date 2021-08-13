use image::{DynamicImage, GenericImageView};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};
use photon_rs::{helpers::dyn_image_from_raw, monochrome::sepia, PhotonImage};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Sepia));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Sepia;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {}

impl Default for Config {
    fn default() -> Self {
        Config {}
    }
}

impl ImageProcessor for Sepia {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let img = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut img: PhotonImage = PhotonImage::new(img.to_bytes(), image.width(), image.height());
        sepia(&mut img);
        let img = dyn_image_from_raw(&img);
        *image = Box::new(img);
        Ok(())
    }
}

impl ExifProcessor for Sepia {}

impl Processor for Sepia {
    fn name(&self) -> String {
        "sepia".into()
    }

    fn title(&self) -> String {
        "Sepia".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to sepia image.".into()
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

    fn icon(&self) -> Option<Vec<u8>> {
        let data: Vec<u8> = include_bytes!("../assets/sepia.png").to_vec();
        Some(data)
    }
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(Sepia);

#[cfg(test)]
mod tests {
    use super::*;
    use lenna_core::ProcessorConfig;

    #[test]
    fn default() {
        let mut sepia = Sepia::default();
        assert_eq!(sepia.name(), "sepia");
        let config = ProcessorConfig {
            id: "sepia".into(),
            config: sepia.default_config(),
        };
        let mut img =
            Box::new(lenna_core::io::read::read_from_file("../lenna.png".into()).unwrap());
        sepia.process(config, &mut img).unwrap();
    }
}
