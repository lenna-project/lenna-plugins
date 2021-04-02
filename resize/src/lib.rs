use lenna_core::plugins::PluginRegistrar;
use lenna_core::core::resize::Resize;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Resize{}));
}

lenna_core::export_plugin!(register);

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
use lenna_core::Processor;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(Resize);

#[cfg(test)]
mod tests {
    use super::*;
    use lenna_core::Processor;

    #[test]
    fn default() {
        let resize = Resize::default();
        assert_eq!(resize.name(), "resize");
    }
}