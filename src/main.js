import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'mapbox-gl/dist/mapbox-gl.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faAnglesLeft, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faSpotify, faAnglesLeft, faMapLocationDot)

createApp(App).use(VueSweetalert2);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
