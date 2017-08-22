# wrap-array [![Build Status](https://travis-ci.org/tobihrbr/wrap-array.svg?branch=master)](https://travis-ci.org/tobihrbr/wrap-array) [![Coverage Status](https://coveralls.io/repos/github/tobihrbr/wrap-array/badge.svg?branch=master)](https://coveralls.io/github/tobihrbr/wrap-array?branch=master) [![Codestyle fyi](https://img.shields.io/badge/code%20style-fyi-E91E63.svg)](https://github.com/tobihrbr/fyi)

> Transform anything into an array.

Based on [this](https://gist.github.com/tobihrbr/1e22170ac69e82abc29da459a547bf75) gist.

## Install

```
$ npm install --save wrap-array
```

## Usage

```js
const wrapArray = require('wrap-array');

wrapArray('anything');
//=> ['anything']

wrapArray(42);
//=> [42]

wrapArray(['array']);
//=> ['array']

wrapArray({ object: true });
//=> [{ object: true }]
```

## API

### wrapArray(input)

#### input

Type: `string`, `number`, `object`, ...

Whatever you want!

## License

MIT © [Tobias Herber](https://tobihrbr.com)
