<template>
  <div style="height: 350px;">
    <div class="info" style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <l-map style="height: 80%; width: 100%" :zoom="zoom" :center="center" @update:zoom="zoomUpdated"
      @update:center="centerUpdated" @update:bounds="boundsUpdated">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: null
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
}
</script>
<style>
@import '../../node_modules/leaflet/dist/leaflet.css';
</style>