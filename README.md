#

## How It Works

## Example

## Common Issues

### Escape

`envsubst` doesn't escape or encode. It only replaces strings. You have to do something to the environment variables to make it works right. For example, if you what to make `export const FOO = "\""`, You have to pass `FOO=\"` as the environment variable; If you what to use it as a CDN path prefix, [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) or [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) might helps.

### CDN in Vite

```html
<link
  rel="stylesheet"
  href="<%= VITE_CDN %>/normalize.css@8.0.1/normalize.css"
/>
```

Vite will regard the link as a local path and show the error message:

> Error: [vite]: Rollup failed to resolve import "${CDN}/> normalize.css@8.0.1/normalize.css" from "index.html".

To resolve this, we can only use the environment variable after the protocol with prefix `//`:

```html
<link
  rel="stylesheet"
  href="//<%= VITE_CDN %>/normalize.css@8.0.1/normalize.css"
/>
```

In this case both these env should work:

```ini
CDN=cdn.jsdelivr.net/npm
CDN=unpkg.com
```

Related issue: [index.html 在 build 的时候需要忽略里面的一些处理 #7160](https://github.com/vitejs/vite/issues/7160)

## Public Path

For SPA,

Aka public url,

use hash router

- [Vite base](https://vitejs.dev/config/#base)
- [Create React App - Serving the Same Build from Different Paths](https://create-react-app.dev/docs/deployment#serving-the-same-build-from-different-paths)

- [Vue Router - Hash Mode](https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode)
- [React Router - Hash Router](https://reactrouter.com/docs/en/v6/api#hashrouter)
- [React Location - Hash Routing](https://react-location.tanstack.com/guides/history-types-and-location#hash-routing)
