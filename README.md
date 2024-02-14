# Api Component

### HTML

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/api-component"></script>

<div id="gjs"></div>
```

### JS

```js
const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: false,
  plugins: ["api-component"],
});
```

### CSS

```css
body,
html {
  margin: 0;
  height: 100%;
}
```

## Summary

- Plugin name: `api-component`
- Components
  - `component-id-1`
  - `component-id-2`
  - ...
- Blocks
  - `block-id-1`
  - `block-id-2`
  - ...

## Options

| Option    | Description        | Default         |
| --------- | ------------------ | --------------- |
| `option1` | Description option | `default value` |

## Download

- CDN
  - `https://unpkg.com/api-component`
- NPM
  - `npm i api-component`
- GIT
  - `git clone https://github.com/Afrin127329/api-component.git`

## Usage

Directly in the browser

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/api-component.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container: "#gjs",
    // ...
    plugins: ["api-component"],
    pluginsOpts: {
      "api-component": {
        /* options */
      },
    },
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import plugin from 'api-component';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/Afrin127329/api-component.git
$ cd api-component
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```

## License

MIT
