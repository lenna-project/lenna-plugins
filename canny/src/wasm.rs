#![cfg(target_arch = "wasm32")]

use crate::{Canny, Config};
use lenna_core::Processor;
use lenna_core::ProcessorConfig;
use std::io::{Cursor, Read, Seek, SeekFrom};
use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = defaultConfig)]
pub fn default_config() -> JsValue {
    JsValue::from_serde(&Config::default()).unwrap()
}

#[wasm_bindgen(js_name = id)]
pub fn id() -> String {
    let canny = Canny::default();
    canny.id()
}

#[wasm_bindgen(js_name = name)]
pub fn name() -> String {
    let canny = Canny::default();
    canny.name()
}

#[wasm_bindgen(js_name = description)]
pub fn description() -> String {
    let canny = Canny::default();
    canny.description()
}

#[wasm_bindgen(js_name = process)]
pub fn process(data: &[u8]) -> Vec<u8> {
    let processor = Canny::default();
    let mut config: ProcessorConfig = ProcessorConfig {
        id: processor.id(),
        config: processor.default_config().into(),
    };
    config.config = processor.default_config();

    let img = image::load_from_memory(&data).unwrap();
    let img = processor.process(config, img);
    img.into_bytes()
}
