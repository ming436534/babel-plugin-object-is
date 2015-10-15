# babel-plugin-object-is

Still rough. Bear with me.

## Usage

```
$ npm install babel babel-core babel-plugin-object-assign
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
