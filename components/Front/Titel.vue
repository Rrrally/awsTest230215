<template>
          <!-- <v-card
        class="pl-12 text-center"
        color="transparent"
        elevation="0"
        :width="abc.Wbreite(100)"
        :height="abc.Whöhe(65)"
      >
     
      </v-card> -->
      <!-- Feld über Bild Ende-->
      <!-- Schriftzug Anfang-->
      <v-card
        class="pl-12 d-flex text-center"
        color="transparent"
        :width="abc.Wbreite(80)"
        :height="abc.Whöhe(35)"
      >
        <v-card-title class="text-h4 text-md-h3 text-lg-h2 text-white">{{ abc.kundendaten.organisation }}</v-card-title>
        <v-card-text class="text-h5 text-white">von 1912 e.V.</v-card-text>
      </v-card>
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
