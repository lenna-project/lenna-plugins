# lenna-plugins-py

Some lenna plugins for python.

## 🐰 quickstart

```bash
virtualenv -p python3 .venv
source .venv/bin/activate
pip install . --use-feature=in-tree-build
pip install numpy pillow
```

## open in python

```python
#python
from PIL import Image
from numpy import asarray
import lenna_plugins_py

image = Image.open('../lenna.png')
data = asarray(image)

config = lenna_plugins_py.blur.default_config()
config['sigma'] = 2.5
processed = lenna_plugins_py.blur.process(config, data)
config = lenna_plugins_py.canny.default_config()
processed = lenna_plugins_py.canny.process(config, processed)
Image.fromarray(processed).save('lenna_out.png')
```

![lenna out image](lenna_out.png)

## 📜 License

This software is licensed under the [MIT](https://github.com/lenna-project/lenna-plugins/blob/main/LICENSE) © [lenna-project](https://github.com/lenna-project).
