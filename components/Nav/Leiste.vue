<template>
  <v-row>
  <v-card class="pa-5" color="orange" :width="abc.Wbreite(47.5)" :height="abc.Whöhe(80)">
    <NavLeiste1></NavLeiste1>
  </v-card>
  <v-card class="pa-5" color="green" :width="abc.Wbreite(47.5)" :height="abc.Whöhe(80)">
    <NavLeiste2></NavLeiste2>
  </v-card>
</v-row>
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
