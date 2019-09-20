# DataTable component
1. First we need to use the `vue-good-table` package in our `app.js`:
```javascript
import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import Notifications from 'vue-notification';
import VueGoodTablePlugin from 'vue-good-table';

// ...

Vue.use(Notifications);
Vue.use(VueGoodTablePlugin);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```

2. Then:
```

```