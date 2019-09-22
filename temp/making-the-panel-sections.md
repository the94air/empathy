# Making the panel sections
1. To make the panel area we need to use `vue-slideout` package. You can visit the [docs](https://github.com/vouill/vue-slideout) to learn more. Inside our `Main.vue` we will add the sidebar and the content components:
```javascript
<template>
    <div class="container mx-auto px-4">
        <Slideout menu="#sidebar" panel="#content">
            <div class="container">
                <div class="flex -mx-4 md:-mx-2">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </Slideout>
    </div>
</template>

<script>
    import Slideout from 'vue-slideout';
    import Sidebar from './Sidebar';
    import Content from './Content';

    export default {
        components: { Sidebar, Content, Slideout }
    }
</script>
```

2. To make the sidebar we first need to install Fontawesome in our `app.js`. To learn more visit the [docs](https://github.com/FortAwesome/vue-fontawesome):
```javascript
import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';

import { dom, config, library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faHome, faUser, faUsers, faCubes, faAngleRight, faArrowRight,
         faArrowLeft, faTimes, faCheckCircle, faExclamationTriangle,
         faInfoCircle, faExclamationCircle, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

WebFont.load({
    google:  {
        families:  ['Source Sans Pro:400,600']
    }
});

config.searchPseudoElements = true;

dom.watch();

library.add(faHome, faUser, faUsers, faCubes, faAngleRight,
            faArrowRight, faArrowLeft, faTimes, faCheckCircle, faExclamationTriangle,
            faInfoCircle, faExclamationCircle, faArrowDown, faArrowUp, faArrowAltCircleRight, faArrowAltCircleLeft);

Vue.component('Fa', FontAwesomeIcon);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```

3. Then we add the sidebar component. Here we will be are using `vue-slide-up-down` package to slide animate child menu items:
```javascript
<template>
    <aside class="w-8/12 px-4 sm:w-5/12 md:mt-32 md:px-2 md:w-1/3 lg:w-1/5 lg:px-3" id="sidebar">
        <h2 class="text-base font-semibold uppercase mb-5">Menu</h2>
        <ul class="sidebar-menu flex flex-col select-none">
            <li>
                <a href="#" class="flex border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3 select">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'home']" fixed-width />
                    </span>
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="flex border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'user']" fixed-width />
                    </span>
                    Profile
                </a>
            </li>
            <li>
                <a href="#" class="sidebar-dropdown flex border-l-2 border-gray-300 bg-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3" @click.prevent="dropdown = !dropdown">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'cubes']" fixed-width />
                    </span>
                    <span class="w-full flex justify-between">
                        <span class="text-gray-700">
                             Resources
                        </span>
                        <span class="sidebar-angle text-gray-500 text-right">
                            <Fa :icon="['fas', 'angle-right']" fixed-width :rotation="dropdown ? '90' : null" />
                        </span>
                    </span>
                </a>
                <VueSlideUpDown class="ml-6" :active="dropdown" :duration="150" tag="ul">
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Posts</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Pages</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Submissions</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Media</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg select">Active</a>
                    </li>
                </VueSlideUpDown>
            </li>
            <li>
                <a href="#" class="flex border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'users']" fixed-width />
                    </span>
                    Users
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    import VueSlideUpDown from 'vue-slide-up-down';

    export default {
        data() {
            return {
                dropdown: false,
            };
        },
        components: { VueSlideUpDown }
    }
</script>
```

4. Then we add the content component:
```javascript
<template>
    <div class="w-full px-4 mt-32 sm:mb-16 md:px-2 md:w-4/6 lg:w-4/5 lg:px-3" id="content">
        <h1 class="text-3xl">Dashboard</h1>
        <div class="bg-white shadow-lg rounded-lg p-6 md:p-8">
            <p class="h-48">Content here</p>
        </div>
    </div>
</template>
```

And now we have a complete lightweight responsive admin panel.