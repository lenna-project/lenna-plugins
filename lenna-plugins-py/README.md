# lenna-plugins

Lenna is a library for image processing algorithms and apps.

Here are some plugins for Lenna.

## 🐰 quickstart

```bash
cargo build
```

## 🌱 new plugin

Append library project to workspace:

```toml
#Cargo.toml
[workspace]
members = ["blur", "canny", "resize"]
```

Add dependencies for image and lenna-core:

```toml
[package]
authors = ["Christian <chriamue@gmail.com>"]
edition = "2018"
name = "resize"
version = "0.1.0"

[lib]
crate-type = ["cdylib"]

[dependencies]
image = {version = "0.23"}
wasm-bindgen = { version = "0.2", features = ["serde-serialize"] }
lenna-core = {git = "https://github.com/lenna-project/lenna-core", branch="main" }
```

Import PluginRegistrar and export plugin:

```rs
// lib.rs
use lenna_core::plugins::PluginRegistrar;
use lenna_core::core::resize::Resize;

extern "C" fn register(registrar: &mut dyn PluginRegistrar) {
    registrar.add_plugin(Box::new(Resize{}));
}

lenna_core::export_plugin!(register);
```

For creating wasm package also export wasm plugin:

```rs
#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
use lenna_core::Processor;
#[cfg(target_arch = "wasm32")]
lenna_core::export_wasm_plugin!(Resize);
```

Build the plugin library using

```bash
cargo build --release
```

For building the wasm package, run:

```
wasm-pack build
```

## 📜 License

This software is licensed under the [MIT](https://github.com/lenna-project/lenna-cli/blob/main/LICENSE) © [lenna-project](https://github.com/lenna-project).
