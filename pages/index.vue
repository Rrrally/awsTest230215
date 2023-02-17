<template>
  <span v-if="abc.datenGeladen === true">
    <span v-if="abc.wartung === true">
   <NavWartung></NavWartung>
    </span>
    <span v-else>
      <div class="hinten">
      <FrontHinten></FrontHinten>
    </div>
    <div class="vorne">
      <FrontVorne></FrontVorne>
    </div>
    </span>
 
 
  </span>
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
.hinten {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.vorne {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
