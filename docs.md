# Setup
1. After creating the tailwind config file inside your project, add the next configurations as well
```javascript
// Add these colors to the colors object
let colors = {
    'brand-grey-darker': '#606060',
    'brand-grey-light': '#b6bec6',
    'brand-grey-lighter': '#e9eef2',
    'brand-grey-lightest': '#f7f7f7',
}

module.exports = {

    // ...

    shadows: {
        'outline': '0 0 0 3px rgba(201, 210, 218, 0.5)',
        'button': '0 0 0 2px rgba(33, 150, 243, 0.3)',
        'alert': '0 1px 1px 0px rgba(0, 0, 0, 0.1)',
    }

    // ...

    modules: {
        width: ['responsive', 'hover'],
    }
    
    // ...

    plugins: [
        require('tailwindcss/plugins/container')({
            center: true,
            padding: '1rem',
        }),
    ],

    // ...

    // Optional
    // Add the default font
    fonts: {
        'sans': [
            'Source\\ Sans\\ Pro',
            // ...
        ],

        'serif': [
            'Source\\ Sans\\ Pro',
            // ...
        ]
    }
}
```
2. Add the default font into your `<head>` or use your own font.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Empathy</title>

    <!--- Make sure you are using the latest version of webfont loader -->
    <script  src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <script>
        WebFont.load({
            google:  {
                families:  ['Source Sans Pro:400,600']
            }
        });
    </script>
</head>
<body>
    
</body>
</html>
```
3. Import SASS files
After installation import the `sass` files into your project and copy the `variables` file in your working directory if you want to change the styling, colors, and animations.
```scss
@tailwind preflight;
@tailwind components;

@import '~empathy/src/sass/components/variables';
@import './your/project/directory/variables';

@import '~empathy/src/sass/components/normalize';
@import '~empathy/src/sass/components/navbar';
@import '~empathy/src/sass/components/slideout';
@import '~empathy/src/sass/components/panel';
@import '~empathy/src/sass/components/sidebar';
@import '~empathy/src/sass/components/content';
@import '~empathy/src/sass/components/notifications';
@import '~empathy/src/sass/components/breadcrumb';
@import '~empathy/src/sass/components/form';
@import '~empathy/src/sass/components/buttons';
@import '~empathy/src/sass/components/pagination';
@import '~empathy/src/sass/components/alerts';
@import '~empathy/src/sass/components/datatable';
@import '~empathy/src/sass/components/table';
@import '~empathy/src/sass/components/auth';

// Or
// @import '~empathy/src/sass/empathy';
// @import './your/project/directory/variables';

// Here your custom sass

@tailwind utilities;
```

4. JavaScript
You will need to import the required icons from fontawesome into your javaScript.
```javascript
import Vue from 'vue';
import { dom, config, library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faArrowAltCircleRight,
         faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faHome, faCubes, faAngleRight, faArrowRight,
         faArrowLeft, faTimes, faCheckCircle,
         faExclamationTriangle, faInfoCircle, faExclamationCircle,
         faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.searchPseudoElements = true;
dom.watch();
library.add(faBell, faHome, faCubes, faAngleRight,
            faArrowRight, faArrowLeft, faTimes, faCheckCircle,
            faExclamationTriangle, faInfoCircle, faExclamationCircle,
            faArrowDown, faArrowUp, faArrowAltCircleRight,
            faArrowAltCircleLeft);

Vue.component('Fa', FontAwesomeIcon);
// Example <Fa :icon="['fas',  'home']" />
```

5. Notifications
Then import the notifications package because we will need it later.
```javascript
import Notifications from 'vue-notification';

Vue.use(Notifications);
```

## Components

### Navbar
```html
<template>
    <nav class="navbar navbar-fixed">
        <div class="container">
            <div class="navbar-main">
                <div class="navbar-brand">
                    <a href="#">Empathy</a>
                </div>
                <ul class="navbar-menu">
                    <li class="navbar-item">
                        <a href="#" class="navbar-link select">Link1</a>
                    </li>
                    <li class="navbar-item">
                        <a href="signin.html" class="navbar-link">Sign in</a>
                    </li>
                    <li class="navbar-item">
                        <a href="signup.html" class="navbar-link">Sign up</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-notify">
                            <Fa :icon="['far', 'bell']" />
                            <span class="navbar-dot bg-red-dark text-white">8</span>
                        </a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-avatar" @click.prevent="dropdown = !dropdown">
                            <div class="navbar-avatar-info">
                                <span>John Doe</span>
                                <span><span class="navbar-status bg-green border-green-lighter"></span> Online</span>
                            </div>
                            <img class="img-fluid rounded-full" src="images/avatar.jpeg" alt="@john__doe" title="@john__doe">
                        </a>
                        <transition name="dropdown-slide-down">
                            <ul class="navbar-dropdown" v-if="dropdown">
                                <li class="navbar-dropdown-item">
                                    <a href="#" class="navbar-dropdown-link">Profile</a>
                                    <a href="#" class="navbar-dropdown-link">Sign out</a>
                                </li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                dropdown: false
            }
        },
    }
</script>

<style scoped>
    .dropdown-slide-down-enter-active, .dropdown-slide-down-leave-active {
        transition: all .3s ease;
    }
    .dropdown-slide-down-enter, .dropdown-slide-down-leave-to  {
        transform: translateY(-10px) translateX(10px);
        opacity: 0;
    }
</style>
```

### Panel
to build the panel area and the sidebar you will need to use `vue-slideout` package.
```html
<template>
    <!-- panel main component -->
    <Slideout menu="#sidebar" panel="#content">
        <div class="container">
            <div class="panel">
  
                <!-- Sidebar area -->
                <aside class="sidebar" id="sidebar">
                    <h2 class="sidebar-title">Menu</h2>
                    <ul class="sidebar-menu">
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link select">
                                <span class="sidebar-link-icon">
                                    <Fa :icon="['fas',  'home']" fixed-width />
                                </span>
                                Dashboard
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link" @click.prevent="dropdown = !dropdown">
                                <span class="sidebar-link-icon">
                                    <Fa :icon="['fas', 'cubes']" fixed-width />
                                </span>
                                Resources
                            </a>
                            <VueSlideUpDown :active="dropdown" class="sidebar-dropdown" :duration="100" tag="ul">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link select">Posts</a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Pages</a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Submissions</a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Media</a>
                                </li>
                            </VueSlideUpDown>
                        </li>
                    </ul>
                    <footer><small>&copy; Empathy {{ currentYear }}</small></footer>
                </aside>
  
                <!-- Panel content area -->
                <div class="content" id="content">
                    <ul class="breadcrumb">
                        <li>
                            <a href="#">Page foo</a>
                        </li>
                        <li>
                            <a class="select">Page bar</a>
                        </li>
                    </ul>
                    <h1 class="panel-title">Page bar</h1>
                    <div class="panel-card">
                        <!-- Page content -->
                    </div>
                </div>

            </div>

            <!-- Notifications area -->
            <notifications group="notes" position="bottom right" width="320">
                <template slot="body" slot-scope="props">
                    <div class="notification">
                        <div v-html="props.item.text"></div>
                        <a class="close" @click="props.close">
                            <Fa :icon="['fas', 'times']"></Fa>
                        </a>
                    </div>
                </template>
            </notifications>

        </div>
    </Slideout>
</template>

<script>
    import Slideout from 'vue-slideout';
    import VueSlideUpDown from 'vue-slide-up-down';
  
    export default {
        data() {
            return {
                dropdown: false,
                currentYear: new Date().getFullYear(),
            }
        },
        components:  { Slideout, VueSlideUpDown },
    }
</script>
```
### Alerts
```html
<template>
    <div>

        <!-- Success alert -->
        <div class="alert">
            <div>
                <p class="title">Success alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
            <span class="icon"></span>
        </div>

        <!-- Danger alert -->
        <div class="alert danger">
            <div>
                <p class="title">Danger alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
            <span class="icon"></span>
        </div>

        <!-- Info alert -->
        <div class="alert info">
            <div>
                <p class="title">Info alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
            <span class="icon"></span>
        </div>

        <!-- Warning alert -->
        <div class="alert warning">
            <div>
                <p class="title">Warning alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
            <span class="icon"></span>
        </div>

    </div>
</template>
```

### Notification
If you want to use the notification component some were else:
```html
<template>
    <div class="notification">
        <div>Your new post has been saved!</div>
        <a class="close">
            <Fa :icon="['fas',  'times']"></Fa>
        </a>
    </div>
</template>
```

### Breadcrumb
```html
<template>
    <ul class="breadcrumb">
        <li>
            <a href="#">Page 1</a>
        </li>
        <li>
            <a href="#">Page 2</a>
        </li>
        <li>
            <a href="#">Page 3</a>
        </li>
        <li>
            <a class="select">Page 4</a>
        </li>
    </ul>
</template>
```

### Buttons
```html
<template>
    <button class="button">Button</button>
    <button class="button success">Button</button>
    <button class="button danger">Button</button>
    <button class="button info">Button</button>
    <button class="button warning">Button</button>
</template>
```

### Horizontal Form
```html
<template>
    <form @submit.prevent="(e) => {}">
        <div class="flex flex-wrap -mx-2">
            <div class="input w-full md:w-1/2 px-2">
                <label for="full_name">Full name</label>
                <input type="text" id="full_name">
            </div>
            <div class="input w-full md:w-1/2 px-2">
                <label for="email">Email</label>
                <input type="email" id="email">
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full px-2">
                <label class="radio-label">Gender</label>
            </div>
            <div class="radio w-full md:w-1/2 px-2">
                <input type="radio" name="gender" id="male">
                <label for="male">Male</label>
            </div>
            <div class="radio w-full md:w-1/2 px-2">
                <input type="radio" name="gender" id="female">
                <label for="female">Female</label>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full px-2">
                <label class="checkbox-label">Your hobbies</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="basketball">
                <label for="basketball">Basketball</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="football">
                <label for="football">Football</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="tennis">
                <label for="tennis">Tennis</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="golf">
                <label for="golf">Golf</label>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2">
            <div class="input w-full md:w-1/2 px-2">
                <label for="profile_image">Profile image</label>
                <div class="file">
                    <input type="file" id="profile_image" @change='showFileName' tabindex="0">
                    <label for="profile_image">{{ inputFileName }}</label>
                </div>
            </div>
            <div class="input w-full md:w-1/2 px-2">
                <label for="country">Country</label>
                <select id="country">
                    <option value="">Select an option</option>
                    <option value="america">US</option>
                    <option value="unitedkingdom">UK</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                </select>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2">
            <div class="input w-full md:w-1/2 px-2">
                <label for="bio">Tell us more about you</label>
                <textarea id="bio"></textarea>
            </div>
            <div class="input w-full md:w-1/2 px-2">
                <label for="favorite_fruit">What's your favorite fruit?</label>
                <select id="favorite_fruit" multiple>
                    <option value="banana">Banana</option>
                    <option value="mango">Mango</option>
                    <option value="apple">Apple</option>
                </select>
            </div>
        </div>
        <div class="flex">
            <div class="w-full">
                <button type="submit" class="button">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                inputFileDefault: 'Choose file',
                inputFileName: 'Choose file',
            };
        },
        methods: {
            showFileName(e) {
                if(e.target.value != "") {
                    this.inputFileName = e.target.value.split(/(\\|\/)/g).pop();
                } else {
                    this.inputFileName = this.inputFileDefault;
                }
            },
        }
    }
</script>
```
### Vertical Form
```html
<template>
    <form @submit.prevent="(e) => {}">
        <div class="input">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/3 px-2">
                    <label for="vfull_name">Full name</label>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <input type="text" id="vfull_name">
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/3 px-2">
                    <label for="vemail">Email</label>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <input type="email" id="vemail">
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full md:w-1/3 px-2">
                <label class="checkbox-label">Gender</label>
            </div>
            <div class="w-full md:w-2/3 px-2">
                <div class="flex">
                    <div class="w-full">
                        <div class="radio">
                            <input type="radio" name="gender" id="vmale">
                            <label for="vmale">Male</label>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full">
                        <div class="radio">
                            <input type="radio" name="gender" id="vfemale">
                            <label for="vfemale">Female</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full md:w-1/3 px-2">
                <label class="radio-label">Your hobbies</label>
            </div>
            <div class="w-full md:w-2/3 px-2">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vbasketball">
                            <label for="vbasketball">Basketball</label>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vfootball">
                            <label for="vfootball">Football</label>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vtennis">
                            <label for="vtennis">Tennis</label>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vgolf">
                            <label for="vgolf">Golf</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/3 px-2">
                    <label for="vprofile_image">Profile image</label>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <div class="file">
                        <input type="file" id="vprofile_image" @change='showFileName' tabindex="0">
                        <label for="vprofile_image">{{ inputFileName }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/3 px-2">
                    <label for="vcountry">Country</label>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <select id="vcountry">
                        <option value="">Select an option</option>
                        <option value="america">U.S. of america</option>
                        <option value="unitedkingdom">United Kingdom</option>
                        <option value="japan">Japan</option>
                        <option value="china">China</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/3 px-2">
                    <label for="vbio">Tell us more about you</label>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <textarea id="vbio"></textarea>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/3 px-2">
                    <label for="vfavorite_fruit">What's your favorite fruit?</label>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <select id="vfavorite_fruit" multiple>
                        <option value="banana">Banana</option>
                        <option value="mango">Mango</option>
                        <option value="apple">Apple</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex -mx-2">
            <div class="ml-auto w-full md:w-2/3 px-2">
                <button type="submit" class="button">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                inputFileDefault: 'Choose file',
                inputFileName: 'Choose file',
            };
        },
        methods: {
            showFileName(e) {
                if(e.target.value != "") {
                    this.inputFileName = e.target.value.split(/(\\|\/)/g).pop();
                } else {
                    this.inputFileName = this.inputFileDefault;
                }
            },
        }
    }
</script>
```

### Pagination
```html
<template>
    <nav class="paginate">
        <a class="previous" href="#"><Fa :icon="['fas', 'arrow-left']" /> Prev</a>
        <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><span>&hellip;</span></li>
            <li><a href="#">6</a></li>
            <li><a class="select">7</a></li>
            <li><a href="#">8</a></li>
            <li><span>&hellip;</span></li>
            <li><a href="#">12</a></li>
            <li><a href="#">13</a></li>
        </ul>
        <a class="next" href="#">Next <Fa :icon="['fas', 'arrow-right']" /></a>
    </nav>
</template>
```

### Table
```html
<template>
    <div class="w-full">
        <h2 class="mb-4">Table example</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Entry Header 1</th>
                    <th>Entry Header 2</th>
                    <th>Entry Header 3</th>
                    <th>Entry Header 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Entry First Line 1</td>
                    <td>Entry First Line 2</td>
                    <td>Entry First Line 3</td>
                    <td>Entry First Line 4</td>
                </tr>
                <tr>
                    <td>Entry Line 1</td>
                    <td>Entry Line 2</td>
                    <td>Entry Line 3</td>
                    <td>Entry Line 4</td>
                </tr>
                <tr>
                    <td>Entry Last Line 1</td>
                    <td>Entry Last Line 2</td>
                    <td>Entry Last Line 3</td>
                    <td>Entry Last Line 4</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Entry Header 1</th>
                    <th>Entry Header 2</th>
                    <th>Entry Header 3</th>
                    <th>Entry Header 4</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
```

### DataTable
```html
<template>
    <div class="w-full">
        <h2 class="mb-4">DataTable example</h2>
        <DataTable
            :columns="columns"
            :rows="rows"
            :lineNumbers="true"
            :rtl="false"
            :search-options="{
                enabled: true,
                placeholder: 'Search this table',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
                perPage: 3,
                position: 'bottom',
                perPageDropdown: [3, 7, 9],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                ofLabel: 'of',
                pageLabel: 'page', // for 'pages' mode
                allLabel: 'All',
            }"
            :selectOptions="{
                enabled: true,
                selectOnCheckboxOnly: true,
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
            }"
            @on-row-click="onRowClick"
            :groupOptions="{
  	            enabled: false
            }"
        >
            <div slot="table-actions">
                <button class="button success ml-2">Completed</button>
                <button class="button warning">Pending</button>
                <button class="button danger">Rejected</button>
            </div>
            <div slot="emptystate" class="text-center">
                <em>No data for table!</em>
            </div>
            <div slot="loadingContent">
                <span class="vgt-loading__content"></span>
            </div>
        </DataTable>
    </div>
</template>

<script>
    import { VueGoodTable as DataTable } from 'vue-good-table';

    let btn = `
        <div class="text-center">
            <button class="button info">Open</button>
            <button class="button success">Edit</button>
            <button class="button danger">Delete</button>
        </div>
    `;

    export default {
        data() {
            return {
                columns: [
                    { label: 'Name', field: 'name', filterOptions: {
                            enabled: false, // enable filter for this column
                            placeholder: 'Filter This Thing', // placeholder for filter input
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        },
                    },
                    { label: 'Age', field: 'age', type: 'number', },
                    { label: 'Created On', field: 'createdAt', dateInputFormat: 'YYYY-MM-DD', dateOutputFormat: 'MMM Do YY', type: 'date', },
                    { label: 'Percent', field: 'score', type: 'percentage', },
                    { label: 'Action', field: 'btn', html: true, filterOptions: {
                            enabled: false
                        },
                    },
                ],
                rows: [
                    { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343, btn: btn, },
                    { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343, btn: btn, },
                    { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343, btn: btn, },
                    { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343, btn: btn, },
                    { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343, btn: btn, },
                    { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343, btn: btn, },
                ],
            };
        },
        components: { DataTable },
        methods: {
            onRowClick(params) {
                console.log('Clicked!');
            }
        }
    }
</script>
```

### Sign in
```html
<template>
    <div class="h-screen">
        <div class="auth h-full">
            <div class="auth-main">
                <div class="auth-content">
                    <h1 class="auth-title">Sign in</h1>
                    <form @submit.prevent="(e) => {}">
                        <div class="input">
                            <label for="aemail">Email</label>
                            <input type="email" id="aemail">
                            <span class="input-error">The email field is required.</span>
                        </div>
                        <div class="input">
                            <label for="apassword">Password</label>
                            <input type="password" id="apassword">
                            <span class="input-error">The password field is required.</span>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="remember">
                            <label for="remember">Remember me</label>
                        </div>
                        <div class="flex">
                            <button type="submit" class="button w-full">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="text-center mt-4">
                    <a href="#">Forgot password?</a>
                </div>
            </div>
        </div>
    </div>
</template>
```