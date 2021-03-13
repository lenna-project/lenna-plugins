use image::DynamicImage;

use lenna_core::ProcessorConfig;
use lenna_core::Processor;
use lenna_core::plugins::PluginRegistrar;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Blur));
}

lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Blur;

impl Processor for Blur {

    fn name(&self) -> &'static str {
        "blur"
    }

    fn description(&self) -> &'static str {
        "Plugin to resize image size."
    }

    fn process(&self, config: &ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let sigma = config.config["sigma"].as_f64().unwrap();
        image.blur(sigma as f32)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let blur = Blur::default();
        assert_eq!(blur.name(), "blur");
    }
}