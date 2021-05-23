use image::DynamicImage;
use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Rotate::default()));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Rotate {
    config: Config,
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    theta: f32,
}

impl Default for Config {
    fn default() -> Self {
        Config { theta: 90.0 }
    }
}

impl ImageProcessor for Rotate {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        match self.config.theta {
            t if t >= 270.0 => *image = Box::new(image.rotate270()),
            t if t >= 180.0 => *image = Box::new(image.rotate180()),
            t if t >= 90.0 => *image = Box::new(image.rotate90()),
            _ => {}
        }
        Ok(())
    }
}

impl ExifProcessor for Rotate {}

impl Processor for Rotate {
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
lenna_core::export_wasm_plugin!(Rotate);

#[cfg(test)]
mod tests {
    use super::*;
    use image::GenericImageView;

    #[test]
    fn default() {
        let rotate = Rotate::default();
        assert_eq!(rotate.name(), "rotate");
    }

    #[test]
    fn process() {
        let mut rotate = Rotate::default();
        let config = ProcessorConfig {
            id: "rotate".into(),
            config: serde_json::to_value(Config { theta: 45.5 }).unwrap(),
        };
        let mut img =
            Box::new(lenna_core::io::read::read_from_file("../lenna.png".into()).unwrap());
        let (w, h) = img.image.dimensions();
        rotate.process(config, &mut img).unwrap();
        let (w2, h2) = img.image.dimensions();
        assert_eq!(w, w2);
        assert_eq!(h, h2);
        assert_eq!(rotate.name(), "rotate");
    }
}
