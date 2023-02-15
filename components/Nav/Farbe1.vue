<template>
  <div class="d-flex justify-space-around">
    <v-color-picker
      v-if="abc.radioX1 === 0"
      v-model="abc.farbeOben"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker>

    <v-card 
    v-if="abc.radioX1 === 1"
    height="100" :width="abc.Wbreite(40)" class="pa-4 ma-4">

      <v-slider
        v-model="abc.slider1"
        step="1"
        max="21"
        min="0"
        color="orange"
        label="Text-Color"
      ></v-slider>
      {{ abc.farbeObenT }}
    </v-card>

    <v-color-picker
      v-if="abc.radioX1 === 2"
      v-model="abc.farbeLinks"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker>
    <!-- <v-color-picker
      v-if="abc.radioX1 === 3"
      v-model="abc.farbeLinksT"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker> -->
    <v-card 
    v-if="abc.radioX1 === 3"
    height="100" :width="abc.Wbreite(40)" class="pa-4 ma-4">
      <v-slider
        v-model="abc.slider1"
        step="1"
        max="21"
        min="0"
        color="orange"
        label="Text-Color"
      ></v-slider>
      {{ abc.farbeUntenT }}
    </v-card>
    <v-color-picker
      v-if="abc.radioX1 === 4"
      v-model="abc.farbeUnten"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker>
    <!-- <v-color-picker
      v-if="abc.radioX1 === 5"
      v-model="abc.farbeUntenT"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker> -->
    <v-card 
    v-if="abc.radioX1 === 5"
    height="100" :width="abc.Wbreite(40)" class="pa-4 ma-4">
      <v-slider
        v-model="abc.slider1"
        step="1"
        max="21"
        min="0"
        color="orange"
        label="Text-Color"
      ></v-slider>
      {{ abc.farbeLinksT }}
    </v-card>
    <v-color-picker
      v-if="abc.radioX1 === 6"
      v-model="abc.farbeHintergrund"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker>
    <!-- <v-color-picker
      v-if="abc.radioX1 === 7"
      v-model="abc.farbeHintergrundT"
      class="ma-2"
      show-swatches
      swatches-max-height="400px"
    ></v-color-picker> -->
    <v-card 
    v-if="abc.radioX1 === 7"
    height="100" :width="abc.Wbreite(40)" class="pa-4 ma-4">
      <v-slider
        v-model="abc.slider1"
        step="1"
        max="21"
        min="0"
        color="orange"
        label="Text-Color"
      ></v-slider>
      {{ abc.farbeHintergrundT }}
    </v-card>
  </div>
</template>

<script setup>
import { useabc } from "@/stores/abc";
import { useDaten } from "@/stores/daten";

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
watch(
  () => abc.slider1,
  (x, y) => {
    const a = abc.slider1;
    const b = daten.NavColor3[abc.slider1];
    if (abc.radioX1 === 1) {
      abc.farbeObenT = [a, b];
    } else if (abc.radioX1 === 3) {
      abc.farbeLinksT = [a, b];
    } else if (abc.radioX1 === 5) {
      abc.farbeUntenT = [a, b];
    } else if (abc.radioX1 === 7) {
      abc.farbeHintergrundT = [a, b];
    } else {
      console.log("Fehler Textfarbe");
    }
  }
);
watch(
  () => abc.radioX1,
  (x, y) => {
  console.log("Wechsel RadioX1");
    if (abc.radioX1 === 1) {
    abc.slider1 = abc.farbeObenT[0]
    } else if (abc.radioX1 === 3) {
      abc.slider1 = abc.farbeLinksT[0]
    } else if (abc.radioX1 === 5) {
      abc.slider1 = abc.farbeUntenT[0]
    } else if (abc.radioX1 === 7) {
      abc.slider1 = abc.farbeHintergrundT[0]
    } else {
      console.log("Fehler Sliderwert");
    }
  }
);
</script>

<script>
export default {
  props: {},
  data() {
    return {
      // farbe: "",
      // slider1: 0,

      swatches: [
        ["#FF0000", "#AA0000", "#550000"],
        ["#FFFF00", "#AAAA00", "#555500"],
        ["#00FF00", "#00AA00", "#005500"],
        ["#00FFFF", "#00AAAA", "#005555"],
        ["#0000FF", "#0000AA", "#000055"],
      ],
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>
