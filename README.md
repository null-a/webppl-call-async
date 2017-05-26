# webppl-call-async

This package provides a method of calling asynchronous Javascript
functions from WebPPL.

## Compatibility

Requires WebPPL >= 0.9.7.

## Installation

To globally install `webppl-call-async`, run:

    mkdir -p ~/.webppl
    npm install --prefix ~/.webppl https://github.com/null-a/webppl-call-async

This may print warnings (npm WARN ENOENT...) which can be ignored.

## Usage

Once installed, you can make the methods described below available to
`program.wppl` by running:

    webppl program.wppl --require webppl-call-async

### `callAsync(jsFunc, arg)`

Calls the asynchronous JS function `jsFunc`, passing `arg` as the
first and only argument. WebPPL will block until the callback of
`jsFunc` is fired. The first argument passed to the callback then
becomes the return value of `callAsync`.

The signature of `jsFunc` is assumed to be:

```js
function jsFunc(arg, callback) { /* ... */ }
```

### `webpplCallAsync.pause(delay, callback)`

An simple asynchronous JS function. This is useful for testing
`callAsync`. For example:

```js
callAsync(webpplCallAsync.pause, 1000);
display('done');

// output:

// pausing for 1000 ms...
// .
// .
// .
// resuming...
// done
```

## License

MIT
