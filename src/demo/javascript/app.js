import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import Notifications from 'vue-notification';
import VueGoodTablePlugin from 'vue-good-table';

import { dom, config, library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faUsers, faCubes, faAngleRight, faCheckCircle, faExclamationTriangle,
         faInfoCircle, faExclamationCircle, faChevronLeft, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

WebFont.load({
    google: {
        families:  ['Source Sans Pro:400,600']
    }
});

config.searchPseudoElements = true;
dom.watch();

library.add(faHome, faUser, faUsers, faCubes, faAngleRight,
            faCheckCircle, faExclamationTriangle,
            faInfoCircle, faExclamationCircle, faChevronLeft, faArrowDown, faArrowUp);

Vue.component('Fa', FontAwesomeIcon);

Vue.use(Notifications);
Vue.use(VueGoodTablePlugin);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
