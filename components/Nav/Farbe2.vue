<template>
  <v-radio-group v-model="abc.radioX1">
    <v-row>
      <v-col cols="2">
        <v-radio :value="0"></v-radio>
      </v-col>
      <v-col cols="8">
        <v-card :color="abc.farbeOben" :class="abc.farbeObenT[1]">
      <v-card-text>
        Leiste Oben
      </v-card-text>
    </v-card>
      </v-col>
      <v-col cols="2">
        <v-radio :value="1"></v-radio>
      </v-col>
      <v-col cols="2">
        <v-radio :value="2"></v-radio>
      </v-col>
      <v-col cols="8">
        <v-card :color="abc.farbeLinks" :class="abc.farbeLinksT[1]">
      <v-card-text>
        Leiste Links
      </v-card-text>
    </v-card>
      </v-col>
      <v-col cols="2">
        <v-radio :value="3"></v-radio>
      </v-col>
      <v-col cols="2">
        <v-radio :value="4"></v-radio>
      </v-col>
      <v-col cols="8">
        <v-card :color="abc.farbeUnten" :class="abc.farbeUntenT[1]">
      <v-card-text>
        Leiste Unten
      </v-card-text>
    </v-card>
      </v-col>
      <v-col cols="2">
        <v-radio :value="5"></v-radio>
      </v-col>
      <v-col cols="2">
        <v-radio :value="6"></v-radio>
      </v-col>
      <v-col cols="8">
        <v-card :color="abc.farbeHintergrund" :class="abc.farbeHintergrundT[1]">
      <v-card-text>
        Hintergrund
      </v-card-text>
    </v-card>
      </v-col>
      <v-col cols="2">
        <v-radio :value="7"></v-radio>
      </v-col>
    </v-row>
  </v-radio-group>
  <v-btn
@click="abc.farbeSpeichern()"
      variant="flat"
      color="error"
    >
      Speichern
    </v-btn>

     
  
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


