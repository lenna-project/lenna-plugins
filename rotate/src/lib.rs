use image::DynamicImage;
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
        Config { theta: 90.0 }
    }
}

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

    fn process(&self, config: ProcessorConfig, image: DynamicImage) -> DynamicImage {
        let config: Config = serde_json::from_value(config.config).unwrap();
        println!("{:?}", image);
        match config.theta {
            t if t >= 270.0 => image.rotate270(),
            t if t >= 180.0 => image.rotate180(),
            t if t >= 90.0 => image.rotate90(),
            _ => image,
        }
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
        let rotate = Rotate::default();
        let config = ProcessorConfig {
            id: "rotate".into(),
            config: serde_json::to_value(Config { theta: 45.5 }).unwrap(),
        };
        let image = DynamicImage::new_rgba16(64, 64);
        let (w, h) = image.dimensions();
        let img = rotate.process(config, image);
        let (w2, h2) = img.dimensions();
        assert_eq!(w, w2);
        assert_eq!(h, h2);
        assert_eq!(rotate.name(), "rotate");
    }
}
