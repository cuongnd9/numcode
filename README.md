# numcode

6️⃣7️⃣ Generating codes is easy and simple.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/103cuong/numcode.svg?branch=master)](https://travis-ci.com/103cuong/numcode)
![npm](https://img.shields.io/npm/v/numcode.svg)
![david](https://img.shields.io/david/103cuong/numcode.svg)
[![Hits-of-Code](https://hitsofcode.com/github/103cuong/numcode)](https://hitsofcode.com/view/github/103cuong/numcode)
[![GitHub](https://img.shields.io/github/license/103cuong/numcode.svg)](https://github.com/103cuong/numcode/blob/master/LICENSE)

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
<table><tr><td align="center"><a href="http://103cuong.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Code">💻</a> <a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Documentation">📖</a> <a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Tests">⚠️</a> <a href="#review-103cuong" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [103cuong](https://github.com/103cuong)
