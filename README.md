# tiny-isempty

[![source](https://badgen.net/npm/v/@ngard/tiny-isempty)](https://www.npmjs.com/package/@ngard/tiny-isempty)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-isempty)](https://bundlephobia.com/result?p=@ngard/tiny-isempty)
[![build status](https://badgen.net/travis/NickGard/tiny-isempty)](https://travis-ci.org/NickGard/tiny-isempty)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility equivalent to `lodash.isempty`. For when every byte counts!

<hr/>

lodash.isempty [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.isempty)](https://bundlephobia.com/result?p=lodash.isempty)
<br/>
tiny-isempty [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-isempty)](https://bundlephobia.com/result?p=@ngard/tiny-isempty)

<hr/>

## Syntax

```js
isEmpty(/* object */)
```

## Parameters

`object` - The object to check for emptiness

## Return

`true` if value is an empty object, collection, map, or set. `false` otherwise.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as `arguments` objects, `arrays`, `strings`, or jQuery-like collections are considered empty if they have a length of `0`. Similarly, `maps` and `sets` are considered empty if they have a size of `0`.

## Example

```javascript
import { isEmpty } from '@ngard/tiny-isempty';

isEmpty({}); // true
isEmpty([]); // true
isEmpty(''); // true
isEmpty(new Map()); // true
isEmpty(Object.create(null)); // true
```
