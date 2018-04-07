# console

[![Greenkeeper badge](https://badges.greenkeeper.io/matthewhudson/console.svg)](https://greenkeeper.io/)
[![NPM downloads](https://img.shields.io/npm/dm/console.svg)](https://www.npmjs.com/package/console)
[![NPM version](https://badge.fury.io/js/console.svg)](http://badge.fury.io/js/console)

> Drop-in replacement for `console` - a cross-environment fix for missing
methods.

## Installation

``` sh
npm install console --save
```

And then import it:

``` js
// using es modules
import console from 'console'

// common.js
const console = require('console').default

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

``` html
<script src="https://unpkg.com/console/umd/console.min.js"></script>
```

And then grab it off the global like so:

``` js
const console = console.default
```
