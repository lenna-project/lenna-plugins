use exif::{Field, In, Tag, Value};
use lenna_core::plugins::PluginRegistrar;
use lenna_core::ProcessorConfig;
use lenna_core::{core::processor::ExifProcessor, core::processor::ImageProcessor, Processor};

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
    description: Option<String>,
    author: Option<String>,
}

impl Default for Config {
    fn default() -> Self {
        Config {
            clear: false,
            description: None,
            author: None,
        }
    }
}

impl ImageProcessor for Exif {}

impl ExifProcessor for Exif {
    fn process_exif(&self, exif: &mut Box<Vec<Field>>) -> Result<(), Box<dyn std::error::Error>> {
        if self.config.clear {
            exif.clear();
        }
        match &self.config.author {
            Some(author) => {
                exif.push(Field {
                    tag: Tag::Artist,
                    ifd_num: In::PRIMARY,
                    value: Value::Ascii(vec![author.clone().into_bytes()]),
                });
            }
            _ => (),
        };
        match &self.config.description {
            Some(description) => {
                exif.push(Field {
                    tag: Tag::ImageDescription,
                    ifd_num: In::PRIMARY,
                    value: Value::Ascii(vec![description.clone().into_bytes()]),
                });
            }
            _ => (),
        }
        Ok(())
    }
}

impl Processor for Exif {
    fn name(&self) -> String {
        "exif".into()
    }

    fn title(&self) -> String {
        "Exif".into()
    }

    fn author(&self) -> String {
        "chriamue".into()
    }

    fn description(&self) -> String {
        "Plugin to change exif in images.".into()
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

    #[test]
    fn author() {
        let exif = Exif {
            config: Config {
                clear: false,
                description: None,
                author: Some("chriamue".to_string()),
            },
        };
        assert_eq!(exif.name(), "exif");
        let mut fields = Box::new(Vec::new());
        assert!(exif.process_exif(&mut fields).is_ok());
        assert_eq!(fields.len(), 1);
    }

    #[test]
    fn description() {
        let exif = Exif {
            config: Config {
                clear: false,
                description: Some("some description".to_string()),
                author: None,
            },
        };
        assert_eq!(exif.name(), "exif");
        let mut fields = Box::new(Vec::new());
        assert!(exif.process_exif(&mut fields).is_ok());
        assert_eq!(fields.len(), 1);
    }
}
