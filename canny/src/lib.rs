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

impl Processor for Canny {

    fn name(&self) -> &'static str {
        "canny"
    }

    fn description(&self) -> &'static str {
        "Plugin to create canny edges."
    }

    fn process(&self, config: &ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let low = config.config["low"].as_f64().unwrap();
        let high = config.config["high"].as_f64().unwrap();
        let img = image.to_luma8();
        let edges = DynamicImage::ImageLuma8(canny(&img, low as f32, high as f32));
        edges
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let canny = Canny::default();
        assert_eq!(canny.name(), "canny");
    }
}