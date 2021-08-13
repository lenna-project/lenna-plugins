use image::{DynamicImage, GenericImageView};
use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};
use photon_rs::{conv::sharpen, helpers::dyn_image_from_raw, PhotonImage};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Sharpen));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct Sharpen;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {}

impl Default for Config {
    fn default() -> Self {
        Config {}
    }
}

impl ImageProcessor for Sharpen {
    fn process_image(
        &self,
        image: &mut Box<DynamicImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let img = DynamicImage::ImageRgba8(image.to_rgba8());
        let mut img: PhotonImage = PhotonImage::new(img.to_bytes(), image.width(), image.height());
        sharpen(&mut img);
        let img = dyn_image_from_raw(&img);
        *image = Box::new(img);
        Ok(())
    }
}

impl ExifProcessor for Sharpen {}

impl Processor for Sharpen {
    fn name(&self) -> String {
        "sharpen".into()
    }

    fn title(&self) -> String {
        "Sharpen".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to sharpen images.".into()
    }

    fn process(
        &mut self,
        _config: ProcessorConfig,
        image: &mut Box<lenna_core::LennaImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
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
lenna_core::export_wasm_plugin!(Sharpen);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let mut sharpen = Sharpen::default();
        assert_eq!(sharpen.name(), "sharpen");
        let config = ProcessorConfig {
            id: "sharpen".into(),
            config: sharpen.default_config(),
        };
        let mut img =
            Box::new(lenna_core::io::read::read_from_file("../lenna.png".into()).unwrap());
        sharpen.process(config, &mut img).unwrap();
        img.name = "test".to_string();
        lenna_core::io::write::write_to_file(&img, image::ImageOutputFormat::Jpeg(80)).unwrap();
    }
}
