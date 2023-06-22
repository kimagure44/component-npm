import Vue from 'vue';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

/* eslint-disable import/prefer-default-export */
export { default as VueMap } from './vue-map.vue';
