use image::{DynamicImage, GenericImageView};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::Processor;
use lenna_core::ProcessorConfig;
use photon_rs::{helpers::dyn_image_from_raw, monochrome::sepia, PhotonImage};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Sepia));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Sepia;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
}

impl Default for Config {
    fn default() -> Self {
        Config {}
    }
}

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

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let _config: Config = serde_json::from_value(config.config).unwrap();
        let image = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut image: PhotonImage = PhotonImage::new(image.to_bytes(), image.width(), image.height());
        sepia(&mut image);
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
lenna_core::export_wasm_plugin!(Sepia);

#[cfg(test)]
mod tests {
    use super::*;
    use image::io::Reader as ImageReader;
    use lenna_core::ProcessorConfig;

    #[test]
    fn default() {
        let sepia = Sepia::default();
        assert_eq!(sepia.name(), "sepia");
        let config = ProcessorConfig{
            id: "sepia".into(),
            config: sepia.default_config()
        };
        let img = ImageReader::open("../lenna.png").unwrap().decode().unwrap();
        let img = sepia.process(config, img);

    }
}
