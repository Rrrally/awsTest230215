<template>
  <v-sheet
    class="overflow-y-auto"
    :height="abc.Whöhe(100)"
    color="transparent"
    v-scroll.self="abc.onScroll"
  >
    <v-sheet
      height="500vh"
      class="align-center text-center pa-15"
      color="transparent"
    >
      <Front2100Spalte1></Front2100Spalte1>
    </v-sheet>
  </v-sheet>
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

<style scoped>
.sichtbarkeit {
  visibility: hidden;
  height: 50px;
}
</style>
