# Get best contrast color

[![Greenkeeper badge](https://badges.greenkeeper.io/misund/get-best-contrast-color.svg)](https://greenkeeper.io/)

`get-best-contrast-color` calculates which color in an array of colors gives the highest contrast to another color.

Doesn't handle transparency as of yet.

### Installation
```sh
$ npm install get-best-contrast-color
```

### Usage
```js
import bestContrast from 'get-best-contrast-color';
// If you're not using EMS but CommonJS:
// const bestContrast = require('get-best-contrast-color').default;

const background1 = 'palevioletred';
const background2 = 'saddlebrown';

const colors = [
  '#222',
  'blue',
  'rgb(255, 255, ,255)',
];

bestContrast(background1, colors); // '#222'
bestContrast(background2, colors); // 'rgb(255, 255, 255)'
```

### Signature
```(background: string, colors: array) => string```
