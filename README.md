# numcode

6️⃣7️⃣ Generating codes is easy and simple.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/cuongw/numcode.svg?branch=master)](https://travis-ci.com/cuongw/numcode)
![npm](https://img.shields.io/npm/v/numcode.svg)
![david](https://img.shields.io/david/cuongw/numcode.svg)
[![Hits-of-Code](https://hitsofcode.com/github/cuongw/numcode)](https://hitsofcode.com/view/github/cuongw/numcode)
[![GitHub](https://img.shields.io/github/license/cuongw/numcode.svg)](https://github.com/cuongw/numcode/blob/master/LICENSE)

## Installation

```sh
yarn add numcode
# or
npm install -s numcode
```

## Usage

**For ES6 or ESNext**

```javascript
import { numcode } from 'numcode';
```

**For CommonJS**

```javascript
const { numcode } = require('numcode');
```

```javascript
console.log(numcode());
```

```sh
Output should be '1998'
```

## API

### `numcode(length)`

**Returns** `string` unique id with length option (length from 4 to 6).

**Example**

```javascript
numcode(6);
```

```sh
Output should be '122856'
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Code">💻</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Documentation">📖</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Tests">⚠️</a> <a href="#review-cuongw" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [cuongw](https://github.com/cuongw)
