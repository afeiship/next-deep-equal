# next-deep-equal
> Equal object for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-deep-equal
```

## usage
```js
import '@jswork/next-deep-equal';

const obj1 = {
    a: 1,
    s1: 'string',
    items: [1, 2]
};

const obj2 = {
    a: 1,
    items: [1, 2],
    s1: 'string'
};

nx.deepEqual(obj1, obj2);
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-deep-equal/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-deep-equal
[version-url]: https://npmjs.org/package/@jswork/next-deep-equal

[license-image]: https://img.shields.io/npm/l/@jswork/next-deep-equal
[license-url]: https://github.com/afeiship/next-deep-equal/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-deep-equal
[size-url]: https://github.com/afeiship/next-deep-equal/blob/master/dist/next-deep-equal.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-deep-equal
[download-url]: https://www.npmjs.com/package/@jswork/next-deep-equal
