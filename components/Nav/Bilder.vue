<template>
       <v-row>
  <v-card class="pa-0" color="orange" :width="abc.Wbreite(44)" :height="abc.Whöhe(100) + 1000">
  <NavBilder1></NavBilder1>
  </v-card>
  <v-card class="pa-5" color="green" :width="abc.Wbreite(50)" :height="abc.Whöhe(80)">
   <NavBilder2></NavBilder2>
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
watch(
  () => abc.tabBereich,
  (x, y) => {
    
  }
);
</script>

<script>
export default {
  props: {},
  data() {
    return {
    //   previewImage: null,
    // foto: {},
    };
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {

  },
  watch: {},
};
</script>

