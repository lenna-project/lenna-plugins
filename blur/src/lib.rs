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

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    sigma: f32,
}

impl Default for Config {
    fn default() -> Self {
        Config {
            sigma: 1.5,
        }
    }
}

impl Processor for Blur {

    fn name(&self) -> String {
        "blur".into()
    }

    fn description(&self) -> String {
        "Plugin to resize image size.".into()
    }

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let config: Config = serde_json::from_value(config.config).unwrap();
        image.blur(config.sigma)
    }

    fn default_config(&self) -> serde_json::Value {
        serde_json::to_value(Config::default()).unwrap()
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