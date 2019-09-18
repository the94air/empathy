# SASS setup
1. The first step is to import the empathy SASS files and make a new file for base styling. If you want to modify the default styles you can copy the file to your SASS:

2. Then we add a new file for base styling:
```scss
@tailwind base;

@tailwind components;

@import '~empathy/src/sass/empathy';
@import 'base';

@tailwind utilities;
```
3. The Base file should content:

```scss
html {
    color: theme('colors.gray.800');
}

body {
    background: theme('colors.gray.200');
    width: 100%;
    height: 100%;
}

::selection {
    background: theme('colors.gray.400');
    text-shadow: none;
}

h1, h2, h3, h4, h5, h6 {
    @apply font-semibold mb-2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

a {
    color: theme('colors.blue.500');
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    transition: color ease 150ms;
}

a:hover {
    color: theme('colors.blue.600');
    text-decoration: none;
}

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
    outline: 0;
}

hr {
    @apply my-4;
    border-color: theme('colors.gray.300');
}
```