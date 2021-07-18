use pyo3::prelude::*;
#[pymodule]
fn lenna_plugins_py(py: Python, m: &PyModule) -> PyResult<()> {
    lenna_core::export_python_plugin!(blur::Blur, "blur", py, m);
    lenna_core::export_python_plugin!(canny::Canny, "canny", py, m);
    lenna_core::export_python_plugin!(cartoonify::Cartoonify, "cartoonify", py, m);
    lenna_core::export_python_plugin!(desaturate::Desaturate, "desaturate", py, m);
    lenna_core::export_python_plugin!(dramatic::Dramatic, "dramatic", py, m);
    lenna_core::export_python_plugin!(photon_filters::PhotonFilters, "photon_filters", py, m);
    lenna_core::export_python_plugin!(rotate::Rotate, "rotate", py, m);
    lenna_core::export_python_plugin!(sepia::Sepia, "sepia", py, m);
    lenna_core::export_python_plugin!(sharpen::Sharpen, "sharpen", py, m);
    Ok(())
}
