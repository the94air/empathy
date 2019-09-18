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
