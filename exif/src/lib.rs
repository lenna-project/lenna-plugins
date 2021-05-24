use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};
use exif::Field;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Exif::default()));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Exif {
    config: Config,
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    clear: bool,
}

impl Default for Config {
    fn default() -> Self {
        Config { clear: false }
    }
}

impl ImageProcessor for Exif {
}

impl ExifProcessor for Exif {
    fn process_exif(&self, exif: &mut Box<Vec<Field>>) -> Result<(), Box<dyn std::error::Error>> {
        if self.config.clear {
            exif.clear();
        }
        Ok(())
    }
}

impl Processor for Exif {
    fn name(&self) -> String {
        "rotate".into()
    }

    fn title(&self) -> String {
        "Rotate".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to rotate image.".into()
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
lenna_core::export_wasm_plugin!(Exif);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let exif = Exif::default();
        assert_eq!(exif.name(), "exif");
    }
}
