
use image::DynamicImage;
use imageproc::edges::canny;

use lenna_core::ProcessorConfig;
use lenna_core::Processor;
use lenna_core::plugins::PluginRegistrar;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Canny));
}

lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Canny;

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

impl Processor for Canny {

    fn name(&self) -> String {
        "canny".into()
    }

    fn description(&self) -> String {
        "Plugin to create canny edges.".into()
    }

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let config: Config = serde_json::from_value(config.config).unwrap();
        let img = image.to_luma8();
        let edges = DynamicImage::ImageLuma8(canny(&img, config.low, config.high));
        edges
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
