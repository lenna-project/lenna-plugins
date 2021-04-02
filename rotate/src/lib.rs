use image::{DynamicImage, Rgb, RgbImage};
use imageproc::geometric_transformations::{rotate_about_center, Interpolation};

use lenna_core::plugins::PluginRegistrar;
use lenna_core::Processor;
use lenna_core::ProcessorConfig;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Rotate));
}

lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Rotate;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    theta: f32,
}

impl Default for Config {
    fn default() -> Self {
        Config { theta: 0.0 }
    }
}

impl Processor for Rotate {
    fn name(&self) -> String {
        "rotate".into()
    }

    fn description(&self) -> String {
        "Plugin to rotate image.".into()
    }

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let config: Config = serde_json::from_value(config.config).unwrap();
        let image_buffer = image.as_rgb8().unwrap();
        let rotated_image: RgbImage = rotate_about_center(
            image_buffer,
            config.theta,
            Interpolation::Bicubic,
            Rgb([0, 0, 0]),
        );
        DynamicImage::ImageRgb8(rotated_image)
    }

    fn default_config(&self) -> serde_json::Value {
        serde_json::to_value(Config::default()).unwrap()
    }
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(Rotate);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let rotate = Rotate::default();
        assert_eq!(rotate.name(), "rotate");
    }
}
