use image::DynamicImage;
use imageproc::edges::canny;

use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{ExifProcessor, ImageProcessor, Processor};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Canny::default()));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Canny {
    config: Config,
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    low: f32,
    high: f32,
}

impl Default for Config {
    fn default() -> Self {
        Config {
            low: 50.0,
            high: 100.0,
        }
    }
}

impl ImageProcessor for Canny {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let img = image.to_luma8();
        let edges = DynamicImage::ImageLuma8(canny(&img, self.config.low, self.config.high));
        *image = Box::new(edges);
        Ok(())
    }
}

impl ExifProcessor for Canny {}

impl Processor for Canny {
    fn name(&self) -> String {
        "canny".into()
    }

    fn title(&self) -> String {
        "Canny".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to create canny edges.".into()
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
lenna_core::export_wasm_plugin!(Canny);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let canny = Canny::default();
        assert_eq!(canny.name(), "canny");
    }
}
