use exif::{Field, In, Tag, Value};
use image::{DynamicImage, GenericImageView};
use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(ExifThumbnail::default()));
}

#[cfg(feature = "plugin")]
lenna_core::export_plugin!(register);

#[derive(Default, Clone)]
pub struct ExifThumbnail {
    config: Config,
    thumbnail: Vec<u8>,
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Config {
    thumbnail: bool,
}

impl Default for Config {
    fn default() -> Self {
        Config { thumbnail: false }
    }
}

impl ImageProcessor for ExifThumbnail {}

impl ExifProcessor for ExifThumbnail {
    fn process_exif(&self, exif: &mut Box<Vec<Field>>) -> Result<(), Box<dyn std::error::Error>> {
        if self.config.thumbnail {
            let thumbnail = Field {
                tag: Tag::JPEGInterchangeFormat,
                ifd_num: In::THUMBNAIL,
                value: Value::Byte(self.thumbnail.to_vec()),
            };
            exif.push(thumbnail);
        }
        Ok(())
    }
}

impl Processor for ExifThumbnail {
    fn name(&self) -> String {
        "exif-thumbnail".into()
    }

    fn title(&self) -> String {
        "Exif Thumbnail".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to change thumbnail in exif data of images.".into()
    }

    fn process(
        &mut self,
        config: ProcessorConfig,
        image: &mut Box<lenna_core::LennaImage>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        self.config = serde_json::from_value(config.config).unwrap();
        if self.config.thumbnail {
            let img = DynamicImage::ImageRgb8(image.image.to_rgb8());
            let img = img.thumbnail(64, 64);
            let mut image_data: Vec<u8> = Vec::new();
            img.write_to(&mut image_data, image::ImageOutputFormat::Jpeg(70))
                .unwrap();
            self.thumbnail = image_data;
        }
        self.process_exif(&mut image.exif).unwrap();
        Ok(())
    }

    fn default_config(&self) -> serde_json::Value {
        serde_json::to_value(Config::default()).unwrap()
    }
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(ExifThumbnail);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default() {
        let exif = ExifThumbnail::default();
        assert_eq!(exif.name(), "exif-thumbnail");
    }
}
