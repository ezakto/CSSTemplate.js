# CSSTemplate.js
Inject and update dynamic CSS using simple js templating

## Usage

This script is intended to be used mostly in the `<head>` to enhance the main stylesheet. Add a `style` tag with an `id`. This is a good ol' CSS stylesheet with the sugar of placeholder $variables. Then include the script.
```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
    <style id="css-tpl">
        body {
            font-size: $baseFontSize;
        }
        .full-height {
            height: $windowHeight;
        }
    </style>
    <script src="CSSTemplate.js"></script>
    <script>
        // Setup here
    </script>
</head>
```

Now you set the placeholder values by creating a new CSSTemplate instance pointing to our style tag.
```js
var tpl = new CSSTemplate('css-tpl');
tpl.set({
    baseFontSize: (window.innerHeight / 5) + 'px',
    windowHeight: window.innerHeight + 'px'
});
```

Best usage would be creating a "refresh" function and attach to an event handler:
```js
var tpl = new CSSTemplate('css-tpl');
function handler() {
    tpl.set({
        baseFontSize: (window.innerHeight > 320 ? window.innerHeight / 5 : 64) + 'px',
        windowHeight: window.innerHeight + 'px'
    });
}
document.addEventListener('resize', handler);
handler();
```

The minified script is small enough to be placed directly in the `<head>` without noticeable overhead.

## Copyright and Licensing
Copyright (c) 2015 Nicolás Arias, released under the MIT license.