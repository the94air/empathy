# Adding fonts
1. To the fonts we will use webfont loader to get fonts from google in our case. You can also use `webfontloader` to load local fonts. Read the [docs](https://github.com/typekit/webfontloader) to learn more.
```javascript
import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
    google:  {
        families:  ['Source Sans Pro:400,600']
    }
});

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```

2. Then we add the font `Source Sans Pro` to our `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    fontFamily: {
      sans: [
    	'Source Sans Pro',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
    	'Source Sans Pro',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  // ...
}
```
3. Let's add the font to our `base` SASS file:
```scss
html {
    @apply font-sans;
    color: theme('colors.gray.800');
}

<!-- ... -->

h1, h2, h3, h4, h5, h6 {
    @apply font-serif font-semibold mb-2;
}

<!-- ... -->
```
