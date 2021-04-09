use pyo3::prelude::*;
#[pymodule]
fn lenna_plugins_py(py: Python, m: &PyModule) -> PyResult<()> {
    lenna_core::export_python_plugin!(blur::Blur, "blur", py, m);
    lenna_core::export_python_plugin!(canny::Canny, "canny", py, m);
    lenna_core::export_python_plugin!(rotate::Rotate, "rotate", py, m);
    Ok(())
}
