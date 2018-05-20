# Get best contrast color

[![Greenkeeper badge](https://badges.greenkeeper.io/misund/get-best-contrast-color.svg)](https://greenkeeper.io/)

`get-best-contrast-color` calculates which color in an array of colors gives the highest contrast to another color.

### Installation
```sh
$ npm install get-best-contrast-color
```

### Usage
```js
import bestContrast from 'get-best-contrast-color';

bestContrast('palevioletred', ['#222', 'rgb(255, 255, 255)']); // '#222'
bestContrast('saddlebrown', ['#222', 'rgb(255, 255, 255)']); // 'rgb(255, 255, 255)'
```

### Signature
```(background: string, colors: array) => string```
