# Notifications component
1. First we need to use `vue-notification` package in our `app.js`:
```javascript
import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import Notifications from 'vue-notification';

// ...

Vue.use(Notifications);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```

2. In our `Main.vue` component we add our new the notification template:
```
<template>
    <div class="container mx-auto px-4">
        <Slideout menu="#sidebar" panel="#content">
            <div class="container">
                <div class="flex -mx-4 md:-mx-3">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </Slideout>
        <notifications group="notifications" position="bottom right">
            <template slot="body" slot-scope="props">
                <div class="flex justify-between items-center bg-black text-white rounded shadow-lg px-2 pl-3 pt-2 pb-2 mb-3">
                    <p class="leading-tight" v-html="props.item.text"></p>
                    <button class="inline-block bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded-sm select-none align-middle whitespace-no-wrap px-2 py-2 cursor-pointer ml-2" @click="props.close">
                        Close
                    </button>
                </div>
            </template>
        </notifications>
    </div>
</template>
```

3. To show a notification you can do. visit the [docs](https://www.npmjs.com/package/vue-notification) to learn more:
```javascript
<script>
	export default {
		methods: {
			showNotification() {
				this.$notify({
					group: 'notifications',
					text: 'Your new post has been created.',
					duration: 5000,
				});
			}
		}
	}
</script>
```