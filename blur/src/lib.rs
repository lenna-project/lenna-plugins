use image::DynamicImage;

use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Blur::default()));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Blur {
    config: Config,
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    sigma: f32,
}

impl Default for Config {
    fn default() -> Self {
        Config { sigma: 1.5 }
    }
}

impl ImageProcessor for Blur {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let resized = image.blur(self.config.sigma);
        *image = Box::new(resized);
        Ok(())
    }
}

impl ExifProcessor for Blur {}

impl Processor for Blur {
    fn name(&self) -> String {
        "blur".into()
    }

    fn title(&self) -> String {
        "Blur".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to blur image.".into()
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

    fn icon(&self) -> Option<Vec<u8>> {
        let data: Vec<u8> = include_bytes!("../assets/blur.png").to_vec();
        Some(data)
    }
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(Blur);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let blur = Blur::default();
        assert_eq!(blur.name(), "blur");
    }

    #[test]
    fn test() {
        let blur = Blur::default();
        assert_eq!(blur.icon().unwrap().len(), 94857);
    }

    #[cfg(target_arch = "wasm32")]
    mod wasm {
        use super::*;
        use lenna_core::LennaImage;
        use wasm_bindgen_test::*;

        #[wasm_bindgen_test]
        fn default() {
            let mut plugin = Blur::default();
            let config = ProcessorConfig {
                id: "blur".into(),
                config: plugin.default_config(),
            };
            assert_eq!(plugin.name(), "blur");
            let mut img = Box::new(LennaImage::default());
            plugin.process(config, &mut img).unwrap();
        }
    }
}
