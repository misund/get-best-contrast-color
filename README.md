# Get best contrast color

[![Greenkeeper badge](https://badges.greenkeeper.io/misund/get-best-contrast-color.svg)](https://greenkeeper.io/)

`get-best-contrast-color` calculates which color in an array of colors gives the highest contrast to another color.

Doesn't handle transparency as of yet.

## Installation
```sh
$ npm install get-best-contrast-color
```

## Usage
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

## Signature
```(background: string, colors: array) => string```

## Contributing
I appreciate your issues and PRs [on Github](https://github.com/misund/get-best-contrast-color)!

### Testing
```
yarn build && yarn test
```

### Releasing
This project uses [np](https://github.com/sindresorhus/np).
1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide
