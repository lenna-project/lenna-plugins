use image::{DynamicImage, GenericImageView};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::Processor;
use lenna_core::ProcessorConfig;
use photon_rs::{helpers::dyn_image_from_raw, filters::dramatic, PhotonImage};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Dramatic));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Dramatic;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
}

impl Default for Config {
    fn default() -> Self {
        Config {}
    }
}

impl Processor for Dramatic {
    fn name(&self) -> String {
        "dramatic".into()
    }

    fn title(&self) -> String {
        "Dramatic".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to give image a dramatic style.".into()
    }

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let _config: Config = serde_json::from_value(config.config).unwrap();
        let image = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut image: PhotonImage = PhotonImage::new(image.to_bytes(), image.width(), image.height());
        dramatic(&mut image);
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
lenna_core::export_wasm_plugin!(Dramatic);

#[cfg(test)]
mod tests {
    use super::*;
    use image::io::Reader as ImageReader;
    use lenna_core::ProcessorConfig;

    #[test]
    fn default() {
        let dramatic = Dramatic::default();
        assert_eq!(dramatic.name(), "sepia");
        let config = ProcessorConfig{
            id: "dramatic".into(),
            config: dramatic.default_config()
        };
        let img = ImageReader::open("../lenna.png").unwrap().decode().unwrap();
        let img = dramatic.process(config, img);
    }
}
