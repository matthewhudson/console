# Console

##### Drop-in replacement for `console` - a cross-environment fix for missing methods.

## Installation

``` sh
npm install console
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
<script src="https://unpkg.com/console"></script>
```

And then grab it off the global like so:

``` js
const console = console.default
```
