# babel-plugin-object-is

**Important: This is still pretty untested. Consider using with caution.**

Replaces instances of `Object.is` with a polyfill (`object-is` on npm).

[![Circle CI](https://circleci.com/gh/nhunzaker/babel-plugin-object-is.svg?style=svg)](https://circleci.com/gh/nhunzaker/babel-plugin-object-is)

## Usage

```
$ npm install babel babel-core babel-plugin-object-is
```

_Note:_ you need to specify `babel-core` as a dependency for your
project (not just `babel`). This is also true if you are using a
wrapper like `babelify`.

Use:

```
$ babel --plugins object-is script.js
```

or:

```js
require("babel").transform("code", { plugins: ["object-is"] });
```

with `browserify` / `babelify`:

```js
var b = browserify({
  // browserifyoptions
}).transform(
  babelify.configure({
    plugins: ["object-is"]
  })
);
```
