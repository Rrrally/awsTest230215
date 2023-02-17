<template>
  <v-row>
  <v-card class="pa-3" color="orange" :width="abc.Wbreite(60)" :height="abc.Whöhe(62)">
    <client-only>
  
      <ol-map     :style="{
      height: abc.Whöhe(60) + 'px',
      width: abc.Wbreite(60)  + 'px',
     
    }">
      <ol-view
      ref="view"
      :center="abc.center"
      :zoom="abc.zoom"
      @centerChanged="abc.centerChanged"
      @zoomChanged="abc.zoomChanged"
      ></ol-view>
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <ol-attribution-control  />
      <ol-overviewmap-control>
        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>
    </ol-overviewmap-control>
    </ol-map>
  </client-only>
  </v-card>
  <v-card class="pt-12 pl-0" color="green" :width="abc.Wbreite(12)" :height="abc.Whöhe(80)">
    <v-btn @click="abc.zoomPlus()" variant="flat" color="secondary">+</v-btn>
  <v-btn @click="abc.zoomMinus()" variant="flat" color="secondary">-</v-btn>
  <v-card-text>{{ abc.zoom }}</v-card-text>
  </v-card>
</v-row>




</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";
import "@/style.css";

const abc = useabc();
const daten = useDaten();

// onMounted(() => {
//   abc.befehlR();
// });
// watch(
//   () => abc.variable,
//   (x, y) => {

//   }
// );
</script>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
